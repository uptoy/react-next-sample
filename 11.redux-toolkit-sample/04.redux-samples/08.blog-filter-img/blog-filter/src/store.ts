import { configureStore } from '@reduxjs/toolkit'
import blogSliceReducer from '../src/components/blog-state'
export const store = configureStore({
  reducer: {
    blog: blogSliceReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
