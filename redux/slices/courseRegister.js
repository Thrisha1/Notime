import { createSlice } from '@reduxjs/toolkit'

export const courseRegister = createSlice({
  name: 'register',
  initialState: {
    value: 0,
    courseName: "",
  },
  reducers: {
    courseNameAdd: (state,action) => {
      state.courseName = action.payload
      console.log(state.courseName)
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { courseNameAdd, decrement, incrementByAmount } = courseRegister.actions

export default courseRegister.reducer