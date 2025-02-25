let number = 0
input.onGesture(Gesture.ThreeG, function () {
    basic.clearScreen()
    number = randint(1, 3)
    if (number == 1) {
        basic.showIcon(IconNames.SmallSquare)
    } else if (number == 2) {
        basic.showIcon(IconNames.Square)
    }
})
