import { createSelector } from "reselect"

const selectShop = state => state.shop;
export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

export const selectCollection = urlParam => createSelector(
    [selectCollections],
    collections => collections[urlParam]
);

export const selectCollectionForPreview = createSelector(
    [selectCollections],
    collections => Object.keys(collections).map(key => collections[key])
);