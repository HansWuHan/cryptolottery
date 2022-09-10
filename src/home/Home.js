import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import TopMenu from '../top_menu/TopMenu';
import Product from '../product/Product';
import ExpireDateComponent from '../expire_date/ExpireDate';
import ContractListComponent from '../contract_list/ContractList';



import './Home.css';
import '../style/style.css';


function Home() {
  return (
    <div className="App">
      <Container>
        <Row className='justify-content-start'>
          <TopMenu />
        </Row>
        <Row>
          <Col className='col-2'>
            <Product />
          </Col>
          <Col className='col-2'>
            <ExpireDateComponent />
          </Col>
          <Col className='col-8'>
            <ContractListComponent />
          </Col>
        </Row>
      </Container>
    </div >
  );
}

export default Home;
