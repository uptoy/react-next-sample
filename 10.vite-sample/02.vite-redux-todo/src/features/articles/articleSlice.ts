import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IArticle } from './Article'

const articleList: IArticle[] = [
  {
    id: 0,
    name: 'name0',
    content: 'content0'
  },
  {
    id: 1,
    name: 'name1',
    content: 'content1'
  }
]

export const articlesSlice = createSlice({
  name: 'articles',
  initialState: { value: articleList },
  reducers: {
    addArticle: (state, action: PayloadAction<IArticle>) => {
      state.value.push(action.payload)
    },
    deleteArticle: (state, action: PayloadAction<IArticle>) => {
      state.value = state.value.filter(
        (article) => article.id !== action.payload.id
      )
    }
  }
})

export const { addArticle, deleteArticle } = articlesSlice.actions

export default articlesSlice.reducer
