import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   modal: false,
   willEditData: null,
}

export const modalSlice = createSlice({
   name: "modal",
   initialState,
   reducers: {
      modalFunc: (state) => {state.modal = !state.modal},

      setEditData: (state, {payload})=>{
         state.willEditData = payload
      } 


   }
})

export const { modalFunc, setEditData } = modalSlice.actions

export default modalSlice.reducer