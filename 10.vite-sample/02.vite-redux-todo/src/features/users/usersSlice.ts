import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { RootState } from 'app/store'
import axios from 'axios'

const USERS_URL = 'https://jsonplaceholder.typicode.com/users'

interface IUser {
  id: 1
  name: string
  username: string
  email: string
  address: {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: {
      lat: string
      lng: string
    }
  }
  phone: string
  website: string
  company: {
    name: string
    catchPhrase: string
    bs: string
  }
}

const initialState: IUser[] = []

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await axios.get(USERS_URL)
  return response.data
})

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      return action.payload
    })
  }
})

export const selectAllUsers = (state: RootState) => state.users

export default usersSlice.reducer
