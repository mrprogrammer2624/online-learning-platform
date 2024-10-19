import { configureStore, createSlice } from '@reduxjs/toolkit'

const initialState = {
  enrolledCourses: [],
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    enrollCourse: (state, action) => {
      state.enrolledCourses.push(action.payload)
    },
    updateProgress: (state, action) => {
      const course = state.enrolledCourses.find(c => c.id === action.payload.courseId)
      if (course) {
        course.progress = action.payload.progress
      }
    },
  },
})

export const { enrollCourse, updateProgress } = userSlice.actions

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
})