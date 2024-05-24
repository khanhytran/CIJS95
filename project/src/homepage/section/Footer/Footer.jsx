import React from 'react'
import './Footer.css'
import '../../style.css'

export default function Footer() {
    return (
        <div className='bg-gray'>
            <div className="container mx-auto py-10 px-3 md:px-0">
                <div className="grid grid-cols-4 md:space-x-14 space-y-5 md:space-y-0">
                    <div className="col-span-4 md:col-span-1 text-gray-500 space-y-5">
                        <img src="https://prepedu.com/imgs/logo-n.svg" width={130} alt="logo" />
                        <div className="text-left space-y-2">
                            <div className="text-black fw-700 text-16 leading-6">CÔNG TY CỔ PHẦN CÔNG NGHỆ PREP</div>
                            <div className="text-gray-800 font-medium text-14 leading-6">
                                Mã số doanh nghiệp:  <span className='text-gray-500 font-normal'>0109817671</span>
                            </div>
                            <address className="text-gray-800 not-italic font-medium text-14 leading-6">
                                Địa chỉ: <span className='text-gray-500 font-normal'>Số nhà 20 Ngách 234/35 Đường Hoàng Quốc Việt, Phường Cổ Nhuế 1, Quận Bắc Từ Liêm, Thành phố Hà Nội, Việt Nam</span>
                            </address>
                            <div className="text-gray-800 font-medium text-14 leading-6">
                                Trụ sở văn phòng:  <span className='text-gray-500 font-normal'>NO.21-C2 KĐT Nam Trung Yên, P.Trung Hòa, Q.Cầu Giấy, Tp.Hà Nội</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1 md:col-span-1 order-2 md:order-none">
                        <div className="flex flex-col space-y-2 md:space-y-5">
                            <h5 className='text-left font-semibold text-gray-900 text-14'>VỀ PREP</h5>
                            <span className='text-left text-14 text-gray-500'>
                                <a className='text-14 font-formal text-gray-500 leading-5' target='_blank' href="https://prepedu.com/vi/about">Giới thiệu</a>
                            </span>
                            <span className='text-left text-14 text-gray-500'>
                                <a className='text-14 font-formal text-gray-500 leading-5' target='_blank' href="https://careers.prepedu.com/">Tuyển dụng</a>
                            </span>
                            <h5 className='hidden sm:block text-left font-semibold text-14 text-gray-900'>KẾT NỐI VỚI CHÚNG TÔI</h5>
                            <h5 className='hidden sm:block text-left font-semibold text-14 text-gray-900'>KẾT NỐI</h5>
                            <span className='text-left text-base text-gray-500 flex flex-row gap-3'>
                                <a href="https://www.facebook.com/hocieltscungprepvn" target="_blank"><img width={24} src="https://prepedu.com/imgs/footer/ic-facebook.svg" alt="facbook" /></a>
                                <a href="mailto:support@prep.vn"><img width={24} src="https://prepedu.com/imgs/footer/ic-mail.svg" alt="mail" /></a>
                            </span>
                        </div>
                    </div>
                    <div className="col-span-3 md:col-span-1 text-left space-y-2 md:space-y-5 order-1 md:order-none">
                        <h5 className='text-gray-900 font-semibold text-14'>THÔNG TIN</h5>
                        <div className="text-gray-500 font-formal">
                            <a href="https://prepedu.com/vi/dieu-kien-va-dieu-khoan-giao-dich" target="_blank" className="text-14 font-normal text-gray-500 leading-5">Điều kiện và điều khoản giao dịch</a>
                        </div>
                        <div className="text-gray-500 font-formal">
                            <a href="https://prepedu.com/vi/chinh-sach-thanh-toan" target="_blank" className="text-14 font-normal text-gray-500 leading-5">Chính sách thanh toán</a>
                        </div>
                        <div className="text-gray-500 font-formal">
                            <a href="https://prepedu.com/vi/chinh-sach-bao-ve-thong-tin-ca-nhan-nguoi-tieu-dung" target="_blank" className="text-14 font-normal text-gray-500 leading-5">Chính sách bảo vệ thông tin</a>
                        </div>
                        <div className="text-gray-500 font-formal">
                            <a href="https://prepedu.com/vi/cam-ket-dau-ra-ielts" target="_blank" className="text-14 font-normal text-gray-500 leading-5">Cam kết đầu ra Ielts</a>
                        </div>
                        <div className="text-gray-500 font-formal">
                            <a href="https://prepedu.com/vi/cam-ket-dau-ra-toeic" target="_blank" className="text-14 font-normal text-gray-500 leading-5">Cam kết đầu ra Toeic</a>
                        </div>
                        <div className="text-gray-500 font-formal">
                            <a href="https://prepedu.com/vi/chinh-sach-su-dung-ai" target="_blank" className="text-14 font-normal text-gray-500 leading-5">Cam kết sử dụng AI</a>
                        </div>
                    </div>
                    <div className="col-span-4 md:col-span-1 text-left space-y-5 order-last">
                    <h5 className='text-gray-900 font-semibold text-14'>TẢI ỨNG DỤNG TRÊN ĐIỆN THOẠI</h5>
                    <div className="flex flex-row md:flex-col gap-4">
                        <a target='_blank' href="https://apps.apple.com/vn/app/prep/id1513736434?fbclid=IwAR35ayaVzRNxdCc0XW6U-U0f1KJPDL94eTrZUVhTWyqiSBOpjTSCHcibokk"><img width={160} src="https://prepedu.com/_ipx/w_160/imgs/footer/app-store-n.svg" alt="download from apple store" /></a>
                        <a target='_blank' href="https://play.google.com/store/apps/details?id=vn.prep&fbclid=IwAR35ayaVzRNxdCc0XW6U-U0f1KJPDL94eTrZUVhTWyqiSBOpjTSCHcibokk"><img width={160} src="https://prepedu.com/_ipx/w_160/imgs/footer/gg-play-n.svg" alt="download from google play" /></a>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
