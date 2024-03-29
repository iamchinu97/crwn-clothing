import React from "react";
import { Route } from "react-router";
import CollectionOverview from "../../Components/Collection-overview/CollectionOverview";
import Collectionpage from "../Collectionpage/Collectionpage";
import "./shoppage.scss";
const Shoppage = ({ match }) => {
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route path={`${match.path}/:collectionId`} component={Collectionpage} />
    </div>
  );
}


export default Shoppage;
