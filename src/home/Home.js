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
        <Row>
          <Col className='col-3'>
            <LeftColumn />
          </Col>
          <Col className='col-9'>
            <Row className='justify-content-start'>
              <TopMenu />
            </Row>
            <Row>
              <BetPanel />
            </Row>
          </Col>
        </Row>
      </Container>
    </div >
  );
}

export default Home;
