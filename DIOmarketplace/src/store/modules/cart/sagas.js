import { all, takeLatest } from 'redux-saga/effects'

function* addToCart({ id }) { }

export default all([takeLatest('@cart/ADD_REQUEST', addToCart)]);