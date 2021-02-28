import React from "react";
import "./collectionitem.scss";
import CustomButton from "../CustomButton/CustomButton";
import { addItem } from "../../redux/cart/cart.actions";
import { connect } from "react-redux";
const CollectionItem = ({ item, addItem }) => {
  const { name, imageUrl, price } = item;
  return (
    <div className="collection-item">
      <div
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
        className="image"
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton inverted onClick={() => addItem(item)}>
        ADD TO CART
      </CustomButton>
    </div>
  );
};

const mapDispatchtoProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchtoProps)(CollectionItem);
