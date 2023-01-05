let カウンター = 0
basic.forever(function () {
    カウンター = 0
    for (let index = 0; index < 5; index++) {
        led.plot(カウンター, 2)
        basic.pause(1000)
        led.unplot(カウンター, 2)
        カウンター += 1
    }
})
