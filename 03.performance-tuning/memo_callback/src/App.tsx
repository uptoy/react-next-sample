import React, { useState } from "react"

export function App() {
  const [name, setName] = useState("")
  const [name1, setName1] = useState("")

  //! 基本的にformの挙動はsubmitボタンが押された瞬間ページがリロードされる
  //! console.logが一瞬しか表示されない
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    setName(name + "!!!!")
  }
  //! event.preventDefault() を置くことでページがリロードされない
  const handleSubmit1 = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setName1(name1 + "!!!")
  }

  const handleLink = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
  }

  return (
    <div>
      //! フォーム
      <p> 基本的にformの挙動はsubmitボタンが押された瞬間ページがリロードされる</p>
      <p>ページがリロードされるため一瞬しか表示されない</p>
      //! Defaultの場合
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <p>{name}</p>
      <hr />
      //! preventDefaultの場合
      <p>preventDefaultの場合</p>
      <p>ページがリロードされないため普通に表示される</p>
      <form onSubmit={handleSubmit1}>
        <label>
          Name:
          <input type="text" value={name1} onChange={(event) => setName1(event.target.value)} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <p>{name1}</p>
      <hr />
      //! aタグ 
      //! Defaultの場合
        <p> 基本的にaタグの挙動はクリックしたらリンク先に飛ぶ</p>
      <a href="https://google.com">Google</a>
      <hr />
      //! preventDefaultの場合
      <p>preventDefaultの場合</p>
      <p> クリックしてもリンク先飛ばなくなる</p>
      <a href="https://google.com" onClick={handleLink}>
        Google
      </a>
    </div>
  )
}

// // https://qiita.com/aaaasahi_17/items/58192ceb7d628d7af730
// import React, { useCallback, useState } from "react"
// import reactLogo from "./assets/react.svg"
// import "./App.css"
// import { ChildArea } from "./ChildArea"
// import { ChildAreaDefault } from "./ChildAreaDefault"
// import { ChildAreaPreDefault } from "./ChildAreaPreDefault"

// export const App = () => {
//   const [text, setText] = useState("")
//   const [open, setOpen] = useState(false)

//   const onChangeText = (e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value)

//   const onClickOpen = () => setOpen(!open)

//   const onClickClose = useCallback(() => setOpen(false), [setOpen])

//   return (
//     <div className="App">
//       <input value={text} onChange={onChangeText} />
//       <br />
//       <br />
//       <button onClick={onClickOpen}>表示</button>
//       <ChildArea open={open} onClickClose={onClickClose} />
//       <ChildAreaDefault />
//       <ChildAreaPreDefault />
//     </div>
//   )
// }
