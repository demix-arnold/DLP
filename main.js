// import bootstrap from "bootstrap/dist/js/bootstrap.bundle";

//visual 순차적 애니메이션
const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
    gsap.to(fadeEl, 1, {
        opacity: 1,
        delay: (index + 1) * .8,
    })
});

// 카피라이트 년도
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();

//to-top
const toTopEl = document.querySelector ('#to-top');
window.addEventListener ('scroll', _.throttle(function () {
    if (window.scrollY > 500) {
        gsap.to(toTopEl, .2, {
            x: 0
        })
    } else {
        gsap.to(toTopEl, .2, {
            x: 100
        })
    }
}),300);
toTopEl.addEventListener('click', function(){
    gsap.to(window, .3, {
        scrollTo:0
    })
})

//scroll-spy
const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function(spyEl){
    new ScrollMagic
    .Scene({
        triggerElement: spyEl,
        triggerHook: .7
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});
