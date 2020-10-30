// combineReducers come from redux that used for combining reducers that we just made.
import { combineReducers } from 'redux'

// Reducers
import homePage from './HomePage/homePage.reducer'

export default combineReducers({
  homePage
})
