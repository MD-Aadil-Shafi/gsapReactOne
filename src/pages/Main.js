import React,{useEffect,useState} from 'react'
import Hero from '../components/Hero';
import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import Feature from '../components/featureSllides';


const Main = () => {
    // const[loader,setLoader] = useState(false);

    // useEffect(()=>{
    //     setLoader(true)
    //     setTimeout(()=>{
    //         setLoader(false);
    //     },5000);
    // },[]);
gsap.registerPlugin(ScrollTrigger)
useEffect(()=>{
    gsap.registerPlugin(ScrollTrigger)
},[])

    // return loader === true ? (
    //     <div className='loader'>
    //         <h1 className='text-center mt-5 pt-5'>
    //             Please wait while static files is being loaded...
    //         </h1>
    //     </div>
    // ) : (
    //     <>
    //     <Navbar/>
    //     <Hero/>
    //     </>
    // )
    return (
        <>
        <Hero/>
        <Feature/>
        </>
    )
}

export default Main
