const body = document.querySelector('body')
const viewport = document.getElementById('viewport')
const greenDot = document.querySelector('.green-dot')
const backgroundImg = document.getElementById('background-img')



// BACKGROUND
const backgroundPos = {
    x: 0,
    y: 0
}

// SPRITE
const spritePos = {
    x: (viewport.width / 2) - (greenDot.width / 2), // viewport width / 2 - sprite width / 2
    y: (viewport.height / 2) - (greenDot.height / 2), // viewport height / 2 - sprite height / 2
}

const moveSprite = (sprite, pressedKey) => {
    if (pressedKey === 'ArrowRight') {
        spritePos.x += 20
        sprite.style.left = spritePos.x + 'px'
    } else if (pressedKey === 'ArrowLeft') {
        spritePos.x -= 20
        sprite.style.left = spritePos.x + 'px'
    } else if (pressedKey === 'ArrowDown') {
        spritePos.y += 20
        sprite.style.top = spritePos.y + 'px'
    } else if (pressedKey === 'ArrowUp') {
        spritePos.y -= 20
        sprite.style.top = spritePos.y + 'px'
    }
}

// --------------------------------------------

let key = ''

body.addEventListener('keydown', (e) => {
    key = e.key

    moveSprite(greenDot, key)
})
