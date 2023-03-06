import React,{useEffect} from 'react'
import { gsap } from 'gsap'

const HeroHeader = () => {

    useEffect(()=>{
        gsap.fromTo(
            '#hero-text',
            {
                opacity:0
            },
            {opacity:1,duration:1,delay:0.2}
        )
    },[])

    return (
        <div className='hero-text-section'>
            <h1 id='hero-text'>Revolutionizing the tech with the Turbo Core Powered Processors</h1>
        </div>
    )
}

export default HeroHeader
