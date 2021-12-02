
// CONST AND VARIABLES
const navLinks = document.querySelectorAll( 'nav a' );
const imgsNav = document.querySelectorAll( 'nav img' );
const title = document.querySelector( 'h1' );
const verticalLine = document.querySelector( '.middle-line' );
const grapeLogo = document.querySelector( '.home-content img' );
const homeBtn = document.querySelector( '.home-content button' );

// EVENT LISTENER
window.addEventListener( 'load', revealAnim );

// FUNCTIONS
function revealAnim(  ) {
    const TLFADE = gsap.timeline(  );
    TLFADE
    // title animation
    .from(
        title,
        {
            autoAlpha: 0,
            y: -50,
            delay: 0.2
        }
    )
    // Line animation
    .to(
        verticalLine,
        {
            height: 200
        },
        '-=0.2'
    )
    // Grape logo animation
    .from(
        grapeLogo,
        {
            autoAlpha: 0,
            y: -50
        },
        '-=0.2'
    )
    // Boton animation
    .from(
        homeBtn,
        {
            autoAlpha: 0,
            y: -50
        },
        '-=0.2'
    )
    // Menu animations
    .from(
        navLinks,
        {
            autoAlpha: 0,
            y: -50,
            duration: 0.4,
            stagger: 0.1
        },
        '-=0.2'
    )
    // Images animation
    .from(
        imgsNav,
        {
            autoAlpha: 0,
            y: -50
        }
    )
}