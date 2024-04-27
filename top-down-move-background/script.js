const body = document.querySelector('body')
const viewport = document.getElementById('viewport')
const greenDot = document.querySelector('.green-dot')
const backgroundImg = document.getElementById('background-img')



// BACKGROUND
const backgroundPos = {
    x: backgroundImg.offsetLeft,
    y: backgroundImg.offsetTop
}

const moveBackground = (img, pressedKey) => {
    if (pressedKey === 'd') {
        backgroundPos.x += 20
        img.style.left = backgroundPos.x + 'px'
    } else if (pressedKey === 'a') {
        backgroundPos.x -= 20
        img.style.left = backgroundPos.x + 'px'
    } else if (pressedKey === 's') {
        backgroundPos.y += 20
        img.style.top = backgroundPos.y + 'px'
    } else if (pressedKey === 'w') {
        backgroundPos.y -= 20
        img.style.top = backgroundPos.y + 'px'
    }
}



// SPRITE
// const spritePos = {
//     x: (viewport.width / 2) - (greenDot.width / 2), // viewport width / 2 - sprite width / 2
//     y: (viewport.height / 2) - (greenDot.height / 2), // viewport height / 2 - sprite height / 2
// }

// --------------------------------------------

let key = ''

body.addEventListener('keydown', (e) => {
    key = e.key

    moveBackground(backgroundImg, key)
})
