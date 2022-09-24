import React, { useState } from 'react';

import Nav from 'react-bootstrap/Nav';

import './ExpireDate.css';


function ExpireDateItem(props) {
    const activeClass = props.isActive ? 'active' : ''
    return (<Nav.Item className={`expire-rate-item ${activeClass}`} > {props.value}</Nav.Item >
    )
}

function ExpireDateComponent() {
    var this_month = ["2022-09-26", "2022-10-03", "2022-10-10", "2022-10-16"];
    var active_value = "2022-09-26";

    const listItems = this_month.map((value) =>
        <ExpireDateItem value={value} isActive={value === active_value} />
    );
    return (
        <Nav variant="pills" className="flex-column">
            {listItems}
        </Nav>
    )
}

export default ExpireDateComponent;
