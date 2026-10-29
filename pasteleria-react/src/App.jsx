import { Routes, Route, useLocation } from 'react-router-dom'

import AdminLayout from './components/AdminLayout'
import AdminDashboard from './Pages/AdminDashboard'
import AdminSeccion from './Pages/AdminSeccion'

import Header from './components/header'
import Navegacion from './components/navegacion'
import Footer from './components/footer'

import Home from './Pages/Home'
import Catalogo from './Pages/Catalogo'
import Tabla_porciones from './Pages/Tabla_porciones'
import Quienes_somos from './Pages/Quienes_somos'
import Contacto from './Pages/Contacto'
import Blog from './Pages/Blog'
import Faq from './Pages/Faq'
import Perfil from './Pages/Perfil'
import Carrito from './Pages/Carrito'
import Login from './Pages/Login'
import Registro from './Pages/Registro'
import RecuperarPassword from './Pages/RecuperarPassword'
import DetalleProducto from './Pages/DetalleProducto'
import Categorias from './Pages/Categorias'
import Ofertas from './Pages/Ofertas'
import Checkout from './Pages/Checkout'
import CompraExitosa from './Pages/CompraExitosa'
import CompraFallida from './Pages/CompraFallida'

function App() {
  const { pathname } = useLocation()
  const enAdmin = pathname.toLowerCase().startsWith('/admin')
  return (
    <>
      {!enAdmin && <Header />}
      {!enAdmin && <Navegacion />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/tabla_porciones" element={<Tabla_porciones />} />
        <Route path="/Quienes-somos" element={<Quienes_somos />} />
        <Route path="/Contacto" element={<Contacto />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Faq" element={<Faq />} />
        <Route path="/Perfil" element={<Perfil />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/recuperar-password" element={<RecuperarPassword />} />
        <Route path="/producto/:id" element={<DetalleProducto />} />
        <Route path="/categorias" element={<Categorias />} />
        <Route path="/ofertas" element={<Ofertas />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/compra-exitosa/:id" element={<CompraExitosa />} />
        <Route path="/compra-fallida" element={<CompraFallida />} />
        <Route path="/admin" element={<AdminLayout><AdminDashboard /></AdminLayout>}/>
        <Route path="/admin/:seccion" element={<AdminLayout><AdminSeccion /></AdminLayout>}/>
        <Route path="*" element={
          <main className="container py-5 text-center">
            <h1>Página no encontrada</h1>
            <p>La página solicitada no existe.</p>
          </main>
        } />
      </Routes>
      {!enAdmin && <Footer />}
    </>
  )
}

export default App
