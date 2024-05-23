// SliderBanner.js
import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/css';
import toeic_1 from '../image/toeic_1.png'
import toeic_2 from '../image/toeic_2.png'
import toeic_3 from '../image/toeic_3.png'
import './SliderBanner.css'

const SliderBanner = () => {
    return (
        <Splide
            options={{
                type: 'loop',
                perPage: 1,
                autoplay: true,
                interval: 3000,
                arrows: false,
            }}
        >
            <SplideSlide>
                <img src={toeic_1} alt="Slide 1" />
            </SplideSlide>
            <SplideSlide>
                <img src={toeic_2} alt="Slide 2" />
            </SplideSlide>
            <SplideSlide>
                <img src={toeic_3} alt="Slide 3" />
            </SplideSlide>
            {/* Add more slides as needed */}
        </Splide>
    );
};

export default SliderBanner;
