"""
Title: Dragon Fall
Creator: Cameron McClellan
Description: Flappy Bird Clone with Dragons.
"""
# Setup
info.set_life(3)
info.set_score(0)
# TODO Add Background
# TODO Add fire effects

# Create the Dragon Player
dragon = sprites.create(img("""
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
"""))
dragon.x = 40
dragon.ay = 150

def on_flap():
    dragon.vy = -80
controller.A.on_event(ControllerButtonEvent.PRESSED, on_flap)

def on_update():
    y = dragon.y
    if y > scene.screen_height():
        die()
    elif y < 0:
        dragon.y = 0
game.on_update(on_update)

def die():
    info.change_life_by(-1)
    dragon.y = scene.screen_height()/2  
    dragon.vy = 0

# Create the Chains


# Detect the Collisions


