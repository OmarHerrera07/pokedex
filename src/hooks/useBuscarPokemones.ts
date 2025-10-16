import { useEffect, useState } from "react";
import type { PokemonApi } from "../interfaces/interfaces";

export const useBuscarPokemones = () => {
    const [pokemons, setPokemons] = useState<PokemonApi[]>([])
    const [isLoading,setIsLoading] = useState(true)


    useEffect(() => {
        fetch('http://localhost:3000/pokemon')
            .then(res => res.json())
            .then(data => {
                setTimeout(()=> {
                    setPokemons(data.data)
                    setIsLoading(false)
                },1000)
            })
    }, []);

    return { pokemons,isLoading }
}