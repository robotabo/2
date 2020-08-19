function 輸動畫 () {
    for (let index = 0; index < 2; index++) {
        basic.showIcon(IconNames.Angry)
        basic.pause(100)
        basic.showIcon(IconNames.Sad)
        basic.pause(100)
    }
}
function 平手動畫 () {
    for (let index = 0; index < 2; index++) {
        basic.showIcon(IconNames.Surprised)
        basic.pause(100)
        basic.showIcon(IconNames.Asleep)
        basic.pause(100)
    }
}
radio.onReceivedNumberDeprecated(function (receivedNumber) {
    if (確認配對) {
        let 收到手勢 = 0
        手勢比對 = 手勢 * 10 + 收到手勢
        if (手勢比對 == 1 || (手勢比對 == 12 || 手勢比對 == 20)) {
            贏動畫()
        } else if (手勢比對 == 2 || (手勢比對 == 10 || 手勢比對 == 21)) {
            輸動畫()
        } else {
            平手動畫()
        }
    } else {
        radio.setGroup(群組頻道)
    }
})
function 贏動畫 () {
    for (let index = 0; index < 2; index++) {
        basic.showIcon(IconNames.Heart)
        basic.pause(100)
        basic.showIcon(IconNames.Happy)
        basic.pause(100)
    }
}
input.onButtonPressed(Button.A, function () {
    if (確認配對) {
        手勢 += 1
        手勢 = 手勢 % 3
        手勢圖案()
    } else {
        群組頻道 = 群組頻道 + 1
    }
})
input.onGesture(Gesture.Shake, function () {
    if (確認配對) {
        手勢圖案()
        basic.pause(300)
        basic.clearScreen()
        radio.sendNumber(手勢)
    }
})
input.onButtonPressed(Button.AB, function () {
    確認配對 += 1
    確認配對 = 確認配對 % 2
    if (確認配對) {
        basic.clearScreen()
        basic.showString("GO!")
    } else {
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.B, function () {
    if (確認配對) {
        basic.clearScreen()
    } else {
        群組頻道 = Math.abs(群組頻道 - 1)
    }
})
function 手勢圖案 () {
    if (手勢 == 0) {
        basic.showIcon(IconNames.Square)
    } else if (手勢 == 1) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
    }
}
let 手勢 = 0
let 手勢比對 = 0
let 群組頻道 = 0
let 確認配對 = 0
確認配對 = 0
群組頻道 = 9
basic.forever(function () {
    if (確認配對) {
    	
    } else {
        basic.showNumber(群組頻道)
        radio.setGroup(群組頻道)
    }
})
