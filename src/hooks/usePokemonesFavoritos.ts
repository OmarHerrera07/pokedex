import { useState } from "react"
import type { PokemonSimple } from "../features/cuadricula/pokemon.dummy"
import type { PokemonApi } from "../interfaces/interfaces"

export const usePokemonesFavoritos = () => {

    const [favoritos, setFavoritos ] = useState<PokemonApi[]>([])

    const agregarFavorito = (pokemon : PokemonApi) => {
        setFavoritos((prev)=>{
            if(prev.find(p=> p.id === pokemon.id)) return prev;
            return [...prev,pokemon]
        })
    }

    return {
        favoritos,
        agregarFavorito
    }

}
