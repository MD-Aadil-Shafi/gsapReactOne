import React,{useState,useEffect, useRef} from 'react'
import { featureSlides } from '../../data';
import cn from 'classnames'
import FeatureSlide from './FeatureSlide';
import './feature.scss'
import gsap from 'gsap';

function RenderImages({activeFeatureIdx}){
return featureSlides.map(({imgageUrl},index)=>(
    <img
    className={cn({'as-primary': activeFeatureIdx === index})}
    key={imgageUrl}
    style={{backgroundImage:`url(${imgageUrl})`}}
    />
))
}

const Feature = () => {
    const [activeFeatureIdx, setActiveFeatureIdx] = useState(0);//initial slider

    const featureSliderRef = useRef(null)
    const featureSliderRightRef = useRef(null)
    
    useEffect(()=>{
        function stopTrigger(){
          const tl = gsap.timeline({
              scrollTrigger:{
                  trigger: featureSliderRightRef.current,
                  start: 'top top',//top of element and top of viewport
                  end:()=> `+=${featureSliderRef.current.offsetHeight}`,//height of element
                scrub:true,
                pin:true
              }
          })  
        }
        const master = gsap.timeline();
        master.add(stopTrigger())
    },[featureSliderRef,featureSliderRightRef])

    return (
        <div ref={featureSliderRef} className='feature-slides-container'>
            <div className='feature-slides-left'>
        {featureSlides.map((feature,index)=>(
            <FeatureSlide
            key={feature.imgageUrl}
            updateActiveImg={setActiveFeatureIdx}
            title={feature.title}
            desc={feature.description}
            index={index}
            />

        ))}
            </div>

            <div ref={featureSliderRightRef} className='feature-slide-right'>
<RenderImages activeFeatureIdx={activeFeatureIdx}/>
            </div>
            
        </div>
    )
}

export default Feature
