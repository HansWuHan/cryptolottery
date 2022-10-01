import Button from 'react-bootstrap/Button';
import { useSelector } from 'react-redux'

import CartItem from './cart_item/CartItem'
import './Checkout.css';

function calcBet(cart) {
    let sum = 0;
    for (let i = 0; i < cart.length; i++) {
        sum += cart[i].count;
    }
    return sum;
};

function calcReturn(cart) {
    let sum = 0;
    for (let i = 0; i < cart.length; i++) {
        sum += cart[i].count * cart[i].odd;
    }
    return sum.toFixed(2);
};

function Checkout() {
    const cart = useSelector((state) => state.Cart.value);
    if (cart.length === 0) {
        return <div></div>;
    }
    let cartItems = []
    for (let i = 0; i < cart.length; i++) {
        cartItems.push(<CartItem key={i} option={cart[i].option} odd={cart[i].odd} count={cart[i].count} />)
    }
    return (
        <div>
            <div className='cart-title'>Betslip</div>
            {cartItems}
            <hr></hr>
            <div className='summary'>
                <div className='bet-summary'>
                    <div className='left-align'>Bet</div>
                    <div md="auto">${calcBet(cart)}</div>
                </div>
                <div className='return-summary'>
                    <div className='left-align'>Possible winning</div>
                    <div md="auto">${calcReturn(cart)}</div>
                </div>
                <Button className="pay-button">Pay Now</Button>
            </div>
        </div>)
}

export default Checkout;
