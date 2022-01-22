const box = document.querySelector(".box")
for (var i = 0; i < 50; i++) {
    const blocks = document.createElement('div')
    blocks.classList.add('block')
    box.appendChild(blocks)
}

function animation() {
    anime({
        targets: '.block',
        translateX: function () {
            return anime.random(-700, 700)
        },
        translateY: function () {
            return anime.random(-500, 500)
        },
        opacity: function () {
            return anime.random(0, 0.6)
        },
        scale: function () {
            return anime.random(1, 5)
        },
        easing: "linear",
        duration: 2000,
        delay: anime.stagger(50),
        complete: animation


    })
}

animation()


const animes = document.getElementsByClassName("anime")
const heading = document.getElementsByClassName("head")


anime({
    targets: animes,
    translateX: 2000,
    duration: 1000,

})


anime({
    targets: heading,
    opacity: [0, 1],
    easing: 'easeInOutSine',
    delay: 1000
});



