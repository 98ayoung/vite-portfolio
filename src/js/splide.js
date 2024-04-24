import Splide from '@splidejs/splide'
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

export function splide(){
    new Splide( '#splide1',{
        type : "loop",
        drag : true,
        autoWidth : true,
        gap : 30,
        pagination : false,
        focus : 'center',
        arrows : false,
        autoScroll :{
            speed : 1.5,
        },
    }).mount({AutoScroll});

    new Splide( '#splide2',{
        direction : 'ltl',
        type : "loop",
        autoWidth : true,
        focus : 'center',
        gap : 30,
        autoScroll :{
            speed : 5,
        },
    }).mount({AutoScroll});

    new Splide( '#splide3',{
        type : "loop",
        drag : true,
        autoWidth : true,
        gap : 30,
        pagination : false,
        focus : 'center',
        arrows : false,
        autoScroll :{
            speed : 5,
        },
    }).mount({AutoScroll});
}