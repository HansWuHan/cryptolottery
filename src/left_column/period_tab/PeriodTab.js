import './PeriodTab.css';

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


const tabToDays = {
    '1M': 30,
    '3M': 90,
    '6M': 180,
    '1Y': 360
}
function PeriodTab(props) {
    return (
        <Tabs
            onSelect={(key) => props.setDisplayDays(tabToDays[key])}
            className="period-tab mb-3"
            variant='pills'
        >
            <Tab eventKey="1M" title="1M">
            </Tab>
            <Tab eventKey="3M" title="3M">
            </Tab>
            <Tab eventKey="6M" title="6M">
            </Tab>
            <Tab eventKey="1Y" title="1Y">
            </Tab>
        </Tabs>
    )
}

export default PeriodTab;
