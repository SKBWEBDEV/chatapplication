import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   value: localStorage.getItem("userInfo") ? JSON.parse (localStorage.getItem("userInfo")) : null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userInfo: (state,actions) => {
      state.value = actions.payload
    },
    userNameUpdate : (state,actions) => {
      if (state.value && state.value.user) {
        state.value.user.displayName = actions.payload
      }
      
    }
    
  }
})

// Action creators are generated for each case reducer function
export const { userInfo,userNameUpdate } = userSlice.actions

export default userSlice.reducer