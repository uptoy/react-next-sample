import { memo } from "react"

interface IProps {
  open: boolean
  onClickClose: () => void
}

export const ChildArea = memo((props: IProps) => {
  const { open, onClickClose } = props

  console.log("ChildAreaレンダリング")
  // パフォーマンスチューニング

  return (
    <div>
      {open ? (
        <div>
          <p>子コンポーネント</p>
        </div>
      ) : null}
      <button onClick={onClickClose}>閉じる</button>
    </div>
  )
})
