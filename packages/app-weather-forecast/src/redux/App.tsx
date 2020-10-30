import React from 'react'
import { Provider } from 'react-redux'
import { HomePage } from '../HomePage/HomePage'
import store from './store'

export const App = () => {
  return (
    <Provider store={store}>
      <HomePage />
    </Provider>
  )
}
