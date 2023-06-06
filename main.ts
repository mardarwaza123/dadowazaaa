input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index < 2; index++) {
        basic.showNumber(randint(1, 6))
        basic.pause(2000)
        basic.clearScreen()
        basic.pause(2000)
    }
})
