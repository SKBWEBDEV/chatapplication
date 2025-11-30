import { configureStore } from '@reduxjs/toolkit'
import  userSlice  from '../userSlice'
import  massageSlice  from './userMassage'

export const store = configureStore({
  reducer: {
    user : userSlice,
    massageus : massageSlice
  },
})