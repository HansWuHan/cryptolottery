import React, { useState } from 'react';

import ListGroup from 'react-bootstrap/ListGroup';

import './Product.css';

function Product() {
    return (
        <ListGroup as="ul" className='my-3'>>
            <ListGroup.Item as="li" active className='product-item'>
                Bitcoin(BTC)
            </ListGroup.Item>
            <ListGroup.Item as="li" className='product-item'>Etherum(ETH)</ListGroup.Item>
        </ListGroup>
    );
}

export default Product;
