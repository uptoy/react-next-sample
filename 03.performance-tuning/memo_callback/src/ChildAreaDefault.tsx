import React, { useState } from "react"

export function ChildAreaDefault() {
  const [name, setName] = useState("")

  const handleSubmit = (event: any) => {
    console.log(name)
    // デフォルトのDOMイベント動作のため、handleSubmit関数は無視され、ログはコンソールに書き込まれません。
  }

  return (
    <div>
      ChildAreaDefault
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

// https://sebhastian.com/react-preventdefault/