import { QueryClient } from '@tanstack/react-query';
import { useBuscarPokemones } from '../../../hooks/useBuscarPokemones';
import CardPokemon from './CardPokemon';



export const Cuadricula = () => {

    const { data, isLoading, refetch,nexPage,prevPage,searchPokemons,search } = useBuscarPokemones({});




    if (isLoading) return <div>Cargando....</div>
    return (
        <>
        <div className='flex gap-2 m-5'>
            <button className='p-2 text-amber-50 bg-primary-200 rounded-2xl hover:cursor-pointer' onClick={() => refetch()}>Refetch</button>
            <button className='p-2 text-amber-50 bg-primary-200 rounded-2xl hover:cursor-pointer' onClick={() => nexPage()}>Siguiente</button>
            <button className='p-2 text-amber-50 bg-primary-200 rounded-2xl hover:cursor-pointer' onClick={() => prevPage()}>Anterior</button>
            <input className='bg-amber-50' placeholder='Bucar pokemon' type="text" value={search} onChange={(ev)=> searchPokemons(ev.target.value)} />
        </div>
            <div className='grid lg:grid-cols-6 gap-6 p-4'>
                {
                    data?.data.map(pokemon => (
                        <CardPokemon
                            name={pokemon.nombre}
                            id={pokemon.id}
                            artwork_url={pokemon.imagen}
                            base_image={pokemon.imagen}
                        />
                    ))
                }
            </div>
        </>
    )
}
