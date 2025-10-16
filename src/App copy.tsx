import { useEffect, useState } from 'react'
import './App.css'
import { Header } from './features/layout/components/Header'
import { Cuadricula } from './features/cuadricula/components/Cuadricula'
import { Select } from '@mantine/core'

interface PokemonApi {
  pokemon: {
    name: string
  }
}

function App() {
  const [count, setCount] = useState(0)
  const [pokemones, setPokemones] = useState<PokemonApi[]>([]);
  const [isLoading, setLoading] = useState(true)
  const [type, setType] = useState<string | null>(null);

  const getPokemonesByType = async () => {
    setLoading(true);
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
      const data = await response.json();
      setPokemones(data.pokemon ?? [])
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getPokemonesByType()
  }, [type]);

  if (isLoading) return <div>BUscando pokeones de tipo {type}</div>

  return (
    <>
      <div className="min-h-screen min-w-screen bg-gradient-to-br from-secondary-400 to-secondary-900 pb-10">

        <Header />
        {/* <Cuadricula /> */}
        {/* <button onClick={() => setCount((value) => ++value)}>Incrementar</button>
        {count} */}


        <div>
          <Select
            data={['water', 'fire', 'grass']}
            value={type}
            onChange={setType}
          ></Select>
        </div>
        <div>
          <h2>Pokemones</h2>
          {
            pokemones.map(pokemon => (
              <div className='px-3' key={pokemon.pokemon.name}>
                {pokemon.pokemon.name}
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default App
