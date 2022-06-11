
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Product } from './components/Product'
import {Navbar} from "./components/navbar"
import {User} from "./components/User"
import {Cart} from "./components/Cart"
import {Home} from "./components/Home"
function App() {
 

  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
      <Route path='/' element={<Home></Home>}></Route>
        <Route path='/products' element={<Product></Product>}></Route>
        <Route path='/users' element={<User></User>}></Route>
        <Route path='/carts' element={<Cart></Cart>}></Route>
      </Routes>
    </div>
  )
}

export default App
