import React from 'react'
import { render } from '@testing-library/react'
import MyContext from '../context/MyContext'
import MyProvider from '../context/MyProvider'

const renderWithRouter = (component) => {
  return {
    ...render(
        <MyProvider value={ MyContext }>{component}</MyProvider>)
  }
}
export default renderWithRouter;