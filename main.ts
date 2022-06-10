input.onPinPressed(TouchPin.P0, function () {
    if (Mode == 0) {
        music.playTone(262, music.beat(BeatFraction.Whole))
    } else if (Mode == 1) {
        music.playTone(330, music.beat(BeatFraction.Whole))
    } else {
        music.playTone(392, music.beat(BeatFraction.Whole))
    }
})
input.onButtonPressed(Button.A, function () {
    Mode += 1
    if (Mode == 3) {
        Mode = 0
    }
})
input.onPinPressed(TouchPin.P2, function () {
	
})
input.onPinPressed(TouchPin.P1, function () {
	
})
let Mode = 0
Mode = 0
