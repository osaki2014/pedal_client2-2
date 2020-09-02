input.onButtonPressed(Button.A, function () {
    offset = offset + 5
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(id)
})
radio.onReceivedString(function (receivedString) {
    if (parseFloat(receivedString) == id) {
        radio.sendNumber(result)
    }
})
input.onButtonPressed(Button.B, function () {
    offset = offset - 5
})
function _do () {
    result = Math.idiv(value, 8)
    if (result >= 5) {
        result = 4
    }
    if (result <= -1) {
        result = 0
    }
}
let y = 0
let value = 0
let result = 0
let offset = 0
let id = 0
radio.setGroup(99)
id = 4
offset = 0
basic.forever(function () {
    for (let index = 0; index <= 4; index++) {
        led.unplot(index, result)
    }
    y = 0
    value = input.rotation(Rotation.Pitch) - offset
    _do()
    for (let index = 0; index <= 4; index++) {
        led.plot(index, result)
    }
})
