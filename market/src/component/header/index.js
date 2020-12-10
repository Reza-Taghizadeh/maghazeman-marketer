import React from 'react';
import { Input, Row, Col, Container } from 'reactstrap';
import '../../containers/App.css';
export default function Header() {
    return (
        <Container>
            <Row>
                <Col xs={3} md={1}>
                    <img className='logo-img' src='https://jobinja.ir/files/uploads/images/d917d21e-232c-11eb-8263-d6b790452c1a_ba7865ca-0693-40da-a873-e9f91c233c4b/companies_logo_128x128.png' />
                </Col>
                <Col md={6} lg={7} xl={8} className='d-none d-md-block position-relative'>
                    <Input className='search-input' placeholder='جستجو' />
                    <i class='fas fa-search search-icon'></i>
                </Col>
                <Col xs={9} md={5} lg={4} xl={3}>
                    <Row className='pt-1'>
                        <Col>
                            <div className='login-header'>
                                <span className='d-none d-sm-block'>تماس با ما</span>
                                <i className='fas fa-headphones'></i>
                            </div>
                        </Col>
                        <Col>
                            <div className='login-header'>
                                <i className='text-success fas fa-user-alt'></i>
                                <span className='pb-1 d-none d-sm-block'>ورود</span>
                            </div>
                        </Col>
                        <Col className='d-none d-md-block' md={2}><i className='fas fa-shopping-cart'></i></Col>
                    </Row>
                </Col>
            </Row>
            <Row className='d-none d-lg-block'>
                <ul className='d-flex header-data'>
                    <li>دسته بندی کالا</li>
                    <li>دیجیتال</li>
                    <li>ابزار و یراق</li>
                    <li>بهداشت و سلامت</li>
                    <li>خانه و آشپزخانه</li>
                    <li>ورزش</li>
                </ul>
            </Row>
        </Container>
    )
} 