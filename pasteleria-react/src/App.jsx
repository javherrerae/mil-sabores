import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import Header from './components/header'
import Navegacion from './components/navegacion'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <header></header>
    <Navegacion></Navegacion>
    </>
  )
}

export default App
