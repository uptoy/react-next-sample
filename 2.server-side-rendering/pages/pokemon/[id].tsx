/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

interface IProps {
  params: IParams
}

interface IParams {
  id: string
}

interface IPokemon {
  name: string
  type: string[]
  stats: IStat[]
  image: string
}

interface IStat {
  name: string
  value: number
}

interface DetailIProps {
  pokemon: IPokemon
}

export async function getServerSideProps(props: IProps) {
  const { params } = props
  const resp = await fetch(
    `https://jherr-pokemon.s3.us-west-1.amazonaws.com/pokemon/${params.id}.json`,
  )

  return {
    props: {
      pokemon: await resp.json(),
    },
  }
}

export default function Details(props: DetailIProps) {
  const { pokemon } = props
  return (
    <div>
      <Head>
        <title>{pokemon.name}</title>
      </Head>
      <div>
        <Link href="/">
          <a>Back to Home</a>
        </Link>
      </div>
      <div>
        <div>
          <Image
            src={`https://jherr-pokemon.s3.us-west-1.amazonaws.com/${pokemon.image}`}
            alt={pokemon.name}
            width={100}
            height={100}
          />
        </div>
        <div>
          <div>{pokemon.name}</div>
          <div>{pokemon.type.join(', ')}</div>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              {pokemon.stats.map(({ name, value }) => (
                <tr key={name}>
                  <td>{name}</td>
                  <td>{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
