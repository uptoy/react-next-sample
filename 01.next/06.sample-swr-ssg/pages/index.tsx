import { GetServerSideProps } from 'next'
import useSWR, { KeyedMutator } from 'swr'
const BaseURL = 'https://jsonplaceholder.typicode.com/todos'

type Props = {
  data?: IPost[]
}

type IPost = {
  userId: number | undefined
  id: number | undefined
  title: string | undefined
  completed: string | undefined
}

export interface IData {
  data: IPost | undefined
  isError: Error | undefined
  isLoading: boolean
  mutate: KeyedMutator<any>
}

export interface IDatas {
  data: IPost[] | undefined
  mutate: KeyedMutator<any>
}

export const getServerSideProps: GetServerSideProps = async () => {
  const data: Props = await getData()
  return {
    props: { data },
  }
}
const Home = (props: Props) => {
  const { data } = props
  const { data: post, isError, isLoading } = useFetch()
  const { data: posts1 } = useFetches()
  if (isError) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>
  if (!posts1 || !posts1[0]) return <div>undefined</div>
  const title = data && data[0] ? data[0].title : ''
  const title1 = post ? post.title : ''
  const title2 = posts1 && posts1[0] ? posts1[0].title : ''

  return (
    <>
      <p>{title}</p>
      <p>{title1}</p>
      <p>{title2}</p>
    </>
  )
}

export default Home

const useFetches = (): IDatas => {
  const BaseURL = 'https://jsonplaceholder.typicode.com/todos'
  const { data, mutate } = useSWR(BaseURL, fetcher)
  return { data, mutate }
}

const useFetch = (): IData => {
  const BaseURL = 'https://jsonplaceholder.typicode.com/todos/1'
  const { data, error, mutate } = useSWR(BaseURL, fetcher)
  return { data, isError: error, mutate, isLoading: !error && !data }
}

const fetcher = async (url: string) => {
  const res = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
  return res.json()
}

export async function getData() {
  const options = {
    headers: {
      'Content-Type': 'application/json',
    },
  }
  const res = await fetch(BaseURL, options)
  return await res.json()
}
