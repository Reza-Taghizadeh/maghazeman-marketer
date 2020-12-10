import './App.css';
import Header from '../component/header/index';
import { Container, Col, Row } from 'reactstrap';
import Sidebar from '../component/sidebar/index';
import Markets from '../component/markets/index';
import Profile from '../component/profile/index';
function App() {
  return (
    <div className="App">
      <header className='header'>
        <Header />
      </header>
      <main className='mt-3'>
        <Container className='body'>
          <div className='d-block d-xl-none bg-danger'>
            <div className='d-flex text-white profile-mobile'>
              <div>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Hooman_seyedi_khashm_hayahoo.jpg/220px-Hooman_seyedi_khashm_hayahoo.jpg' />
              </div>
              <div className='w-100'>
                <div className='cursor d-flex justify-content-start align-items-center mb-3 mr-2'>
                  <p className='m-0 name'><b>هومن سیدی - بازاریاب فروش</b></p>
                </div>
                <div className='cursor d-flex justify-content-start align-items-center mb-3'>
                  <i className="calendar fas fa-calendar-check ml-2 mr-1"></i>
                  <span>zdeh@gmail.com</span>
                </div>
                <div className='cursor d-flex justify-content-start align-items-center mb-3'>
                  <i className="cog fas fa-cog ml-2 mr-1"></i>
                  <span>ویرایش اطلاعات</span>
                </div>
                <div className='cursor d-flex justify-content-start align-items-center mb-3'>
                  <i className="phone fas fa-mobile-alt ml-2 mr-1"></i>
                  <span>09011341565</span>
                </div>
              </div>
            </div>
          </div>
          <Row>
            <Col md={4} xl={2} className='d-none d-md-block'><Sidebar /></Col>

            <Col md={8} xs={12}><Markets /></Col>
            <Col xl={2} className='d-none d-xl-block'><Profile /></Col>
          </Row>
        </Container>
      </main>
    </div>
  );
}

export default App;
