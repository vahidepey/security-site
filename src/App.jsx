import { BrowserRouter,  Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import About from './pages/About'
import Contact from './pages/Contact'
import Services from './pages/Services'
import Navbar from './Components/Navbar'
import'./App.css';

function App(){

  return (
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path='/security-site/' element= {<Home/>}/>
     <Route path='/home' element= {<Home/>}/>
    <Route path='/services' element={<Services/>}/>
    <Route path='/projects' element={<Projects/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element= {<Contact/>}/>
      </Routes>
      <div style={{ height:'auto'


  }}></div>


    <a  href='tel:0912xxxxxxxx' className='floating-call'>☎</a>
    <a href='https://wa.me/989123338816'
    className='floating-whatsapp'
    target='blank'
    rel='noopener noreferrer'>WhataApp</a>
  
  </BrowserRouter>
  )  
}

      

export default App