import { useEffect, useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useDispatch } from 'react-redux'
import { removeItemFromCart, setItemToCart } from '../../state/Cart'


import { capitalize, formatDateAndTime, getOptionName } from '../../util';

import './CartItem.css';


function CartItem(props) {
    const [count, setCount] = useState(props.count);
    const option = props.option;
    const dispatch = useDispatch();

    useEffect(() => {
        setCount(props.count);
    }, [props.count]);

    return (
        <Row className='cart-item-card'>
            <Col md="auto" className='my-auto'>
                <img src={process.env.PUBLIC_URL + '/cancel.svg'} alt='' className='cancel-button' onClick={() => dispatch(removeItemFromCart({ option: option }))} />
            </Col>
            <Col>
                <Row className='option-header'>{capitalize(option.product.description)} ({formatDateAndTime(option.date)})</Row>
                <Row className='option-title'>{getOptionName(option.type, option.strike)}</Row>
                <Row className='option-odd'>{props.odd.toFixed(2)}</Row>
            </Col>
            <Col md="auto" className='my-auto'>
                <input className='count-input' type="number" value={count}
                    onChange={(event) => setCount(Number(event.target.value))}
                    onBlur={() => { dispatch(setItemToCart({ option: option, odd: props.odd, count: Number(count) })) }}
                />
            </Col>
        </Row >
    )
}

export default CartItem;
