import React from 'react'
import './Hero.css'
import header from '../Hero/image/Img.svg'
import dot from '../Hero/image/SVG.svg'
import SliderBanner from './component/SliderBanner';

export default function Hero() {
  return (
    <div className='bg-light-blue mb-20'>
        <div className="relative container  flex flex-col md\:px-20 sm\:flex-row px-5 py-10 ">
          <div className="left">
            <div className="text-box">
              <h1 className='flex flex-col'>
                <b className='text-5x1 fw-700'>Luyện Thi</b>
                <b className='text-5x1 fw-700 style'>TOEIC</b>
                <b className='text-5x1 fw-700 mb-4' >Hiệu Quả</b>
              </h1>
              <div className="tex-black text-16 fw-700">
                <p>Cơ hội mở rộng - Chinh phục công việc ước mơ</p>
              </div>
            </div>
            <div className="flex flex-col justify-start">
              <button className='bg-blue hover-scale-up py-4 my-5 rounded-xl text-white text-20 fw-700'><span>Xây dựng lộ trình cho tôi</span></button>
              <button className='bg-white style hover-scale-up py-4 my-2 rounded-xl lg\:w-3\/4 text-20 fw-700'><img src={header} alt="header" className='svg-inline--fa'/><span className='my-2 text-16'>Đăng ký nhận tư vấn</span></button>
            </div>
            <div className="flex item-center">
              <div className="avt-item w-10 h-10 rounded-full border-2 border-gray-50 flex items-center justify-center overflow-hidden sm\:w-12 sm\:h-12 ml-3"><img className='object-cover min-w-full h-full' src="https://prepedu.com/imgs/landingpage/avt/avt1.png" alt="avatar" /></div>
              <div className="avt-item w-10 h-10 rounded-full border-2 border-gray-50 flex items-center justify-center overflow-hidden sm\:w-12 sm\:h-12 ml-3"><img className='object-cover min-w-full h-full' src="https://prepedu.com/imgs/landingpage/avt/avt2.png" alt="avatar" /></div>
              <div className="avt-item w-10 h-10 rounded-full border-2 border-gray-50 flex items-center justify-center overflow-hidden sm\:w-12 sm\:h-12 ml-3"><img className='object-cover min-w-full h-full' src="https://prepedu.com/imgs/landingpage/avt/avt3.png" alt="avtar" /></div>
              <div className="avt-item w-10 h-10 rounded-full border-2 border-gray-50 flex items-center justify-center overflow-hidden sm\:w-12 sm\:h-12 ml-3"><img className='object-cover min-w-full h-full' src="https://prepedu.com/imgs/landingpage/avt/avt4.png" alt="avtar" /></div>
              <div className="avt-item w-10 h-10 rounded-full border-2 border-gray-50 flex items-center justify-center overflow-hidden sm\:w-12 sm\:h-12 text-gray bg-gray-100 ml-3"><img className='h-4 w-4' src={dot} alt="avatar" /></div>
              <div className=" ml-7 text-left">
                <p className='text-black text-36 font-extra-bold sm\:text-4xl'>100+</p>
                <p className='text-black text-14'>Học viên đạt Toeic 800+</p>
              </div>
            </div>
          </div>
          <div className="right">
            <SliderBanner/>
          </div>
        </div>
    </div>
  )
}
