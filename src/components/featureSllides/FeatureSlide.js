import React,{useState,useEffect, useRef} from 'react'
import useOnScreen from '../hooks/useOnScreen';

const FeatureSlide = ({title,desc,index,updateActiveImg}) => {
    
    const ref = useRef(null);
    const onScreen = useOnScreen(ref)

    useEffect(()=>{
        if(onScreen){
            updateActiveImg(index)
        }
    },[onScreen,index])
    
    return (
        <div ref={ref} className='feature-slides'>
            <h3 className='feature-slide-title'>{title}</h3>
            <p className='feature-slide-desc'>{desc}</p>
            
        </div>
    )
}

export default FeatureSlide
