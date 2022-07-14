// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const jsonData = await getData()
  res.status(200).json(jsonData)
}

export async function getData() {
  const BaseURL = 'https://jsonplaceholder.typicode.com/todos'
  const res = await fetch(BaseURL)
  return await res.json()
}
