const img1 = document.querySelector( '.img1' );
/**
 * 
 El metodo TO es para especificar hacia donde va la animación
gsap.to( 
 '.img1',
 {
    x: 100,
    y: 100,
    duration: 2,
    backgroundColor: "red",
    rotate: 45
 }
);
 */

/**
 * El metodo FROM es para especificar desde donde viene la animación
gsap.from(
    img1,
    {
        y:-300,
        duration: 2,
        rotate: 45
    }
);
);
 */

/**
 * 
 gsap.from(
     'img',
     {
         autoAlpha: 0,
         y: -100,
         ease: "power4",
         duration: 2,
         stagger: {
             each: 0.5,
             from: "end"
         },
         delay: .5, ---> Pausa antes de comenzar la animación
         repeat: -1, ---> Número de repeticiones 
         repeatDelay: 0.25, ---> Tiempo de pausa entre cada repetición
         yoyo: true ---> La animación tiene el efecto de yoyo
 
     }
 );
 */
/**
 * Random Values
 gsap.to( 
     ".btn",
     {
         duration: 0.4,
         stagger: 0.2,
         x: "random( -100, 100 )"
     }
 );
 */
/**
 * Keyframes
 gsap.to(
     img1,
     {
         keyframes: [
             {
                 duration: .3,
                 x: 100
             },
             {
                 duration: .3,
                 y: 100
             },
             {
                 duration: .3,
                 x: 200
             },
         ]
     }
 );
 */

 /**
  * Trigger some events callbacks
  gsap.to(
      img1,
      {
          x: 100,
          duration: 1,
          repeat: 1,
          onComplete: (  ) => console.log( "Complete" ),
          onStart: (  ) => console.log( "Start" ),
          onUpdate: (  ) => console.log( "Update" ),
          onRepeat: (  ) => console.log( "Repeat" ),
      }
  );
  */

/**
 * Save an Animation
 gsap.registerEffect( {
     name: "imgAnimation",
     effect: ( targets, config ) => {
         return gsap.to(
             targets,
             {
                 duration: config.duration,
                 y: 200,
                 scale: 1.4,
                 rotation: 360
             }
         )
     },
     defaults: {
         duration: 2
     }
 } );
 
 gsap.effects.imgAnimation( 
     img1, 
     { 
         duration: 5 
     } 
 );
 */

 /**
  * Set some values
  gsap.set(
      img1,
      {
          opacity: 0
      }
  );
  */

/**
 * The utility methods of the tweens
 const tween = gsap.to(
     ".img2",
     {
         y: 200,
         paused: true
     }
 );
 setTimeout(() => {
     tween.resume(  );
 }, 2000);
 */

// TIMELINE
const tl = gsap.timeline( {
    defaults: {
        duration: 1,
        ease: 'power4.out' 
    },
    // repeat: -1,
    // yoyo: true
    onComplete: (  ) => console.log( 'COMPLETE' ),
    onStart: (  ) => console.log( 'START' )
} );

tl
.from( 
    '.img1', 
    {
        autoAlpha: 0,
        y: -50
    } 
)
.from( 
    '.img2', 
    {
        autoAlpha: 0,
        y: -50
    }
)
.from( 
    '.img3', 
    {
        autoAlpha: 0,
        y: -50
    } 
)
.from( 
    'h1', 
    {
        autoAlpha: 0,
        y: -50
    } 
)
.from( 
    'p', 
    {
        autoAlpha: 0,
        y: -50
    } 
)
