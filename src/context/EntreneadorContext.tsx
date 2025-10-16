import { createContext, useState } from "react"

interface Entrenedor {
    nombre: string,
    medallas: number,
    pokemonActivo: string | null
}

interface EntrenadorContextType {
    entrenador: Entrenedor,
    ganarMedalla: () => void
}

const defaultEntrenador:  EntrenadorContextType = {
    entrenador : {
        nombre: 'ash',
        medallas: 0,
        pokemonActivo: 'pikachu'
    },
    ganarMedalla: () => console.log( 'ganaste una medalla' )
}

export const EntrenadorContext = createContext<EntrenadorContextType>(defaultEntrenador);

export const EntrenadorProvaider = ({children} : {children : React.ReactNode}) => {
    const [entrenador,setEntrenador] = useState<Entrenedor>(defaultEntrenador.entrenador);

    const ganarMedalla = () => {
        setEntrenador(prevEntrenador => (
            {
                ...prevEntrenador,
                medallas: prevEntrenador.medallas + 1
            }
        ))
    }

    return (
        <EntrenadorContext.Provider value={{entrenador,ganarMedalla,}}
        >
            {children}
        </EntrenadorContext.Provider>
    )
}