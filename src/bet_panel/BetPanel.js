import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { useSelector } from 'react-redux'

import { OptionType, ProductMessages } from '../schema/Option'
import { capitalize, formatDateAndTime, datesEqual } from '../util'

import OptionList from './option_list/OptionList';
import './BetPanel.css';

const defaultActiveTab = OptionType.Positive.description;

function BetPanel(props) {
    // The name of tab that is active.
    // Type: String.
    const [activeTab, setActiveTab] = useState(defaultActiveTab);
    const activeOptionDate = useSelector((state) => state.OptionDate.activeOptionDate)
    const optionInfoList = useSelector((state) => state.OptionInfoList.values);

    const optionTypeTabs = [];
    for (let idx in OptionType) {
        optionTypeTabs.push(
            <Tab eventKey={OptionType[idx].description}
                key={OptionType[idx].description}
                title={capitalize(OptionType[idx].description)}
                className="mb-3" >
            </Tab >
        );
    }
    const activeInfoList = optionInfoList.filter((item) => datesEqual(item.option.date, activeOptionDate.date) && item.option.type.description === activeTab)

    return (
        <Container>
            <div className='bet-panel-title'>
                <div className='product'>
                    {ProductMessages.get(activeOptionDate.product)}
                </div>
                <div className='date'>
                    {formatDateAndTime(activeOptionDate.date)}
                </div>
            </div>
            <Tabs
                defaultActiveKey={defaultActiveTab}
                onSelect={(key) => setActiveTab(key)}
            >
                {optionTypeTabs}
            </Tabs>
            <OptionList optionType={activeTab} values={activeInfoList}></OptionList>
        </Container >
    );
}

export default BetPanel;
