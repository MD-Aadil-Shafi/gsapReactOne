import React,{useRef,useEffect} from 'react'
import imgsrc from '../../assets/phone.png'
import videoUrl from '../../assets/screenVideo.mp4'
import { gsap } from 'gsap'

const HeroPhoneBlock = () => {
    const phoneRef = useRef(null)//here null = initiall value
    
    useEffect(()=>{
        function intro(){
            const tl = gsap.timeline();
            tl.fromTo(phoneRef.current, {y: 200},
                {y: 0, duration: 1});
                return tl;
        }
        function stopTrigger(){
            const tl = gsap.timeline({
                delay:1,
                scrollTrigger:{
                    trigger: phoneRef.current,
                    start: "top top",//position of element and viewport
                    end: "+=800",
                    pin: true,
                    scrub:true,
                },
            });
            tl.to(phoneRef.current, {scale: 1.2},"+=0.2");
            tl.to(
                ".hero-container",
                {backgroundColor:"black",
            duration: 0.5},
            "-=0.5"
            )
            return tl;
        }

        const master = gsap.timeline()
        master.add(intro());
        setTimeout(()=>{
            master.add(stopTrigger());
        },1000);
        
    },[])
    
    return (
        <div className='hero-phone-block' ref={phoneRef}>
            <div className='hero-phone-template'
             style={{backgroundImage:`url(${imgsrc})`}}>
<video className='collage-element'
playsInline=""
autoPlay
webkit-pllaysinlline=""
loop
muted
src={videoUrl}>
</video>
             </div>
            
        </div>
    )
}

export default HeroPhoneBlock
