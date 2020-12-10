import React from 'react';
import { Button } from 'reactstrap';
import '../../containers/App.css';
export default function Sidebar() {
    return (
        <div>
            <div>
                <div className='sideItem mb-3'>
                    <i className="text-success fas fa-home ml-2 mr-2"></i>
                    <span>صفحه اصلی</span>
                </div>
                <div className='sideItem mb-3'>
                    <i className="text-success fas fa-bezier-curve ml-2 mr-2"></i>
                    <span>زیرمجموعه ها</span>
                </div>
                <div className='sideItem mb-3'>
                    <i className="text-success fab fa-rocketchat ml-2 mr-2"></i>
                    <span>چت</span>
                </div>
                <div className='sideItem mb-3'>
                    <i className="text-success fas fa-money-bill-alt ml-2 mr-2"></i>
                    <span>امور مالی</span>
                </div>
                <div className='sideItem mb-3'>
                    <i className="text-success fas fa-calendar-check ml-2 mr-2"></i>
                    <span>تقویم کاری</span>
                </div>
                <div className='sideItem mb-3'>
                    <i className="text-success fas fa-video ml-2 mr-2"></i>
                    <span>فیلم آموزشی</span>
                </div>
                <div className='sideItemLast mb-3'>
                    <i style={{ color: '#ffc600' }} className="fas fa-dot-circle ml-2 mr-2"></i>
                    <span>نامه ها</span>
                    <i className="text-success fab fa-facebook-messenger ml-2 mr-2"></i>
                    <p>هیچ نامه جدید ندارید</p>
                </div>
            </div>

        </div>
    )
} 