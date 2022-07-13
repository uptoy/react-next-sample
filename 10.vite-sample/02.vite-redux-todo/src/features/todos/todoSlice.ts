import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getTodosAction } from './todoAsyncActions'
export type TodoStateType = {
  readonly todos: IPost[]
  readonly todo: IPost
  readonly loading: boolean
}

export type ApiResponse = Record<string, any>

export type IPost = {
  userId: number
  id: number
  title: string
  completed: boolean
} & ApiResponse

export const heroNamespace = 'hero'

export const initialState: TodoStateType = {
  todo: {} as IPost,
  todos: [] as IPost[],
  loading: false
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,

  // mutate using non-asynchronous actions
  reducers: {
    // softDeleteHeroAction: (state, action: PayloadAction<string>) => {
    //   state.todos = state.todos.filter((h) => String(h.id) !== action.payload)
    // }
  },

  // mutate using asynchronous actions
  extraReducers: (builder) => {
    /* GET ALL */
    builder.addCase(getTodosAction.pending, (state) => {
      state.loading = true
    })

    builder.addCase(
      getTodosAction.fulfilled,
      (state, action: PayloadAction<IPost[]>) => {
        state.todos = action?.payload
        state.loading = false
      }
    )

    builder.addCase(getTodosAction.rejected, (state, action) => {
      console.log(action?.error)
      state.loading = false
    })
  }
})

/* non-async actions */
// export const { softDeleteHeroAction } = todoSlice.actions

export default todoSlice.reducer
