import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   data: [
      {
         id: 1,
         name: "Ayşe Melek",
         point: "900",
         url: "bebis.jpg"
      },
      {
         id: 2,
         name: "Ayça Melek",
         point: "800",
         url: "bebis2.jpg"
      },
      {
         id: 3,
         name: "Ceren Nur",
         point: "850",
         url: "istockphoto-146746272-612x612.jpg"
      },
      {
         id: 4,
         name: "Nur Hayat",
         point: "750",
         url: "little-girl-child-children-5522.jpg"
      },
      {
         id: 5,
         name: "Nur Hayat",
         point: "840",
         url: "0_GettyImages-1172643701.jpg"
      },
      {
         id: 6,
         name: "Özlem Su",
         point: "950",
         url: "a147141830a824b9990b1e4a7ee90493.jpg"
      },
      {
         id: 7,
         name: "Adar",
         point: "890",
         url: "Karen-Riches-childrens-photographer-lancashire-1024x975.jpg"
      },
      {
         id: 8,
         name: "Yasemin",
         point: "950",
         url: "34267972.jpg"
      },
   ],
   keyword: "",
}

export const dataSlice = createSlice({
   name: "data",
   initialState,
   reducers: {
      addData: (state, action) => {
         state.data.push(action.payload)
      },
      delData: (state, { payload }) => {
         const i = state.data.findIndex(item => item.id === payload)
         state.data.splice(i, 1)
      },
      editData: (state, { payload }) => {
         const i = state.data.findIndex(item => item.id == payload.id)
         state.data.splice(i, 1, payload)
      },
      sortData: (state, action) => {
         state.data.sort((a, b) =>
            action.payload === "asc"
               ? a.point - b.point
               : action.payload === "desc"
                  ? b.point - a.point
                  : 0)
      },
      searchData: (state, { payload }) => {
         state.keyword = payload
         //state.data = state.data.filter(item => item.name.toLowerCase().includes(payload.toLowerCase()))

      }
   },
})

export const { addData, delData, editData, sortData, searchData } = dataSlice.actions

export default dataSlice.reducer
