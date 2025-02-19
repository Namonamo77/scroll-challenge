gsap.registerPlugin(ScrollTrigger)

const ani = gsap.timeline({defaults: {duration: 2}})
gsap.set(".hero", {autoAlpha:1})

ani.from(".hero", {opacity:0})
    .to(".mountains", {clipPath: "circle(100%)"})
    .to(".explore", {xPercent: 150}, "<=25%")
    .to(".wild", {xPercent: -150}, "<")
    .to(".mountains", {backgroundPosition: "50% 40%"}, "<")


ScrollTrigger.create({
    trigger: ".hero",
    scrub: 1,
    pin: true,
    animation: ani,
    start: "top top",
    end: "bottom 50%"


})

const lenis = new Lenis()

        function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)

// see reference animation here
// https://x.com/snorklTV/status/1891935334130385160

