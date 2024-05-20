import React from 'react'
import './Intro.css'
import img1 from './image/SVG1.svg'
import img2 from './image/SVG2.svg'


export default function Intro() {
  return (
    <div id='section-tech'className='section-tech m-5'>
      <div className="container mx-auto px-5 mt-12">
        <div className="text-center mb-10 ">
          <div className="flex flex-col justify-center">
            <h2 className='text-2x1 text-gray-800 flex flex-col justify-center mb-2'>
              <b className='mb-3 text-4xl'>Công Nghệ Dẫn Đầu</b>
              <b className='text-4xl fw-700 style'>Luyện Thi TOEIC Dễ Dàng - Hiệu Quả!</b>
            </h2>
          </div>
          <p className='text-gray-800'>Luyện thi TOEIC hiệu quả hơn nhờ công nghệ hiện đại chỉ có duy nhất tại Prep.vn</p>
        </div>
        <div className="flex text-center mb-20">
          <div className="mb-20 w-50">
            <div className="img">
              <img src={img1} alt="" />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className='fw-700 text-16'>Luyện đề mỗi ngày cùng Test Practice</h3>
              <p className='text-14'>Luyện đề TOEIC hoàn toàn miễn phí.</p>
              <p className='text-14'>Tổng hợp đề Hot và thịnh hành nhất</p>
            </div>
          </div>
          <div className="mb-20 w-50">
            <div className="img">
              <img src={img2} alt="" />
            </div>
            <div className="flex flex-col justify-center">
            <h3 className='fw-700 text-16'>Hệ thống bài thực hành đồ sộ</h3>
              <p className='text-14'>Bài tập, thực hành được chấm và kèm giải thích đáp án siêu chi tiết.</p>
              <p className='text-14'>Học 1 biết 10 vận dụng siêu tối đa</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
