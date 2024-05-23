import React from 'react'
import './CTA.css'
import header from './image/header.svg'
import arrow from './image/ArrowRight.svg'

export default function CTA() {
  return (
    <div className='section-cta relative'>
        <div className="bg-cta absolute flex justify-center items-center left-0 right-0 bottom-0 top-0 over-hidden">
            <img className='object-cover min-w-full h-full' src="https://prepedu.com/imgs/landingpage/bg-cta-2.svg" alt="background" />
        </div>
        <div className="container px-8 relative mx-auto pl-14">
            <div className="grid grid-cols-2 gap items-center">
                <div className="flex flex-col w-full text-left">
                    <h3 className='flex flex-col'>
                        <b className='flex flex-col text-left justify-start mb-2'>
                            <b className='fw-700 text-white text-4x1'>Luyện Thi <b className='fw 700 style text-3x1'>TOEIC</b> Cấp Tốc - Hiệu Quả</b>
                        </b>
                    </h3>
                    <p className='text-white my-3'>Chủ động học với Study Plan và Learning Profile cá nhân hóa</p>
                    <p className='text-white my-3'>Tự học online nhưng không một mình</p>
                    <div className="flex flex-row gap-4">
                        <button className='bg-blue-500 text-white inline-flex hover-scale-up px-7 py-3 fw-700 items-center w-auto justify-center rounded-md'><img src={arrow} alt="arrow" className='svg-inline--fa'/><span className='my-2 text-16'>Giúp tôi xây dựng lộ trình học </span></button>
                        <button className='bg-white style inline-flex hover-scale-up px-7 py-3 fw-700 items-center justify-center rounded-md'><img src={header} alt="header" className='svg-inline--fa'/><span className='my-2 text-16'>Tôi cần tư vấn thêm </span></button>
                    </div>
                </div>
                <div className="flex items-center justify-center overflow-hidden col-span-1">
                    <div className="flex flex-col items-center pt-5">
                        <img className='object-cover' src="https://prepedu.com/imgs/landingpage/bg-cta-toeic.png" alt="Tự học Toeic" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
