import React from "react"
import { useSelector } from "react-redux"
import { RootState } from "../store"
interface ICategories { currentCategory: string, categoryChangeHandler: (category: string) => void }
const Categories = ({ currentCategory, categoryChangeHandler }: ICategories) => {
  const { posts } = useSelector((state: RootState) => state.blog)
  const categories: string[] = []
  posts.map((post) => categories.push(post.category))
  const categoriesFinal = ["All Categories", ...new Set(categories)]
  return (
    <ul className="list-group">
      {categoriesFinal.map((category) => (
        <li
          key={category}
          className={
            category === currentCategory
              ? "list-group-item active"
              : "list-group-item"
          }
          onClick={() => categoryChangeHandler(category)}
        >
          {category}
        </li>
      ))}
    </ul>
  )
}
export default Categories
