import React from "react";
import "./cartdropdown.scss";
import CustomButton from "../CustomButton/CustomButton";
import { connect } from "react-redux";
import CartItem from "../Cart-item/CartItem";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

const CartDropdown = ({ cartItems, history, dispatch }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))) : (<span className="empty-message">Your cart is empty</span>)}
      </div>
      <CustomButton onClick={() => {
        history.push("/crwn-clothing/checkout");
        dispatch(toggleCartHidden());
      }} > GO TO CHECKOUT </CustomButton>
    </div>
  );
};

const mapStateToProps = state =>
  createStructuredSelector({
    cartItems: selectCartItems
  });
export default withRouter(connect(mapStateToProps)(CartDropdown));
