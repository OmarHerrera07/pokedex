import './App.css'
import { Cuadricula } from './features/cuadricula/components/Cuadricula'
import EjemploUseRef from './features/EjemplosHook/EjemploUseRef'
import { Header } from './features/layout/components/Header'


function App() {

  return (
    <>
      <div className="min-h-screen min-w-screen bg-gradient-to-br from-secondary-400 to-secondary-900 pb-10">

        <Header />
        <EjemploUseRef/>
        <Cuadricula />
        {/* <button onClick={() => setCount((value) => ++value)}>Incrementar</button>
        {count} */}

      </div>
    </>
  )
}

export default App
