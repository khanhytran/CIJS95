import React, { useState } from 'react'
import Current from '../../component/Current'
import useCourseStore from '../../../store/courseStore'
import '../../style.css'
import './Course.css'
import CardCourse from '../../component/CardCourse'

export default function Course() {
  const currentCourse = useCourseStore((state) => state.currentCourse);
  const aimCourse = useCourseStore((state) => state.aimCourse);
  const courseData = useCourseStore((state) => state.courseData);
  const [currentSelected, setCurrentSelected] = useState();
  const [choose, setChoose] = useState();
  const [currentFilter, setCurrentFilter] = useState('Listening + Reading (LR)');
  const options = ['Listening + Reading (LR)', 'Speaking + Writing (SW)', 'Listening + Reading + Speaking + Writing (4KN)'];

  const handleClick = (id) => {
    setCurrentSelected(id);
  };

  const handleChoose = (id) => {
    setChoose(id);
  };

  const handleFilterChange = (filter) => {
    setCurrentFilter(filter);
  };
  return (

    <div className='section-course relative' style={{ background: 'linear-gradient(rgb(255, 255, 255) 0%, rgb(226, 239, 255) 45.31%, rgb(255, 255, 255) 100%)' }}>
      <div className="container mx-auto md:px-5 mt-16 lg:mt-12 px-2 ">
        <div className="text-center">
          <h2 className='mb-2 flex flex-col'>
            <b className='text-2x1 sm:text-4x1 fw-700 mb-2 text-gray-80'>Xây Dựng Lộ Trình Luyện Thi TOIEC</b>
            <b className='text-2x1 sm:text-4x1 fw-700 mb-2 text-gray-80' style={{ color: 'rgb(0, 75, 141)' }}>Cá nhân hóa</b>
          </h2>
          <p className='text-gray-́800'>Lộ trình học chi tiết, phù hợp và dành riêng cho bạn</p>
        </div>
        <div className="mt-7 text-center">
        <div className="inline-flex flex mx-auto bg-white rounded-16px border border-neutral-200 p-4px">
            {options.map(option => (
              <div className="block x1:inline-block" key={option}>
                <button
                  role="button"
                  className={`rounded-12px px-40px py-12px text-16px ${currentFilter === option ? 'text-white bg-blue-500 hover:bg-blue-600' : 'bg-white text-gray-500'} w-full font-semibold`}
                  onClick={() => handleFilterChange(option)}
                >
                  {option}
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="relative rounded-x1 md:rounded-3x1 sm:shadow-x1 bg-white border border-gray-200 sm:p-5 mt-10 mb-16 lg:mb-20">
          <div className="step-1 mb-8 px-4 md:px-8">
            <div className="relative rounded-x1 mt-3 sm:mt-5">
              <div className="py-2 md:py-0 flex flex-col sm:flex-row items-start sm:items-center sm:pt-5 text-left">
                <h3 className='fw-̃700 sm:font-extrabold text-20 flex-1 text-gray-800'>Hãy chọn trình độ hiện tại của bạn</h3>
              </div>
              <div className="overflow-auto sm:py-4">
                <div className='flex items-center w-max sm:w-full space-x-5 pb-8 sm:p-0'>
                  {currentCourse.filter((item) => item.type === currentFilter).map((item) => {
                    return <Current key={item.id} name={item.name} level={item.level} description={item.description} isActive={item.id == currentSelected} handleClick={() => {
                      handleClick(item.id)
                    }} />
                  })}
                </div>
              </div>
            </div>
            <div className="relative z-1 rounded-x1 mt-3 sm:mt-5">
              <div className="py-2 md:py-0 flex flex-col sm:flex-row items-start sm:items-center text-left">
                <h3 className='fw-̃700 sm:font-extrabold text-20 flex-1 text-gray-800'>Chọn mục tiêu bạn muốn chinh phục</h3>
              </div>
              <div className="overflow-auto sm:py-4">
                <div className='flex items-center w-max sm:w-full space-x-5 pb-8 sm:p-0'>
                  {aimCourse.filter((item) => item.type === currentFilter).map((item) => {
                    return <Current key={item.id} level={item.level} description={item.description} isActive={item.id == choose} handleClick={() => {
                      handleChoose(item.id)
                    }} />
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="step-2 mt-5 mb-8 px-4 md:px-8 relative">
            <div>
              <h3 className='fw-700 py-3 text-20 text-left text-gray-800'>Chi tiết lộ trình học phù hợp dành cho bạn</h3>
              <div id='road-map' className="rounded-lg sm:block overflow-auto px-5 md:mx-0 py-5 my-2 bg-blue-50"></div>
              <div className="list-card-course relative">
                <div className="w-0.5 left-3.5 sm:left-4 top-5 bottom-0 ml-1 z-1 absolute bg-gray-100"></div>
                <div className="relative pt-1">
                {courseData.filter((item) => item.type === currentFilter).map((item) => {
                    return <CardCourse key={item.id} name={item.name} bullet={item.bullet} description={item.description} price={item.price} begin={item.begin} lesson={item.lesson} timeline={item.timeline} learner={item.learner} image={item.image}/>
                  })}
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  )
}
