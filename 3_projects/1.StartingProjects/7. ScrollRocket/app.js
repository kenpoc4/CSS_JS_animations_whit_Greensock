const topRocket = document.querySelector( '.top-rocket' );
const midRocket = document.querySelector( '.mid-rocket' );
const rocket = document.querySelector( '.bot-rocket' );
const supply = document.querySelector( '.supply' );
const blocs = document.querySelector( '.bloc' );

const offsets = [105, 206, 848];

gsap.utils.toArray( ['.bloc2', '.bloc3', 'bloc4'] ).forEach( ( bloc, index ) => {

    gsap.to( bloc, {
        y: 0,
        ease: 'linear',
        scrollTrigger: {
            trigger: '.container-scroll',
            start: 'top 50%',
            end: `+=${offsets[index]}`,
            scrub: true,
            markers: true
        }
    } );
} );