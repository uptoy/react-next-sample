import React, { useState } from "react"
import Posts from "./components/Posts"
import Categories from "./components/Categories"
import { useDispatch } from "react-redux"
import { filterPosts } from "./components/blog-state"
const App = () => {
  const [filter, setFilter] = useState(false)
  const [currentCategory, setCurrentCategory] = useState("")
  const dispatch = useDispatch()
  const categoryChangeHandler = (category: string) => {
    setCurrentCategory(category)
    if (category === "All Categories") {
      setFilter(false)
    } else {
      dispatch(filterPosts(category))
      setFilter(true)
    }
  }
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="title col-md-6">
          <Posts filter={filter} />
        </div>
        <div className="category col-md-2">
          <Categories
            currentCategory={currentCategory}
            categoryChangeHandler={categoryChangeHandler}
          />
        </div>
      </div>
    </div>
  )
}
export default App
