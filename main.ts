radio.setGroup(27)
radio.setTransmitSerialNumber(true)
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P4) > 800) {
        radio.sendString("joyup")
    } else if (pins.analogReadPin(AnalogPin.P4) < 400) {
        radio.sendString("joydw")
    } else if (pins.analogReadPin(AnalogPin.P3) > 800) {
        radio.sendString("joyri")
    } else if (pins.analogReadPin(AnalogPin.P3) < 400) {
        radio.sendString("joylf")
    }
    if (pins.digitalReadPin(DigitalPin.P5) == 0) {
        radio.sendString("joyz")
    }
    if (pins.digitalReadPin(DigitalPin.P7) == 0) {
        radio.sendString("sel")
    }
    if (pins.digitalReadPin(DigitalPin.P6) == 0) {
        radio.sendString("mde")
    }
    if (pins.digitalReadPin(DigitalPin.P10) == 0) {
        radio.sendString("dpda")
    }
    if (pins.digitalReadPin(DigitalPin.P9) == 0) {
        radio.sendString("dpdb")
    }
    if (pins.digitalReadPin(DigitalPin.P11) == 0) {
        radio.sendString("dpdx")
    }
    if (pins.digitalReadPin(DigitalPin.P8) == 0) {
        radio.sendString("dpdy")
    }
})
