import { useEffect, useState } from 'react'
import './App.css'
import { Cuadricula } from './features/cuadricula/components/Cuadricula'
import EjemploUseRef from './features/EjemplosHook/EjemploUseRef'
import { Header } from './features/layout/components/Header'
import { EjemploUseReducer } from './features/EjemplosHook/reducers/Ejemplo'
import { usePokemonesFavoritos } from './hooks/usePokemonesFavoritos'
import type { PokemonSimple } from './features/cuadricula/pokemon.dummy'
import type { PokemonApi } from './interfaces/interfaces'
import { useBuscarPokemones } from './hooks/useBuscarPokemones';


function App() {


  const { favoritos, agregarFavorito } = usePokemonesFavoritos();
  const { pokemons, isLoading } = useBuscarPokemones();

  return (
    <>
      <div className="min-h-screen min-w-screen bg-gradient-to-br from-secondary-400 to-secondary-900 pb-10">

        <Header />

        <h3>Pokemones Favoritos</h3>
        {
          favoritos.map(fav => (
            <h2>{fav.nombre}</h2>
          ))
        }
        {
          isLoading ? <div>Cargando....</div> :
            pokemons?.map(pokemon => (
              <div className='flex gap-5 m-3'>
                <div>{pokemon.nombre}</div>
                <button className=" hover:cursor-pointer px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700" onClick={() => agregarFavorito(pokemon)}>Agregar pokemon</button>
              </div>
            ))
        }
        {/* <EjemploUseReducer /> */}
        {/* <EjemploUseRef/> */}
        {/* <Cuadricula /> */}
        {/* <button onClick={() => setCount((value) => ++value)}>Incrementar</button>
        {count} */}


      </div>
    </>
  )
}

export default App
