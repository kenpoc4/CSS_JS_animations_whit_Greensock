gsap.from(
    '.b2 h2',
    {
        duration: 1,
        autoAlpha: 0,
        y: 100,
        scale: 0.5,
        scrollTrigger: {
            trigger: ".b2 h2",
            markers: true,
            // Trigger Scroller
            start: "top 80%",
            end: "bottom 30%",
            // OnEnter onLeave onEnterBack onLeaveBack
            onEnter: (  ) => console.log("Enter"),
            onLeave: (  ) => console.log("Leave"),
            onEnterBack: (  ) => console.log("EnterBack"),
            onLeaveBack: (  ) => console.log("LeaveBack"),
            scrub: 0.5
        }
    }
);