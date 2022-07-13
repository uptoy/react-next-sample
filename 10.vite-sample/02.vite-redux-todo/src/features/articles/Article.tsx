import type { RootState } from '../../app/store'
import { useSelector, useDispatch } from 'react-redux'
import { addArticle, deleteArticle } from './articleSlice'
import { useState } from 'react'

export interface IArticle {
  id: number
  name?: string
  content?: string
}

export function Article() {
  const [name, setName] = useState('')
  const [content, setContent] = useState('')
  const articleList = useSelector((state: RootState) => state.articles.value)
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(
      addArticle({
        id: articleList.length,
        name: name,
        content: content
      })
    )
    setName('')
    setContent('')
  }

  return (
    <div>
      <div>
        <div>
          <label>name:</label>
          <input
            type="text"
            placeholder="name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>content:</label>
          <input
            type="text"
            placeholder="content"
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <div>
          <button onClick={() => handleClick()}>ADD</button>
        </div>
      </div>
      <div>
        {articleList.map((article, index) => (
          <div key={index}>
            <p>{article.id}</p>
            <p>{article.name}</p>
            <p>{article.content}</p>
            <button
              className="bg-red-900 p-4"
              aria-label="Decrement value"
              onClick={() => dispatch(deleteArticle({ id: article.id }))}
            >
              delete
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
