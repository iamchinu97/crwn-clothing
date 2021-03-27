import React from 'react';
import './checkoutpage.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from "reselect";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { selectCartTotal } from "../../redux/cart/cart.selectors";
import CheckoutItem from "../../Components/Checkout-item/CheckoutItem";
import StripeButton from '../../Components/Stripe-button/StripeButton';


const Checkoutpage = ({ cartItems, total }) => {
    return (<div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
                <span>Description</span>
            </div>
            <div className="header-block">
                <span>Quantity</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map(cartItem => (
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            ))
        }
        <div className="total">TOTAL : &#x20B9; {total}</div>
        <StripeButton price={total} />
        <div className="test-card">Test CARD : 4242 4242 4242 4242 | EXP: 01/22 | CVV: 123</div>
    </div>);
}

const mapStatetoProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})
export default connect(mapStatetoProps)(Checkoutpage);