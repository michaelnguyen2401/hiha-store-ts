/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { all, call, takeLatest, put, select } from 'redux-saga/effects';

import { getUserCartRef } from 'core/api/firebase';
import {
  SIGN_IN_SUCCESS,
  SIGN_OUT_SUCCESS,
} from 'modules/user/state/user.slice';
import { selectCurrentUser } from 'modules/user/state/user.selectors';

import {
  ADD_ITEM,
  REMOVE_ITEM,
  CLEAR_ITEM_FROM_CART,
  clearCart,
  setCartFromFirebase,
} from 'modules/cart/state/cart.slice';
import { selectCartItems } from 'modules/cart/state/cart.selectors';

export function* clearCartOnSignOut() {
  yield put(clearCart());
}

export function* updateCartInFirebase() {
  const currentUser = yield select(selectCurrentUser);

  if (currentUser) {
    try {
      const cartRef = yield getUserCartRef(currentUser.id);
      const cartItems = yield select(selectCartItems);
      yield cartRef.update({ cartItems });
    } catch (err) {
      alert(err.message);
    }
  }
}

export function* checkCartFromFirebase(data) {
  const { payload: user } = data;
  const cartRef = yield getUserCartRef(user.id);
  const cartSnapshot = yield cartRef.get();
  yield put(setCartFromFirebase(cartSnapshot.data().cartItems));
}

export function* onSignOutSuccess() {
  yield takeLatest(SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export function* onUserSignIn() {
  yield takeLatest(SIGN_IN_SUCCESS, checkCartFromFirebase);
}

export function* onCartChange() {
  yield takeLatest(
    [ADD_ITEM, REMOVE_ITEM, CLEAR_ITEM_FROM_CART],
    updateCartInFirebase,
  );
}

export function* cartSagas() {
  yield all([call(onSignOutSuccess), call(onUserSignIn), call(onCartChange)]);
}
