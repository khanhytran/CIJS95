import React from 'react'
import './ModalPayment.css'
import '../style.css'

export default function ModalPayment({ numberOfCourses, totalPrice }) {
    return (
        <div className='relative z-[150]' >
            <div id='modal-payment' className='fixed z-[50] bottom-0 right-0 md:right-24 md:w-max w-full md:pb-4 pt-3 md:pl-5'>
                <div className="rounded-xl md:w-96 w-full h-full bg-white shadow-xl">
                    <div className="text-box absolute rounded-xl overflow-hidden relative">
                        <div style={{maxWidth:'unset'}} className="form md:shadow-2x1 p-8 md:block">
                            <div className="flex flex-row fw-700 text-xl items-center">
                                <button>
                                    <span className='bg-white'>
                                        <svg className="svg-inline--fa fa-chevron-down" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-down" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path className fill="currentColor" d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" /></svg>
                                    </span>
                                </button>
                                <p className='ml-2 text=gray-800'>Tóm tắt đơn hàng</p>
                            </div>
                            <div className="fw-700 text-left py-3">
                                <p>{numberOfCourses} khóa học</p>
                            </div>
                            <div>
                                <div className="flex flex-row justify-between items-center py-3 border-b"> 
                                    <p className='text-left text-gray-400 font-medium'>Giá gốc</p>
                                    <p className='font-medium text-xl'>{totalPrice} đ</p>
                                </div>
                                <div className="py-3 border-y border-gray-200">
                                    <div className="border pr-1 pl-5 rounded-12px w-full h-52px flex items-center gap-3 border-gray-200">
                                        <input className='flex-1 font-500 text-gray-500' type="text" placeholder='Nhập mã coupon' />
                                        <p className='font-medium text-x1'>
                                            <button role="button" className="rounded-12px px-2 py-3 font-[600] text-[14px] py-[8px] px-[14px] w-full bg-blue-500 text-white hover:bg-blue-600 py-[8px] px-[14px] w-full bg-gray-400 hover:bg-gray-400 cursor-not-allowed text-white" disabled href> Áp dụng</button>
                                        </p>
                                    </div>
                                    
                                </div>
                            </div>
                            <div className="flex flex-row justify-between items-center pt-3">
                                <p className='text-left text-grey-400 font-medium '>Tổng tiền</p>
                                <p className='fw-700 text-2x1' style={{color:'rgb(0, 75, 141)'}}>{totalPrice} đ</p>
                            </div>
                            <button className="p-3 md:p-5 mt-5 rounded-xl w-full fw-700 text-xl text-white button-pay-now" style={{backgroundColor: 'rgb(0, 75, 141)'}}>THANH TOÁN</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
