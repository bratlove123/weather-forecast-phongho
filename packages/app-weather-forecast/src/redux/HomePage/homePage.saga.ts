// Import the redux-saga/effects
import { put, takeLatest } from 'redux-saga/effects'

// Import all actions
import { SET_LOADING, GET_LOGIN, GET_LOGIN_SUCCESS } from './homePage.action'

// Import all api's
// import { loginRequest } from '../../services/login.service';

function* login() {
  yield put({ type: SET_LOADING })

  // const loginResponse = yield call(loginRequest);

  yield put({ type: GET_LOGIN_SUCCESS, payload: [{ name: 'tfi' }] })
}

export default function* loginSaga() {
  yield takeLatest(GET_LOGIN, login)
}
