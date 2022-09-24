import Container from 'react-bootstrap/Container';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import './BetPanel.css';

const OptionType = Object.freeze({
    Positive: Symbol("positive"),
    Negative: Symbol("negative"),
})


function BetPanel(props) {

    return (
        <Container>
            <div></div>
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

export default BetPanel;
