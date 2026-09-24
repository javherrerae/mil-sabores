import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import Header from './components/header'
import Navegacion from './components/navegacion'
import Footer from './components/footer'
import Home from './Pages/Home'
import Catalogo from './Pages/Catalogo'
import {Routes,Route} from 'react-router-dom'
import Tabla_porciones from './Pages/Tabla_porciones'
import Quienes_somos from './Pages/Quienes_somos'
import Contacto from './Pages/Contacto'
import Blog from './Pages/Blog'
import Faq from './Pages/Faq'
import Perfil from './Pages/Perfil'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header></Header>
    <Navegacion></Navegacion>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/catalogo' element={<Catalogo></Catalogo>}></Route>
      <Route path='/tabla_porciones' element={<Tabla_porciones></Tabla_porciones>}></Route>
      <Route path='/Quienes_somos' element={<Quienes_somos></Quienes_somos>}></Route>
      <Route path='/Contacto' element={<Contacto></Contacto>}></Route>
      <Route path='/Blog' element={<Blog></Blog>}></Route>
      <Route path='/Faq' element={<Faq> </Faq>}></Route>
      <Route path='Perfil' element={<Perfil></Perfil>}></Route>
    </Routes>

    <Footer></Footer>

    </>
  )
}

export default App
