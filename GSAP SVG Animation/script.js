let path = "M 100 200 Q 900 200 1700 200";

let finalPath = "M 100 200 Q 900 200 1700 200";


let string = document.querySelector("#string");

string.addEventListener("mousemove", function (dets) {
    path = `M 100 200 Q ${dets.x} ${dets.y} 1700 200`;

        gsap.to("svg path",{
            attr: {d:path},
            duration: 0.1,
            ease:"power3.out"
        })
})

string.addEventListener("mouseleave",function () {
    gsap.to("svg path", {
        attr: {d:finalPath},
        ease: "elastic.out(1,0.1)",
        duration: 2
    })
})