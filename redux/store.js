import { configureStore } from '@reduxjs/toolkit'
import courseRegister from './slices/courseRegister'


export default configureStore({
  reducer: {
    register: courseRegister,
  },
})