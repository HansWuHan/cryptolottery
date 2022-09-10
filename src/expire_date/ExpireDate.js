import React, { useState } from 'react';

import ListGroup from 'react-bootstrap/ListGroup';

import './ExpireDate.css';
import '../style/style.css';


function ExpireDateItem(props) {
    const activeClass = props.isActive ? 'active' : ''
    return (<ListGroup.Item className={`expire-rate-item ${activeClass}`} > {props.value}</ListGroup.Item >
    )
}


function ExpireDateSet(props) {
    const listItems = props.values.map((value) =>
        <ExpireDateItem value={value} isActive={value === props.activeValue} />
    );
    return (
        <div className='primary-style'>
            <h5 className='my-3'>{props.title}</h5>
            <ListGroup variant="flush">
                {listItems}
            </ListGroup>
        </div>
    )
}

function ExpireDateComponent() {
    var this_month = ["2022-09-16", "2022-09-23", "2022-09-30"];
    var next_month = ["2022-10-07", "2022-10-14", "2022-10-21", "2022-10-28"];

    return (
        <div>
            <ExpireDateSet title="This Month" values={this_month} activeValue="2022-09-16"></ExpireDateSet>
            <ExpireDateSet title="Next Month" values={next_month} activeValue="2022-09-16"></ExpireDateSet>
        </div>
    );
}

export default ExpireDateComponent;
