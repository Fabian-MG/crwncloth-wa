import { createSelector } from 'reselect';

const selectCart = state => state.crwn_cart;

export const selectCartItems = createSelector(
  [selectCart],
  crwn_cart => crwn_cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  crwn_cart => crwn_cart.hidden
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (accumalatedQuantity, cartItem) =>
        accumalatedQuantity + cartItem.quantity,
      0
    )
);

export const selectCartTotal = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (accumalatedQuantity, cartItem) =>
        accumalatedQuantity + cartItem.quantity * cartItem.price,
      0
    )
);
