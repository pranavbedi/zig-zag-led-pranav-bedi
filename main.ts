input.onButtonPressed(Button.A, function () {
    time = time * 0.85
})
function plot_LED () {
    led.plot(x, y)
    basic.pause(time)
    led.unplot(x, y)
}
input.onButtonPressed(Button.B, function () {
    time = time * 1.15
})
let x = 0
let y = 0
let time = 0
time += 100
y = 0
x = 0
let polarity = 1
let direction = 1
basic.forever(function () {
    for (let index = 0; index < 5; index++) {
        for (let index = 0; index < 5; index++) {
            plot_LED()
            y += polarity
        }
        polarity = polarity * -1
        y += polarity
        x += direction
    }
    direction = direction * -1
    x += direction
})
