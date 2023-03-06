import React, { useRef,useEffect } from 'react'
import gsap from 'gsap'

const HeroFooter = () => {
    const ref = useRef(null)

    useEffect(()=>{
        const tl = gsap.timeline({
            scrollTrigger:{
                trigger:ref.current,
                start:'top center',//top of element and center of viewport
                scrub:true
            }
        })
        tl.to('.hero-container',{backgroundColor:'white',
    duration:0.25},
    "-=2"
    )
    },[])

    return (
        <div ref={ref} className='hero-text-section'>
            <h1 id='hero-text'>Exclusively available on wide range of strores</h1>
            
        </div>
    )
}

export default HeroFooter
