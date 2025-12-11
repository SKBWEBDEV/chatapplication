import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: localStorage.getItem("masenger") ? JSON.parse (localStorage.getItem("masenger")) : null
}

export const massageSlice = createSlice({
  name: 'mass',
  initialState,
  reducers: {
    massage: (state,actions) => {
      console.log(state.value);
      console.log(actions.payload);
      state.value = actions.payload
      
    },
   
  },
})

// Action creators are generated for each case reducer function
export const { massage } = massageSlice.actions

export default massageSlice.reducer