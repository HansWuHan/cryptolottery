import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import TopMenu from '../top_menu/TopMenu';
import LeftColumn from '../left_column/LeftColumn';
import BetPanel from '../bet_panel/BetPanel';

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
            <Row>
              <TopMenu />
            </Row>
            <Row className='bet-panel'>
              <BetPanel />
            </Row>
          </Col>
        </Row>
      </Container>
    </div >
  );
}

export default Home;
