const body = document.querySelector('body')
const viewport = document.getElementById('viewport')
const greenDot = document.querySelector('.green-dot')
const backgroundImg = document.getElementById('background-img')


let key = ''


const moveElement = (element, pressedKey) => {
    // sets the distance in pixels that will be moved by key press
    const distance = 20

    const currentPosition = element.getBoundingClientRect()
    let left = currentPosition.left
    let top = currentPosition.top

    console.log(currentPosition)
    // console.log([left, top])

    if (pressedKey === 'd') {
        left += distance
    } else if (pressedKey === 'a') {
        left -= distance
    } else if (pressedKey === 's') {
        top += distance
    } else if (pressedKey === 'w') {
        top -= distance
    }

    element.style.left = left + 'px'
    element.style.top = top + 'px'

    return {left, top}
}



document.addEventListener('keydown', (e) => {
    // on key press, calculate new coordinates based on which key was pressed
    key = e.key

    const backgroundPosition = moveElement(backgroundImg, key)

    console.log(backgroundPosition)
})

/*
on key press, calculate new coordinates based on which key was pressed

using those coordinates, update the coordinates in the element's position object

using the new object's position, calculate if the objects are touching
*/
