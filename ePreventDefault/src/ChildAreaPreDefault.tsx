import React, { useState } from "react"

export function ChildAreaPreDefault() {
  const [name, setName] = useState("")

  const handleSubmit = (event: any) => {
    console.log(name)
    console.log("Thanks for submitting the form!")
    event.preventDefault()

    // デフォルトのDOMイベント動作のため、handleSubmit関数は無視され、ログはコンソールに書き込まれません。
  }

  return (
    <div>
      ChildAreaPreDefault
      <form onSubmit={() => handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}
