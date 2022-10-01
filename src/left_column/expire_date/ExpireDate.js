import React from 'react';

import Nav from 'react-bootstrap/Nav';
import { useSelector, useDispatch } from 'react-redux'

import { setActiveOptionDate } from '../../state/OptionDate'
import { datesEqual, datesDifferenceInDays } from '../../util'
import './ExpireDate.css';



function ExpireDateItem(props) {
    const dispatch = useDispatch()

    const clickOptionDate = (date) => dispatch(setActiveOptionDate({ product: props.product, date: props.value }));

    const activeClass = props.isActive ? 'active' : ''
    return (
        <Nav.Item className={`expire-rate-item ${activeClass}`} onClick={() => clickOptionDate(props.value)}>
            <span>{props.value.toDateString().slice(4)}</span>
        </Nav.Item >
    )
}

function ExpireDateComponent(props) {
    const activeOptionDate = useSelector((state) => state.OptionDate.activeOptionDate);
    let optionDates = useSelector((state) => state.OptionDate.optionDates).find((item) => props.product === item.product);
    if (optionDates === undefined) return (<div></div>);

    // Filter the dates by recent dates tab selection
    optionDates = optionDates.dates
        .filter((date) => datesDifferenceInDays(new Date(Date.now()), date) <= props.displayDays);

    const listItems = optionDates.map((value) =>
        <ExpireDateItem key={value}
            product={props.product}
            value={value}
            isActive={props.product === activeOptionDate.product && datesEqual(value, activeOptionDate.date)} />
    );
    return (
        <Nav variant="pills" className="flex-column">
            {listItems}
        </Nav>
    )
}

export default ExpireDateComponent;
