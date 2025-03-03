import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from "./components/Navbar"
//import Footer from "./components/Footer"

//import Home from './pages/Home'
//import RegisterPage from './pages/RegisterPage'
//import LoginPage from './pages/LoginPage'
//import Cart from './pages/Cart'
//import Pizza from './pages/Pizza'
//import Profile from './pages/ProFile'
//import NotFound  from './pages/NotFound'



const App = () => {
  return(
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          {/* <Route path='/' element={ <Home/> } /> */}
          {/* <Route path='/Register' element={<RegisterPage/>}/>
          <Route path='/Login' element={<LoginPage/>} />
          <Route path='/Cart' element={<Cart/>}/>
          <Route path='/Pizza/p001' element={<Pizza/>}/>
          <Route path='/Profile' element={<Profile/>}/> */}
          {/* <Route path='/404' element={<NotFound/>}/> */}
        </Routes>
        {/* <Footer/> */}
      </BrowserRouter>
    </>
  )

}

export default App