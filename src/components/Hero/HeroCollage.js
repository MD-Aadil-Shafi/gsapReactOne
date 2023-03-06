import React,{useEffect} from 'react'
import {photos,videos} from '../../data'
import {gsap} from 'gsap'

function VideoElement({src}){
    return( <div className='hero-element'>
        <video
        className='collage-element'
        autoPlay
        loop
        muted
        playsinline=""
        webkit-playsinline=""
        // src={src}
        >
            <source src={src} type="video/mp4"></source>
        </video>
    </div>
    );
}

function ImageElement({src}){
    return(
        <div className='hero-element'>
            <img src={src} className='collage-element' alt=''/>

        </div>
    )
}

const HeroCollage = () => {
const leftImages = photos.slice(0,2)
const rightImages = photos.slice(2,photos.length)
const [leftVideo, rightVideo] = videos;

useEffect(() => {
    const tl = gsap.timeline({
        delay:1
    })
    tl.fromTo(
        ".hero-element",
        {y:300},
        {y:0 ,duration:1, delay:function(index){
            return 0.2 * index;//animate dalay of each element
        }}
    )
}, [])

    return (
        <div className='hero-collage'>
            <div className='left-column'>
                {leftImages.map((src)=>(
                    <ImageElement src={src}/>
                ))}
                <VideoElement src={leftVideo}/>
            </div>
            <div className='right-column'>
            {rightImages.map((src)=>(
                    <ImageElement src={src}/>
                ))}
                <VideoElement src={rightVideo}/>
            </div>
        </div>
    )
}

export default HeroCollage
