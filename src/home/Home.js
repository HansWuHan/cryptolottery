import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import TopMenu from '../top_menu/TopMenu';
import LeftColumn from '../left_column/LeftColumn';
import BetPanel from '../bet_panel/BetPanel';
import Checkout from '../checkout/Checkout';
import './Home.css';

function Home() {
  return (
    <div className="App">
      <Container>
        <Row className='h-100'>
          <Col className='col-3'>
            <LeftColumn className='left-column' />
          </Col>
          <Col className='col-9 mt-4'>
            <Row className='top-menu' >
              <TopMenu />
            </Row>
            <Row className='bet-panel'>
              <Col>
                <BetPanel />
              </Col>
              <Col className='checkout' md="auto">
                <Checkout />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div >
  );
}

export default Home;
