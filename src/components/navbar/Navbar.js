import React,{useState,useEffect} from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {

    //change nav color
    const [color, setColor] = useState(false)
    const changeColor = () =>{
        if(window.scrollY >= 100){
            setColor(true)
        }else{
            setColor(false)
        }
    }

window.addEventListener('scroll', changeColor)


    return (
        <nav className={`navbar navbar-expand-lg sticky-top px-5 ${color && 'bg-dark navbar-dark'}`}>
  <div className="container-fluid">
    <Link to="/" className="navbar-brand"
    onClick={()=>window.scrollTo(0,0)}
    ><img src='https://cdn.pixabay.com/photo/2012/05/07/11/42/snail-48182_960_720.png' className='logo' alt=""/> Turbo</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      {/* <span className="navbar-toggler-icon"></span> */}
      <img src='https://cdn.pixabay.com/photo/2013/07/13/11/33/arrow-158377_960_720.png' className='nav-tog-icon' alt=''
      style={{width:'30px'}}/>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarText">
      <ul className="navbar-nav mb-2 mb-lg-0">
        {/* <li className="nav-item">
          <Link to="" style={{textDecoration:'none'}} className="nav-link">Pricing</Link>
        </li> */}
        <li className="nav-item">
          <Link to="/enquiry" style={{textDecoration:'none',color:`${color ? 'white':'black'}`}} className="nav-link"
          onClick={()=>window.scrollTo(0,0)}
          >Enquiry</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    )
}

export default Navbar
