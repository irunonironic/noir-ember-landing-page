import Cta from "./components/Cta"
import Hero from "./components/Hero"
import About from "./components/AboutSection"
import Products from "./components/Products"
import Reviews from "./components/ReviewSection"
import Footer from "./components/Footer"
import './index.css'
import './App.css'
export default function Home() {
  
  return (
    <>
        <Hero />
        <About />
        <Products />
        <Reviews />
        <Cta />
        <Footer />
    
    </>
  )
}
