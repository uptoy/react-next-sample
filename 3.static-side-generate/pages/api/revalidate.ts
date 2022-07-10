// I didn't follow the security pattern suggested in the NextJS documentation but you should:
//
// https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration#using-on-demand-revalidation
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: any) {
  for (const url of req.body) {
    await res.unstable_revalidate(url)
  }
  res.status(200).json({ revalidate: true })
}
