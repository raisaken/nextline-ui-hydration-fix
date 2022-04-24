import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterslice'

const store = configureStore({
  reducer: {post:counterReducer},
})

export default store