import {
  useState,
  useEffect,
  useContext,
  useRef,
  useReducer,
  useMemo,
  useCallback,
} from 'react'
import logo from './logo.svg'
import './App.css'
import { SampleContext } from './main'

function App() {
  //! useState
  const [count, setCount] = useState(0)
  const handleIncrement = () => {
    setCount((currCount) => currCount + 1)
  }

  const handleDecrement = () => {
    setCount((currCount) => currCount - 1)
  }

  //! useEffect
  useEffect(() => {
    handleIncrement()
  }, [])

  //! useContext
  const data = useContext(SampleContext)

  //! useRef
  // const nullRef = useRef<number>(null);
  // const nonNullRef = useRef<number>(null!);
  // const nullableRef = useRef<number | null>(null);
  const ref = useRef(null)
  const divRef = useRef<HTMLDivElement>(null)
  const handleRef = () => {
    const div = divRef.current
    if (!div) throw Error('divRef is not assigned') // nullでないことを確かめる
    console.log(div.clientWidth)
  }

  //! useReducer
  type IStore = { count: number }
  type IActionType = { type: 'increment' } | { type: 'decrement' }
  const reducer = (state: IStore, action: IActionType) => {
    switch (action.type) {
      case 'increment':
        return { count: state.count + 1 }
      case 'decrement':
        return { count: state.count - 1 }
      default:
        return state
    }
  }
  const initialState = { count: 0 }
  const [state, dispatch] = useReducer(reducer, initialState)

  //! useMemo
  const [countA, setCountA] = useState(0)
  const [countB, setCountB] = useState(0)

  const square = (parameter: number) => {
    console.log('square関数の実行観察')
    //正方形の面積を求める関数を定義する
    //パフォーマンスを観察したいので、わざと重い処理を置いてみる
    let i = 0
    while (i < 20000000) i++
    return parameter * parameter
  }
  // 1ずつカウントが増える足し算A
  const resultA = () => {
    return setCountA(countA + 1)
  }

  // 1ずつカウントが増える足し算B
  const resultB = () => {
    return setCountB(countB + 1)
  }

  //正方形の面積をcountBを使った計算結果
  //useMemoを使って、計算結果をメモ化している
  //第２引数である依存配列にcountBを渡しているので、countAを更新しても、countBが更新されなければメモ化された描画結果を再利用するためsquare関数は更新されない
  const squareArea = useMemo(() => square(countB), [countB])

  //毎回重い処理
  // const squareArea = square(countB)

  //! useCallback
  const [counter, setCounter] = useState(0)

  //ページ読み込み時常に走る
  // const showCount = () => {
  //   alert('これは思い処理です')
  // }

  //counterの値が変化したときのみ走る
  const showCount = useCallback(() => {
    alert('これは思い処理です')
  }, [counter])

  return (
    <div className="App">
      <p>useState</p>
      <p>{count}</p>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
      <hr />
      <p>useEffect</p>
      <p>{count}</p>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
      <hr />
      <p>useContext</p>
      <p>{data.age}</p>
      <p>{data.name}</p>
      <hr />
      <p>useRef</p>
      <div ref={divRef} />
      <button onClick={handleRef}>ref</button>
      <hr />
      <p>useReducer</p>
      <p>{state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>

      <hr />
      <p>useMemo</p>
      <p>
        計算結果A: {countA}　<button onClick={resultA}>計算A + 1</button>
      </p>
      <p>【正方形の面積】</p>
      <p>
        計算結果B: {countB}　<button onClick={resultB}>計算B + 1</button>
      </p>
      <p>計算結果B ✕ 計算結果B = {squareArea}</p>
      <hr />
      <p>useCallback</p>
      <SomeChild showCount={showCount} />
    </div>
  )
}

export default App

interface IProps {
  showCount: () => void
}

const SomeChild = (props: IProps) => {
  const { showCount } = props
  return <div>aaa</div>
}
