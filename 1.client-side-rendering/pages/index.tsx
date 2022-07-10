/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Image from 'next/image'

interface IPokemon {
  id: number
  name: string
  image: string
}

export default function Home() {
  const [pokemonList, setPokemonList] = useState<IPokemon[]>([])

  useEffect(() => {
    async function getPokemon() {
      const resp = await fetch(
        'https://jherr-pokemon.s3.us-west-1.amazonaws.com/index.json',
      )
      setPokemonList(await resp.json())
    }
    getPokemon()
  }, [])

  return (
    <div className={styles.container}>
      <h2>Pokemon List</h2>
      <div className={styles.grid}>
        {pokemonList.map((pokemon) => (
          <div className={styles.card} key={pokemon.id}>
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
