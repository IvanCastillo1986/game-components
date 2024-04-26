console.log('script is working')

const body = document.querySelector('body')
const viewport = document.getElementById('viewport')
const sprite = document.querySelector('.sprite')
console.log(viewport)

let pressedKey = ''
const position = {
    x: 0,
    y: 0
}

const move = (pos) => {
    
}

body.addEventListener('keydown', (e) => {
    pressedKey = e.key
    console.log('pressedKey:', pressedKey)

    if (pressedKey === 'ArrowRight') {
        position.x += 20
        console.log('position', position)
        console.log('pressed right', sprite.style.left) 
    } else if (pressedKey === 'ArrowLeft') {
        position.x -= 20
    } else if (pressedKey === 'ArrowDown') {
        position.y += 20
    } else {
        position.y -= 20
    }
})
