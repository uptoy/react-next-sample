import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export async function getServerSideProps() {
  const resp = await fetch(
    'https://jherr-pokemon.s3.us-west-1.amazonaws.com/index.json',
  )

  return {
    props: {
      pokemon: await resp.json(),
    },
  }
}

interface IProps {
  pokemonList: Pokemon[]
}

interface Pokemon {
  id: number
  name: string
  image: string
}

export default function Home(props: IProps) {
  const { pokemonList } = props
  return (
    <div>
      <h2>Pokemon List</h2>
      <div>
        {pokemonList.map((pokemon: Pokemon) => (
          <div key={pokemon.id}>
            <Link href={`/pokemon/${pokemon.id}`}>
              <a>
                <Image
                  src={`https://jherr-pokemon.s3.us-west-1.amazonaws.com/${pokemon.image}`}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <h3>{pokemon.name}</h3>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
