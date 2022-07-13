//! OK①
form.addEventListener('submit', (e) => {
  e.preventDefault()
  errMsg.textContent = ''
  successMsg.textContent = ''
  const bool = true
  if (!bool) {
    errMsg.textContent = 'Please enter number of children'
  } else {
    successMsg.textContent = 'Success'
  }
})

//! OK②
form.addEventListener('submit', (e) => {
  e.preventDefault()
  const numberOfChildren = parseInt(input.value)
  errMsg.textContent = ''
  successMsg.textContent = ''
  if (!numberOfChildren != null) {
    errMsg.textContent = 'Please enter number of children'
  } else {
    successMsg.textContent = 'Success'
  }
})

//! OK③
form.addEventListener('submit', (e) => {
  e.preventDefault()
  const numberOfChildren = parseInt(input.value)
  errMsg.textContent = ''
  successMsg.textContent = ''
  if (!numberOfChildren != null) {
    errMsg.textContent = 'Please enter number of children'
  } else {
    successMsg.textContent = 'Success'
  }
})

//! OK④
form.addEventListener('submit', (e) => {
  e.preventDefault()
  const numberOfChildren = parseInt(input.value)
  errMsg.textContent = ''
  successMsg.textContent = ''
  //! 数値でないか確認したい
  //! フォームがnullのとき「Please enter number of children」

  //! 数値入力Only
  if (isNaN(numberOfChildren)) {
    errMsg.textContent = 'Please enter number of children'
  } else {
    successMsg.textContent = 'Success'
  }
})

//! OK④
form.addEventListener('submit', (e) => {
  e.preventDefault()
  const numberOfChildren = parseInt(input.value)
  errMsg.textContent = ''
  successMsg.textContent = ''
  //! 数値でないか確認したい
  //! フォームがnullのとき「Please enter number of children」

  //! 文字入力Only
  if (numberOfChildren == null && isNaN(numberOfChildren)) {
    errMsg.textContent = 'Please enter number of children'
  } else {
    successMsg.textContent = 'Success'
  }
})
