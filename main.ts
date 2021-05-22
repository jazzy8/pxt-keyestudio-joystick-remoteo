radio.setGroup(27)
radio.setTransmitSerialNumber(true)
led.enable(false)
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P3) > 800) {
        radio.sendString("joyup")
        serial.writeLine("joyup")
    } else if (pins.analogReadPin(AnalogPin.P3) < 400) {
        radio.sendString("joydw")
        serial.writeLine("joydw")
    } else if (pins.analogReadPin(AnalogPin.P4) > 800) {
        radio.sendString("joyri")
        serial.writeLine("joyri")
    } else if (pins.analogReadPin(AnalogPin.P3) < 400) {
        radio.sendString("joylf")
        serial.writeLine("joylf")
    }
    if (pins.digitalReadPin(DigitalPin.P5) == 0) {
        radio.sendString("joyz")
        serial.writeLine("joyz")
    }
    if (pins.digitalReadPin(DigitalPin.P7) == 0) {
        radio.sendString("sel")
        serial.writeLine("sel")
    }
    if (pins.digitalReadPin(DigitalPin.P6) == 0) {
        radio.sendString("mde")
        serial.writeLine("mde")
    }
    if (pins.digitalReadPin(DigitalPin.P10) == 0) {
        radio.sendString("dpda")
        serial.writeLine("dpda")
    }
    if (pins.digitalReadPin(DigitalPin.P9) == 0) {
        radio.sendString("dpdb")
        serial.writeLine("dpdb")
    }
    if (pins.digitalReadPin(DigitalPin.P11) == 0) {
        radio.sendString("dpdx")
        serial.writeLine("dpdx")
    }
    if (pins.digitalReadPin(DigitalPin.P8) == 0) {
        radio.sendString("dpdy")
        serial.writeLine("dpdy")
    }
})
