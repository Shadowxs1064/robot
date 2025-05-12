radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        bitbot.go(BBDirection.Forward, 100)
    } else if (receivedNumber == 2) {
        bitbot.go(BBDirection.Reverse, 100)
    } else if (receivedNumber == 3) {
        bitbot.rotate(BBRobotDirection.Left, 100)
    } else if (receivedNumber == 4) {
        bitbot.rotate(BBRobotDirection.Right, 100)
    } else if (receivedNumber == 0) {
        bitbot.stop(BBStopMode.Brake)
    } else if (receivedNumber == 5) {
        bitbot.go(BBDirection.Forward, 100)
        bitbot.rotate(BBRobotDirection.Left, 50)
    } else if (receivedNumber == 6) {
        bitbot.go(BBDirection.Forward, 100)
        bitbot.rotate(BBRobotDirection.Right, 50)
    } else if (receivedNumber == 7) {
        bitbot.go(BBDirection.Reverse, 100)
        bitbot.rotate(BBRobotDirection.Left, 50)
    } else if (receivedNumber == 8) {
        bitbot.go(BBDirection.Reverse, 100)
        bitbot.rotate(BBRobotDirection.Right, 50)
    } else if (receivedNumber == 9) {
        bitbot.ledRainbow(true, BBArms.Both)
        basic.pause(500)
        bitbot.ledClear()
        basic.pause(500)
        bitbot.ledRainbow(true, BBArms.Both)
        basic.pause(500)
        bitbot.ledClear()
    } else {
        bitbot.ledClear()
    }
})
radio.setGroup(1)
basic.forever(function () {
    basic.showIcon(IconNames.Duck)
    bitbot.ledRainbow(true, BBArms.Both)
})
