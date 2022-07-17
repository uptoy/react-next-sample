import { createSlice } from '@reduxjs/toolkit'

interface IPost {
  id: number
  title: string
  category: string
}

interface PostState {
  posts: IPost[]
  filteredPosts: IPost[]
}
const initialState: PostState = {
  posts: [
    { id: 1, title: 'An Introduction to React', category: 'React' },
    {
      id: 2,
      title: 'State Management With Redux Toolkit',
      category: 'Redux Toolkit',
    },
    {
      id: 3,
      title: 'The Complete Guide to React Hooks',
      category: 'React',
    },
    {
      id: 4,
      title: 'GraphQL Query With Apollo Client',
      category: 'GraphQL',
    },
    {
      id: 5,
      title: 'GraphQL Server Using Apollo Server',
      category: 'GraphQL',
    },
    {
      id: 6,
      title: 'Build a Coding Blog Using Gatsby',
      category: 'Gatsby',
    },
    {
      id: 7,
      title: 'Implement Algolia Search in a Gatsby Site',
      category: 'Gatsby',
    },
    {
      id: 8,
      title: 'An Introduction to Firestore Cloud Functions',
      category: 'Firebase',
    },
    {
      id: 9,
      title: 'Authentication in GraphQL',
      category: 'GraphQL',
    },
    {
      id: 10,
      title: 'A Complete Guide to Layout Using CSS Grid',
      category: 'CSS',
    },
  ],
  filteredPosts: [],
}
export const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    filterPosts(state, action) {
      state.filteredPosts = state.posts.filter(
        (post) => post.category === action.payload,
      )
    },
  },
})
export const { filterPosts } = blogSlice.actions
export default blogSlice.reducer
