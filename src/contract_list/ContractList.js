import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ListGroup from 'react-bootstrap/ListGroup';


import './ContractList.css';
import '../style/style.css';

function ContractItem(props) {
    const prefix = props.type == 'bullish' ? 'Over' : 'Below';
    return (<ListGroup.Item className='primary-style'>
        <Container>
            <Row>
                <Col> {prefix} {props.price}</Col>
                <Col> 1 : {props.returns}</Col>
                <Col> <Button variant="success"><div className='mx-3'>Bet</div></Button>
                </Col>
            </Row>
        </Container>
    </ListGroup.Item >
    )
}


function ContractItemSet(props) {
    var listItems = []
    console.log(props.priceReturns);
    for (let i in props.priceReturns) {
        listItems.push(<ContractItem type={props.type} price={props.priceReturns[i][0]} returns={props.priceReturns[i][1]} />);
    }
    return (
        <div className='primary-style'>
            <h4 className='mb-5'>Bitcoin(BTC)</h4>
            <ListGroup variant="flush">
                {listItems}
            </ListGroup>
        </div>
    )
}


function ContractListComponent(props) {
    var bullishPriceReturns = [];
    for (let i = 20000; i <= 40000; i += 1000) {
        bullishPriceReturns.push([i, (1.2 + (i - 20000) * 0.00005).toFixed(2)]);
    }
    var bearishhPriceReturns = [];
    for (let i = 19000; i >= 10000; i -= 1000) {
        bearishhPriceReturns.push([i, (1.2 + (-i + 19000) * 0.00005).toFixed(2)]);
    }
    return (
        <Container>
            <Tabs
                defaultActiveKey="bullish"
                id="uncontrolled-tab-example"
                className="mb-3 primary-style"
                variant='pills'
                fill
            >
                <Tab eventKey="bullish" title="Bullish" className="mb-3 primary-style"
                >
                    <ContractItemSet type="bullish" priceReturns={bullishPriceReturns} />
                </Tab>
                <Tab eventKey="bearish" title="Bearish" className="mb-3 primary-style">
                    <ContractItemSet type="bearish" priceReturns={bearishhPriceReturns} />
                </Tab>
            </Tabs>
        </Container>
    );
}

export default ContractListComponent;
