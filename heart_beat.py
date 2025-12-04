import pygame
import pygame.gfxdraw
import numpy as np
from colorsys import hsv_to_rgb

pygame.init()

# Set up the drawing window
W, H = 800, 800
screen = pygame.display.set_mode((H, W))
pygame.display.set_caption("Realistic Heartbeat")

def draw_circle(screen, x, y, r, color):
    pygame.gfxdraw.filled_circle(screen, x, y, r, color)

def rand(a0, a1):
    return np.random.rand() * (a1 - a0) + a0

# Heart curve coefficients
size_steps = 100
a = np.linspace(13, 13, size_steps)
b = np.linspace(-5, -3.3, size_steps)
c = np.linspace(-2, -2.4, size_steps)
d = np.linspace(-1, -0.16, size_steps)
scalex = np.linspace(1, 1.18, size_steps) * 10
scaley = np.linspace(1, 1.36, size_steps) * 10

class PersistentParticle:
    def __init__(self, t, size, color, off_s):
        self.t = t
        self.off_s = off_s
        self.size = size
        self.color = color

    def draw(self, screen, scale_index):
        x, y = self.get_pos(scale_index)
        draw_circle(screen, x, y, self.size, self.color)

    def get_pos(self, i):
        t = self.t
        x_pos = 16 * np.sin(t) ** 3
        x_pos *= (scalex[i] + self.off_s)
        y_pos = a[i] * np.cos(t) + b[i] * np.cos(2*t) + c[i] * np.cos(3*t) + d[i] * np.cos(4*t)
        y_pos *= (scaley[i] + self.off_s)
        return int(x_pos + W / 2), int(-y_pos + H / 2)

class GlitterParticle:
    def __init__(self, t, size, color, off_x, off_y, off_s, phi):
        self.t = t
        self.off_x = off_x
        self.off_y = off_y
        self.off_s = off_s
        self.size = size
        self.color = color
        self.phi = phi

    def draw(self, screen, scale_index):
        x, y = self.get_pos(scale_index)
        alpha = int(128 * np.cos(self.phi + scale_index / 5) + 127)
        color = (self.color[0], self.color[1], self.color[2], alpha)
        draw_circle(screen, x, y, self.size, color)

    def get_pos(self, i):
        t = self.t
        x_pos = 16 * np.sin(t) ** 3
        x_pos += self.off_x
        x_pos *= (scalex[i] + self.off_s)
        y_pos = a[i] * np.cos(t) + b[i] * np.cos(2*t) + c[i] * np.cos(3*t) + d[i] * np.cos(4*t)
        y_pos += self.off_y
        y_pos *= (scaley[i] + self.off_s)
        return int(x_pos + W / 2), int(-y_pos + H / 2)

# Generate particles
persistent_particles = []
for _ in range(4):  # doubled layers
    for t in np.concatenate((
        np.linspace(0.18, 3.14-0.18, 1200),  # more points on left half
        np.linspace(3.14+0.18, 2*np.pi-0.18, 1200)  # more points on right half
    )):
        off_s = -np.random.exponential(1.6)
        size = int(rand(1.2, 2.0))  # smaller dots for sharpness
        red, green, blue = hsv_to_rgb(0.95, rand(0.2, 0.7), 1)
        alpha = np.random.rand() * 255
        color = (int(red*255), int(green*255), int(blue*255), int(alpha))
        persistent_particles.append(PersistentParticle(t, size, color, off_s))

glitter_particles = []
for _ in range(3):  # more sparkle layers
    for t in np.concatenate((
        np.linspace(0.2, 3.14-0.2, 1200),
        np.linspace(3.14+0.2, 2*np.pi-0.2, 1200)
    )):
        off_x, off_y = np.random.randn()*1.5, np.random.randn()*1.5
        off_s = np.random.randn() * 1.3 - 1.6
        size = int(rand(1.0, 2.0))
        red, green, blue = hsv_to_rgb(0.95, rand(0.5, 0.8), 1)
        phi = rand(0, 2*np.pi)
        glitter_particles.append(
            GlitterParticle(t, size, (int(red*255), int(green*255), int(blue*255)), off_x, off_y, off_s, phi)
        )


# Heartbeat timing
fps = 60
bpm = 360
beat_interval = 60 / bpm  # seconds per beat
frames_per_beat = int(fps * beat_interval)

frame = 0
clock = pygame.time.Clock()
running = True

while running:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False

    screen.fill((0, 0, 0))

    # Heartbeat pulse shape: fast contraction + slow relaxation
    beat_phase = (frame % frames_per_beat) / frames_per_beat
    # nonlinear easing (closer to real heart beat)
    if beat_phase < 0.25:  
        # Quick contraction
        scale_index = int(size_steps-1 - beat_phase*4*(size_steps-1))
    else:
        # Slow relaxation
        relax_phase = (beat_phase-0.25)/0.75
        scale_index = int(relax_phase * (size_steps-1))

    for p in persistent_particles:
        p.draw(screen, scale_index)

    for p in glitter_particles:
        p.draw(screen, size_steps-1-scale_index)

    frame += 1
    pygame.display.flip()
    clock.tick(fps)

pygame.quit()