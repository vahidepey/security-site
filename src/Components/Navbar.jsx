import {useEffect, useRef,  useState } from "react"
import "./Navbar.css"
import { Link } from "react-router-dom"



function Navbar(){
    const[menuOpen, setMenuOpen]=useState(false)
    const navbarRef=useRef(null)

    useEffect(()=>{
        if (!menuOpen){
            return undefined
    }
    const handleOutsideClick=(event)=>{
        if(
            navbarRef.current && ! navbarRef.current.contains(event.target)
        ){
            setMenuOpen(false)
        }
        
    }
    
    document.addEventListener('mousedown', handleOutsideClick)
    return()=>{
        document.removeEventListener('mousedown',handleOutsideClick)}
      },
[menuOpen])
    
        
    return (
         <nav className="navbar"  ref={navbarRef}  >
         <div className="navbar-logo">
            <span>SECURITY</span>
            <small>TECHNOLOGY</small>
            </div>
        
                <button className="menu-button" onClick={()=>setMenuOpen(!menuOpen)}>{menuOpen? "" : "≡"}</button>
              
                {menuOpen&&(
                    <div className="mobile-menu">


                        <Link to="/home" onClick={()=>setMenuOpen(false)}>خانه</Link>
                         <Link to="/services" onClick={()=>setMenuOpen(false)}>خدمات</Link>
                        
                          <Link to="/projects" onClick={()=>setMenuOpen(false)}>پروژه ها</Link>
                           <Link to="/contact" onClick={()=>setMenuOpen(false)}>تماس با ما</Link>
                             <Link to="/about" onClick={()=>setMenuOpen(false)}>درباره ما</Link>
                    </div>
                )}
    </nav>
    )
   
}

export default Navbar