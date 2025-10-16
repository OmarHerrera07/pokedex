// import { Grid } from '@mantine/core';
import { pokemonDummies } from '../pokemon.dummy';
import CardPokemon from './CardPokemon';



export const Cuadricula = () => {
    return (
        <div className='grid lg:grid-cols-6 gap-6 p-4'>
            {
                pokemonDummies.map(pokemon => (
                    <CardPokemon
                    name={pokemon.name}
                    id={pokemon.id}
                    artwork_url={pokemon.artwork_url}
                    base_image={pokemon.base_image}
                    />
                ))
            }
        </div>
        // <Grid>
        //     {
        //         pokemonDummies.map(pokemon => (
        //             <Grid.Col  span={4}>
        //             <h4 key={pokemon.id}>
        //                     {pokemon.name}
        //                 </h4>
        //                 <img style={{
        //                     width: '200px'
        //                 }} src={pokemon.artwork_url} alt={pokemon.name} />

        //             </Grid.Col>
        //         ))
        //     }
        // </Grid>
    )
}

{/* <div
    className="grid 
                  gap-3 
                  [grid-template-columns:repeat(auto-fit,minmax(theme(spacing.28),1fr))] 
                  rounded-2xl 
                  p-6"
    style={{ backgroundColor: "var(--color-primary-500)" }}
>
    {pokemonDummies.map((pokemon, index) => (
        <div
            key={index}
            className="bg-white/50 backdrop-blur-md rounded-lg p-4 flex flex-col items-center"
        >
            <h2>{pokemon.name}</h2>
            <img src={pokemon.artwork_url} alt={pokemon.name} />
        </div>
    ))}
</div> */}