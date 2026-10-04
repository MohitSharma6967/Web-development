gsap.from("#page1 #box ",{
    scale: 0,
    delay: 1,
    duration: 1,
    rotate: 360,
})

gsap.from("#page2 h1", {
    y: -100,
    opacity: 0,
    duration: 1,
    scrollTrigger:{
        trigger: "#page2 h1",
        scroller: "body",
        // markers: true,
        start: "top 40%",
        end:"top 20%",
        scrub: 1
    }
})

gsap.from("#page2 h4", {
    y: 100,
    opacity: 0,
    duration: 1,
    scrollTrigger:{
        trigger:" #page2 h4",
        scroller: "body",
        // markers:true,
        start :"top 80%",
        end: "top 60%",
        scrub: 1
    }
})

gsap.to("#page3 h1", {
    transform: "translateX(-101%)",
    scrollTrigger:{
        trigger: "#page3",
        scroller: "body",
        // markers: true,
        start:"top 0%",
        end:"top -100%",
        scrub:2,
        pin:true,
    }
})

gsap.to("#page4 #box",{
    y: "230%",
    opacity:1,
    scrollTrigger
})

