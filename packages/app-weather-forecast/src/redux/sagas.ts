import { spawn } from 'redux-saga/effects'

// Sagas
import homePage from './HomePage/homePage.saga'

// Export the root saga
export default function* rootSaga() {
  yield spawn(homePage)
}
