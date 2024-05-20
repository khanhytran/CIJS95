// SliderBanner.js
import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/css';

const SliderBanner = () => {
    return (
        <Splide
            options={{
                type: 'loop',
                perPage: 1,
                autoplay: true,
                interval: 3000,
            }}
        >
            <SplideSlide>
                <img src="https://via.placeholder.com/800x300?text=Slide+1" alt="Slide 1" />
            </SplideSlide>
            <SplideSlide>
                <img src="https://via.placeholder.com/800x300?text=Slide+2" alt="Slide 2" />
            </SplideSlide>
            <SplideSlide>
                <img src="https://via.placeholder.com/800x300?text=Slide+3" alt="Slide 3" />
            </SplideSlide>
            {/* Add more slides as needed */}
        </Splide>
    );
};

export default SliderBanner;
