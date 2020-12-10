import React from 'react';
import { Button } from 'reactstrap';
import '../../containers/App.css';
export default function Profile() {
    return (
        <div>
            <div className='profile'>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Hooman_seyedi_khashm_hayahoo.jpg/220px-Hooman_seyedi_khashm_hayahoo.jpg' />
                <div>
                    <p className='m-0 name'><b>هومن سیدی</b></p>
                    <p className='job'>بازاریاب فروش</p>
                </div>
                <div className='cursor d-flex justify-content-start align-items-center mb-3'>
                    <i className="calendar fas fa-calendar-check ml-2 mr-2"></i>
                    <span>zdeh@gmail.com</span>
                </div>
                <div className='cursor d-flex justify-content-start align-items-center mb-3'>
                    <i className="cog fas fa-cog ml-2 mr-2"></i>
                    <span>ویرایش اطلاعات</span>
                </div>
                <div className='cursor d-flex justify-content-start align-items-center mb-3'>
                    <i className="phone fas fa-mobile-alt ml-2 mr-2"></i>
                    <span>09011341565</span>
                </div>
                <div className='cursor d-flex justify-content-start align-items-center mb-3'>
                    <i className="wallet fas fa-wallet ml-2 mr-2"></i>
                    <span>کیف پول</span>
                </div>
                <div className='shape'></div>
            </div>

        </div>
    )
} 