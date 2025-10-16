import React, { useEffect, useRef } from 'react'

export default function EjemploUseRef() {
    const numeroRef = useRef(0);

    const incrementar = () => {
        numeroRef.current = numeroRef.current + 1;
        console.log('Valor actua: ', numeroRef.current);
    }


    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    return (
        <>
            <div>{numeroRef.current}</div> 
            <button onClick={incrementar}>Incrementar</button><br />
       
       
            <input className='bg-white p-4' ref={inputRef} placeholder='Escribe aqui...'></input>
        </>
    )
}
