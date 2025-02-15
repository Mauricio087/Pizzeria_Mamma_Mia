
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Footer from "./components/Footer"
//import Cart from './components/Cart'
//import RegisterPage from './components/RegisterPage'
//import LoginPage from './components/LoginPage'



const App = () => {
  return(
    <>
      <Navbar/>
      {/* <RegisterPage/> */}
      {/* <LoginPage/> */}
      <Home/>
      {/*<Cart/>*/}
      <Footer/>

    </>
  )

}

export default App