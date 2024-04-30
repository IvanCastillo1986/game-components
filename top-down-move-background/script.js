const body = document.querySelector('body')
const viewport = document.getElementById('viewport')
const greenDot = document.querySelector('.green-dot')
const backgroundImg = document.getElementById('background-img')


let key = ''


const moveElement = (element, distance, pressedKey, obstacle) => {
    // sets the distance in pixels that will be moved by key press
    // const distance = 20

    const currentPosition = element.getBoundingClientRect()
    let left = currentPosition.left
    let right = currentPosition.right
    let top = currentPosition.top
    let bottom = currentPosition.bottom
    
    if (pressedKey === 'd') {
        left += distance
        right += distance
    } else if (pressedKey === 'a') {
        left -= distance
        right -= distance
    } else if (pressedKey === 's') {
        top += distance
        bottom += distance
    } else if (pressedKey === 'w') {
        top -= distance
        bottom -= distance
    }
    const obstaclePosition = obstacle.getBoundingClientRect()
    
    // check if it's colliding
    if (
        left > obstaclePosition.left || // 200, 230  // 220, 230
        right < obstaclePosition.right || // 701, 690  // 681, 690
        top > obstaclePosition.top ||
        bottom < obstaclePosition.bottom
    ) {
        console.log('elements touching now:', [currentPosition, obstaclePosition])
        return
    }
    
    // otherwise, move
    element.style.left = left + 'px'
    element.style.top = top + 'px'

    return { currentPosition, obstaclePosition }
}


document.addEventListener('keydown', (e) => {
    // on key press, calculate new coordinates based on which key was pressed
    key = e.key

    const positions = moveElement(backgroundImg, 20, key, viewport)

    console.log(positions)
})

/*
ToDo
Find out why it gets stuck when items collide on right side

*/
