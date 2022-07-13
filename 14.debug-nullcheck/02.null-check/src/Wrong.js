//! 動作:フォームに入力がない状態でSubmitボタンを押した場合「Please enter number of children」
//! 問題点:フォームに入力値0のとき 「Please enter number of children」が表示されてしまう
//! 正常動作:「Success」
const form = document.querySelector('form')
const input = document.querySelector('input')
const errMsg = document.querySelector('.error')
const successMsg = document.querySelector('.success')

//! ①NG
form.addEventListener('submit', (e) => {
  e.preventDefault()
  const numberOfChildren = parseInt(input.value)
  errMsg.textContent = ''
  successMsg.textContent = ''

  if (!numberOfChildren) {
    errMsg.textContent = 'Please enter number of children'
  } else {
    successMsg.textContent = 'Success'
  }
})

//! ②NG
//! 問題点:フォームに入力値がnullのとき 「Success」が表示されてしまう(何を入力しても「Success」)
//! 正常動作:「Please enter number of children」
form.addEventListener('submit', (e) => {
  e.preventDefault()
  const numberOfChildren = parseInt(input.value)
  errMsg.textContent = ''
  successMsg.textContent = ''

  if (numberOfChildren === null) {
    errMsg.textContent = 'Please enter number of children'
  } else {
    successMsg.textContent = 'Success'
  }
})
