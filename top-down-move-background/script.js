const body = document.querySelector('body')
const viewport = document.getElementById('viewport')
const greenDot = document.querySelector('.green-dot')
const backgroundImg = document.getElementById('background-img')



// moveElement(backgroundImg, 20, key, viewport)
const moveElement = (element, distance, pressedKey, obstacle) => {

    let left = element.offsetLeft
    let right = left + element.offsetWidth
    let top = element.offsetTop
    let bottom = top + element.offsetHeight
    // console.log('element.offsetParent:', element.offsetParent)

    // currentPosition and element.style.left are different
    // let obstacleLeft = obstacle.offsetLeft
    // let obstacleRight = obstacleLeft + obstacle.offsetWidth
    // let obstacleTop = obstacle.offsetTop
    // let obstacleBottom = obstacleTop + obstacle.offsetHeight
    const obstaclePos = obstacle.getBoundingClientRect()
    let obstacleLeft = obstaclePos.left
    let obstacleRight = obstaclePos.right
    let obstacleTop = obstaclePos.top
    let obstacleBottom = obstaclePos.bottom
    console.log(obstaclePos)
    

    
    if (pressedKey === 'd') {
        left += distance
        right += distance
    } else if (pressedKey === 'a') {
        left -= distance
        right -= distance
    } else if (pressedKey === 'w') {
        top -= distance
        bottom -= distance
    } else if (pressedKey === 's') {
        top += distance
        bottom += distance
    }
    
    // check if it's colliding
    if (
        left > obstacleLeft || // 200, 230  // 220, 230
        right < obstacleRight || // 701, 690  // 681, 690
        top > obstacleTop ||
        bottom < obstacleBottom
    ) {
        // console.log('elements touching now:', [currentPosition, obstaclePosition])
        console.log('elements touching now')
        return
    }
    
    // otherwise, move
    element.style.left = left + 'px'
    element.style.top = top + 'px'

    // return { currentPosition }
}



document.addEventListener('keydown', (e) => {
    // on key press, calculate new coordinates based on which key was pressed
    const key = e.key

    const positions = moveElement(backgroundImg, 20, key, viewport)
    // console.log(positions)
})
