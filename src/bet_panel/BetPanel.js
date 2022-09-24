import Container from 'react-bootstrap/Container';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { useSelector } from 'react-redux'



import './BetPanel.css';

const OptionType = Object.freeze({
    Positive: Symbol("positive"),
    Negative: Symbol("negative"),
})


function BetPanel(props) {
    const activeOptionDate = useSelector((state) => state.OptionDate.activeOptionDate)
    return (
        <Container>
            <div> {activeOptionDate.product}   </div>
            <Tabs
                defaultActiveKey="bullish"
                id="uncontrolled-tab-example"
                className="mb-3 primary-style"
                variant='pills'
                fill
            >
                <Tab eventKey="bullish" title="Bullish" className="mb-3 primary-style"
                >
                </Tab>
                <Tab eventKey="bearish" title="Bearish" className="mb-3 primary-style">
                </Tab>
            </Tabs>
        </Container>
    );
}

export default BetPanel;
