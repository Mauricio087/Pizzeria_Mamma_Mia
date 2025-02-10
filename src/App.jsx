
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Footer from "./components/Footer"
import RegisterPage from './components/RegisterPage'



const App = () => {
  return(
    <>
      <Navbar/>
      <RegisterPage/>
      {/* <Home/> */}
      <Footer/>

    </>
  )

}

export default App