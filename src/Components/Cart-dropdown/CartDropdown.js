import React from "react";
import "./cartdropdown.scss";
import CustomButton from "../CustomButton/CustomButton";
import { connect } from "react-redux";
import CartItem from "../Cart-item/CartItem";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";

const CartDropdown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <CustomButton> GO TO CHECKOUT </CustomButton>
    </div>
  );
};

const mapStateToProps = state =>
  createStructuredSelector({
    cartItems: selectCartItems
  });
export default connect(mapStateToProps)(CartDropdown);
