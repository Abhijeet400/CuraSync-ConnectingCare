import './App.css'
import Carousel from './components/Carousel'
import Navbar from './components/Navbar'
import Features from './components/Features'
import Map from './components/Map'
import Separator from './components/Separator'
import Aboutus from './components/Aboutus'
import Contactus from './components/Contactus'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Navbar />
      <Carousel />
      <Separator/>
      <Features />
      <Separator/>
      <Map/>
      <Separator/>
      <Aboutus/>
      <Separator/>
      <Contactus/>
      <Footer/>
    </>
  )
}

export default App
