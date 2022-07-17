import React from "react"
import { useSelector } from "react-redux"
import { RootState } from "../store"
const Posts = ({ filter }: { filter: boolean }) => {
  const { posts } = useSelector((state: RootState) => state.blog)
  const { filteredPosts } = useSelector((state: RootState) => state.blog)
  return (
    <>
      <p>
        showing {filter ? filteredPosts.length : posts.length} posts of total{" "}
        {posts.length} posts
      </p>
      <div>
        {!filter &&
          posts.map((post) => (
            <article key={post.id}>
              <h2> {post.title}</h2>
            </article>
          ))}
        {filter &&
          filteredPosts.map((post) => (
            <article key={post.id}>
              <h2> {post.title}</h2>
            </article>
          ))}
      </div>
    </>
  )
}
export default Posts
