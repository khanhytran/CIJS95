import React, { useState } from 'react'
import Current from '../../component/Current'
import useCourseStore from '../../../store/courseStore'
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

  const handleChoose = (item) => {
    setChoose(item);
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
          <div id='step-1' className="step-1 mb-8 px-4 md:px-8">
            <div className="relative rounded-x1 mt-3 sm:mt-5">
              <div className="py-2 md:py-0 flex flex-col sm:flex-row items-start sm:items-center sm:pt-5 text-left">
                <h3 className='fw-̃700 sm:font-extrabold text-20 flex-1 text-gray-800'>Hãy chọn trình độ hiện tại của bạn</h3>
              </div>
              <div className="overflow-auto sm:py-4">
                <div className='flex items-center sm:w-full space-x-5 pb-8 sm:p-0'>
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
                <div className='flex items-center sm:w-full space-x-5 pb-8 sm:p-0'>
                  {aimCourse.filter((item) => item.type === currentFilter).map((item) => {
                    return <Current key={item.id} name={item.name} level={item.level} description={item.description} isActive={item.id == choose?.id} handleClick={() => {
                      handleChoose(item)
                    }} />
                  })}
                </div>
              </div>
            </div>
          </div>
          <div id='step-2' className="step-2 mt-5 mb-8 px-4 md:px-8 relative">
            <div>
              <h3 className='fw-700 py-3 text-20 text-left text-gray-800'>Chi tiết lộ trình học phù hợp dành cho bạn</h3>
              <div id='road-map' className="rounded-lg sm:block overflow-auto px-5 md:mx-0 py-5 my-2 bg-blue-50"></div>
              <div className="list-card-course relative">
                <div className="w-0.5 left-3.5 sm:left-4 top-5 bottom-0 ml-1 z-1 absolute bg-gray-100"></div>
                <div className="relative pt-1">
                  {courseData.filter((item) => item.type === currentFilter && item.aim > choose?.aim).map((item) => {
                    return <CardCourse key={item.id} name={item.name} bullet={item.bullet} description={item.description} price={item.price} begin={item.begin} lesson={item.lesson} timeline={item.timeline} learner={item.learner} image={item.image} />
                  })}
                </div>
              </div>
            </div>
          </div>
          <div>
            <div id='step-3' className='step-3 mt-5 mb-3 px-4 md:px-8'>
              <div id='benefit' className="relative opacity-0 invisible -top-28"></div>
              <div className="benefit flex text-x1 items-center font-medium pt-5 pb-1 text-left text-black">
                <img className='mr-1' src="https://prepedu.com/imgs/landingpage/filled.svg" alt="Quyền lợi" />
                <h4 className='flex-1 font-bold'>Quyền lợi học tập</h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="span-col-1">
                  <div className="flex mt-2 -ml-5 -mr-5 text-lef text-black">
                    <p className='flex items-start mb-2 px-5'>
                      <svg xmlns="http://www.w3.org/2000/svg" className="text-green-500 mr-1 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>Luyện Test Practice miễn phí
                    </p>
                  </div>
                  <div className="flex mt-2 -ml-5 -mr-5 text-lef text-black">
                    <p className='flex items-start mb-2 px-5'>
                      <svg xmlns="http://www.w3.org/2000/svg" className="text-green-500 mr-1 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>Tham gia sự kiện cùng thầy cô, chuyên gia
                    </p>
                  </div>
                </div>
                <div>
                  <div className="flex mt-2 -ml-5 -mr-5 text-lef text-black">
                    <p className='flex items-start mb-2 px-5'>
                      <svg xmlns="http://www.w3.org/2000/svg" className="text-green-500 mr-1 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>Hỗ trợ qua email và cộng đồng học tập
                    </p>
                  </div>
                  <div className="flex mt-2 -ml-5 -mr-5 text-lef text-black">
                    <p className='flex items-start mb-2 px-5'>
                      <svg xmlns="http://www.w3.org/2000/svg" className="text-green-500 mr-1 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>Hỗ trợ qua chat trực tiếp
                    </p>
                  </div>
                </div>
              </div>
              {/*  */}
              <div className="flex text-x1 items-center font-medium pt-5 pb-1 text-left text-black">
                <img className='mr-1' src="https://prepedu.com/imgs/landingpage/discount-icon.svg" alt="Giảm giá" />
                <h4 className='flex-1 font-bold'>Nhập mã khuyến mãi</h4>
              </div>
              <div className="pb-3 my-3 flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-x-0 sm:space-x-5">
                <div className="w-full sm:w-6/12 lg:w-5/12 xl:w-3/12 relative flex items-center">
                  <input className='p-3 w-full border rounded-lg pr-32 text-16 border-gray-300' placeholder='Nhập mã coupon' type="text" />
                  <button className='btn-apply px-3 rounded text-white absolute top-1 bottom-1 right-2 flex items-center bg-gray-300' disable>Áp dụng</button>
                </div>
              </div>
              {/*  */}
              <div className="flex flex-col sm:flex-row mt-5"><div className="w-full"><div id="section-input-info-payment" className="flex text-xl items-center font-medium text-left text-black"><img loading="lazy" className="mr-1" src="https://prepedu.com/imgs/landingpage/user-icon.svg" alt="Người dùng" /><h4 className="flex-1 font-bold">Thông tin thanh toán</h4></div><div className="grid grid-cols-3 gap-5 my-3"><div className="w-full md:col-span-1 col-span-3"><div className="w-full flex flex-col items-start relative text-left py-1"><label htmlFor="phone-login-form" className="text-16 bg-white mb-2 left-5 fw-700 text-gray-800 hidden">Số điện thoại (*)</label><div className="relative flex items-center border border-gray-200 rounded-lg px-5"><div className="mr-4"><div className="phone-area"><div className="relative"><div className="cursor-pointer w-max"><i className="fa fa-caret-down" aria-hidden="true" /> +84</div>{/**/}</div></div></div><input id="phone-login-form" className="input-cus-focus w-full py-3" placeholder="Số điện thoại" /></div></div></div></div></div></div>
            </div>
            <div className="flex items-start pb-5 px-4 md:px-8">
              <input id='check-term' className='opacity-0' type="checkbox" />
              <label htmlFor="check-term" className='inline-flex w-6 h-6 rounded border items-center justify-center overflow-hidden -mt-0.5 mr-2 text-white cursor-pointer'></label>
              <label htmlFor="check-term" className='text-left flex-1 cursor-pointer'>
                Tôi đồng ý với
                <a href="https://prepedu.com/vi/dieu-kien-va-dieu-khoan-giao-dich" rel="noopener noreferrer" target="_blank" className="text-blue-500"> Điều kiện & Điều khoản giao dịch </a>
                ,
                <a href="https://prepedu.com/vi/chinh-sach-bao-ve-thong-tin-ca-nhan-nguoi-tieu-dung" rel="noopener noreferrer" target="_blank" class="text-blue-500"> Chính sách bảo mật thông tin </a>
                cùng
                <a href="https://prepedu.com/vi/chinh-sach-su-dung-ai" rel="noopener noreferrer" target="_blank" class="text-blue-500">  Chính sách sử dụng AI </a>
                của Prep
                <span>
                  giao dịch của Prep. Đồng thời nắm rõ thời gian sở hữu
                  <span className='fw-700'>2 khóa</span>
                  trong lộ trình mua là
                  <span className='fw-700'>18 tháng</span>
                </span>
              </label>
            </div>
            <div className="p-3 md:p-0 pb-10 md:my-10 md:space-x-5 text-center">
              <button className="mt-2 w-full fw-700 sm:w-auto bg-white rounded-xl border py-4 px-5 inline-flex items-center justify-center text-xl mb-5 md:mb-0" style={{ color: 'rgb(0, 75, 141)', borderColor: 'rgb(0, 75, 141)' }}><span className="mr-2"><svg className="svg-inline--fa fa-headset" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="headset" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path className fill="currentColor" d="M256 48C141.1 48 48 141.1 48 256v40c0 13.3-10.7 24-24 24s-24-10.7-24-24V256C0 114.6 114.6 0 256 0S512 114.6 512 256V400.1c0 48.6-39.4 88-88.1 88L313.6 488c-8.3 14.3-23.8 24-41.6 24H240c-26.5 0-48-21.5-48-48s21.5-48 48-48h32c17.8 0 33.3 9.7 41.6 24l110.4 .1c22.1 0 40-17.9 40-40V256c0-114.9-93.1-208-208-208zM144 208h16c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H144c-35.3 0-64-28.7-64-64V272c0-35.3 28.7-64 64-64zm224 0c35.3 0 64 28.7 64 64v48c0 35.3-28.7 64-64 64H352c-17.7 0-32-14.3-32-32V240c0-17.7 14.3-32 32-32h16z" /></svg></span> Cần Tư Vấn Thêm </button>
              <button className="mt-2 w-full fw-700 sm:w-auto text-white rounded-xl py-4 px-14 inline-flex items-center justify-center text-xl btn-pay-now" style={{ backgroundColor: 'rgb(0, 75, 141)' }}>THANH TOÁN</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
