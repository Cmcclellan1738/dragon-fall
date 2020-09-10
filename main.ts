/** 
Title: Dragon Fall
Creator: Cameron McClellan
Description: Flappy Bird Clone with Dragons.

 */
//  Setup
info.setLife(3)
info.setScore(0)
//  TODO Add Background
//  TODO Add fire effects
//  Create the Dragon Player
let dragon = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . 2 2 2 2 2 2 . . . . .
    . . . . . 2 2 2 2 2 2 . . . . .
    . . . . . 2 2 2 4 2 2 . . . . .
    . . . . . 2 2 2 2 2 2 . . . . .
    . . . . . 2 2 2 2 2 2 . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`)
dragon.x = 40
dragon.ay = 150
controller.A.onEvent(ControllerButtonEvent.Pressed, function on_flap() {
    dragon.vy = -80
})
game.onUpdate(function on_update() {
    let y = dragon.y
    if (y > scene.screenHeight()) {
        
    } else if (y < 0) {
        //  TODO Define Die 
        dragon.y = 0
    }
    
})
function die() {
    info.changeLifeBy(-1)
    dragon.y = scene.screenHeight() / 2
}

