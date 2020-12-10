import React, { useState } from 'react';
import { Input, Row, Col } from 'reactstrap';
import * as data from '../../data/data';
import Pagination from './pagination';
import '../../containers/App.css';

export default function Markets() {
    const [stores, setStores] = useState(data.default);

    const handleSearch = (event) => {
        const inputValue = event.target.value;
        // let mySet = new Set();
        let arry = []
        for (const value of data.default) {
            if (value.name.indexOf(inputValue) != -1) {
                // mySet.add(value)
                arry.push(value)
            }
        }
        setStores(arry)
    }
    return (
        <div className='position-relative'>
            <div className='mt-2 mb-4 position-relative'>
                <Input className='marketInput search-input' onInput={(event) => handleSearch(event)} placeholder='جستجو' />
                <i class='fas fa-search search-icon-market'></i>
            </div>
            <Row>
                {stores.length > 0 ? stores.map((item, index) => (
                    <Col key={index} xs={6} sm={6} md={4} lg={3} className='basket-box'>
                        {/* <img className='w-100' src={item.img} /> */}
                        <i className="fa fa-shopping-basket basket"></i>
                        <span>{item.name}</span>
                    </Col>
                ))
                    :
                    <div>
                        <p className='notResult'>جستجوی شما نتیجه ای نداشت</p>
                    </div>
                }
            </Row>
            <div className='mt-2' style={{ textAlign: '-webkit-center' }}>
                <Pagination />
            </div>
        </div>
    )
} 