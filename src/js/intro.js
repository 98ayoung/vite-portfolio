import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

export function intro(){
    gsap.registerPlugin(ScrollTrigger)
    const frameCount=17
    let OffsetValue=500
    
    gsap.to('.img',{
        backgroundPosition:(-OffsetValue*frameCount)+'px',
        ease:'steps('+frameCount+')',
        scrollTrigger:{
            trigger:'#intro',
            start:'top top',
            end:'+='+(frameCount*OffsetValue),
            pin:true,  
            scrub:true
        }
    })
}