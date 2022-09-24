import React, { useState } from 'react';

import './PeriodTab.css';

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


function PeriodTab() {
    const [key, setKey] = useState('1M');

    return (
        <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
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
