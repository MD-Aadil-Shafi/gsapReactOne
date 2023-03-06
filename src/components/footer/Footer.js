import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'

const Footer = () => {
    return (
        <div className='container-fluid bg-dark fw-light py-5'>
            <div className='row justify-content-between px-5'>
                
                <div className='col-md-4 text-center'>
                <Link to='/' style={{textDecoration:'none'}}
                onClick={()=>window.scrollTo(0,0)}
                >
                <img src='https://cdn.pixabay.com/photo/2012/05/07/11/42/snail-48182_960_720.png' className='logo-footer' alt=""/>
                <h1 className='text-light'>Turbo</h1>
                </Link>
                </div>
               

                <div className='col-md-4 text-center'>
                <h3 className='text-light fw-lighter'>About Us</h3>
                <p className='text-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>  
                </div>

                <div className='col-md-4 text-center'>
                <h3 className='text-light fw-lighter'>Get Social</h3>
                <img src='https://cdn.pixabay.com/photo/2021/02/08/15/34/social-media-5995251_960_720.png' className='footer-social' alt=''/>
                </div>
                
            </div>
            
            <h6 className='text-light fw-light text-center'>&copy; {new Date().getFullYear()}
            <a href='https://aadilportfolio.netlify.app/' target='_blank' style={{textDecoration:'none',color:'gold'}}> Mohd Aadil Shafi</a>
            </h6>
            
            
        </div>
    )
}

export default Footer
