function crosswalk () {
    basic.pause(500)
    basic.showIcon(IconNames.Yes)
    basic.showIcon(IconNames.StickFigure)
    basic.pause(200)
    for (let x = 0; x <= 9; x++) {
        basic.showNumber(9 - x)
    }
    basic.pause(2000)
    basic.clearScreen()
}
function green () {
    range = strip.range(0, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(1, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(2, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Green))
}
input.onButtonPressed(Button.A, function () {
    Red()
    basic.pause(1000)
    crosswalk()
    basic.pause(1000)
    yellow()
    basic.pause(1000)
    green()
    cannot_cross()
    basic.pause(1000)
})
function cannot_cross () {
    basic.showIcon(IconNames.No)
    basic.showIcon(IconNames.StickFigure)
    basic.pause(5000)
    basic.clearScreen()
}
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 4; index++) {
        if (distance < 5) {
            distance = 1
            basic.showIcon(IconNames.No)
        } else {
            basic.showIcon(IconNames.Yes)
        }
    }
})
function yellow () {
    range = strip.range(0, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(1, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Yellow))
    range = strip.range(2, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
}
function Red () {
    range = strip.range(0, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Red))
    range = strip.range(1, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(2, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
}
let distance = 0
let range: neopixel.Strip = null
let count = 0
let strip: neopixel.Strip = null
basic.showIcon(IconNames.Heart)
strip = neopixel.create(DigitalPin.P0, 3, NeoPixelMode.RGB)
strip.setBrightness(255)
basic.showNumber(count)
Red()
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    control.waitMicros(0)
    pins.digitalWritePin(DigitalPin.P0, 1)
    control.waitMicros(1)
    pins.digitalWritePin(DigitalPin.P0, 0)
    control.waitMicros(2)
    distance = pins.pulseIn(DigitalPin.P13, PulseValue.High) / 58
    basic.pause(2000)
})
