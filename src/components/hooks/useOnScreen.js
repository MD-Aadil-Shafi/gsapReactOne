//hooks to check if image is visible or not on screen

import React,{useEffect,useState} from 'react'

const useOnScreen = (ref,rootMargin = '0px') => {
    //state to store whether element is visible
    const [isIntersecting, setIntersecting] = useState(false)

    useEffect(()=>{
        const observer = new IntersectionObserver(
            ([entry])=>{
                //update our state when observer callback fires
                //setIntersecting(entry?.isIntersecting ?? false)
                setIntersecting(entry.isIntersecting)
            },
            {
                rootMargin,
                threshold: 0.5
            }
        );
        const currentRef = ref.current;
        if(currentRef){
            observer.observe(currentRef);
        }
        return()=>{
            if(currentRef){
                observer.unobserve(currentRef);
            }
        };
    },[])//[ref,rootMargin]

    return isIntersecting;
}

export default useOnScreen
