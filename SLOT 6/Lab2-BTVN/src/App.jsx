import AppNavbar from './components/AppNavbar'
import HeroCarousel from './components/HeroCarousel'
import MenuSection from './components/MenuSection'
import BookingForm from './components/BookingForm'
import './App.css'

function App() {
  return (
    <div className="pizza-page">
      <AppNavbar />
      <HeroCarousel />
      <MenuSection />
      <BookingForm />
    </div>
  )
}

export default App
