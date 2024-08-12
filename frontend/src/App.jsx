
import './App.css'
import Login from './components/Login'
import Navbar from './components/Navbar'
import { BrowserRouter,Link,Routes,Route } from 'react-router-dom'


function App() {
  

  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
      {/* <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} /> */}
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
