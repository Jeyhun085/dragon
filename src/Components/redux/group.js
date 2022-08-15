import { createSlice } from '@reduxjs/toolkit'


export const counterSlice = createSlice({
  name: 'group',
  initialState: {
    brand: "",
    model: "",
    modification: ""
  },
  reducers: {
    changeBrand: (state, value) => {
      state.brand = value.payload
    },
    changeModel: (state, value) => {
      state.model = value.payload
    },
    changeModification: (state, value) => {
      state.modification = value.payload

    },
    
  }
})

// Action creators are generated for each case reducer function
export const { changeModel,changeBrand, changeModification  } = counterSlice.actions

export default counterSlice.reducer