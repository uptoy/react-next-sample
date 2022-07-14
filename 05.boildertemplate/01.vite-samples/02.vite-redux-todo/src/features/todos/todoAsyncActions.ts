import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { IPost } from './todoSlice'

export const getTodosAction = createAsyncThunk('todos/getTodos', async () => {
  const { data } = await axios.get<IPost[]>(
    'https://jsonplaceholder.typicode.com/todos'
  )

  return data
})
