import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Wishlist from './pages/Wishlist'
import Cart from './pages/Cart'
import View from './pages/View'
import Pgnf from './pages/Pgnf'
import Footer from './components/Footer'

function App() {

  return (
    <>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/wishlist' element={<Wishlist/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
      <Route path='/:id/view' element={<View/>}></Route>
      <Route path='/*' element={<Pgnf/>}></Route>
     </Routes>

     {/* footer */}
    </>
  )
}

export default App
