loops.everyInterval(100, function () {
    basic.showLeds(`
        . . # . .
        . . . # .
        # # # # #
        . . . # .
        . . # . .
        `)
    basic.pause(2000)
    basic.clearScreen()
    basic.showNumber(randint(1, 100))
})
