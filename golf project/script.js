var crsr = document.querySelector("#cursor")
var crsrblr = document.querySelector("#cursorBlur")


document.addEventListener("mousemove", function(dets){
    crsr.style.left = dets.x+"px"
    crsr.style.top = dets.y+"px"
    crsrblr.style.left = dets.x-250+"px"
    crsrblr.style.top = dets.y-250+"px" 
})

// document.addEventListener("mousemove", function(dets){
//         crsrblr.style.left = dets.x+"px"
//         crsrblr.style.top = dets.y+"px" 
// }) 
// The above script of blur curosr is repeating as we have same propert already....so we wrote non repeating part in single part

gsap.to("#nav",{
    backgroundColor: "#000",
    height: "120px",
    duration:0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers: true,
        start:"top -10%",
        end:"top -10%",
        scrub: 1
    }
})

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scoller:"body",
        start:"top -20%",
        end:"top -80%",
        // markers:true,
        scrub: 2,
    }
})

