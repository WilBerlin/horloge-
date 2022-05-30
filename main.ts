let index = 0
let liste: number[] = []
let diviseur = 0
let reste = 0
let divsion = 0
let x = 0
basic.forever(function () {
    index = 0
    for (let index2 = 0; index2 < 60; index2++) {
        let list: number[] = []
        liste = [0]
        diviseur = 32
        reste = index
        for (let index2 = 0; index2 < 5; index2++) {
            divsion = Math.floor(reste / diviseur)
            reste = reste - diviseur * divsion
            list.unshift(divsion)
            if (reste >= 1) {
                diviseur = diviseur / 2
            }
        }
        x = 0
        for (let valeur of list) {
            if (valeur == 1) {
                led.plot(x, 0)
            } else {
                led.unplot(x, 0)
            }
            x += 1
        }
        basic.pause(100)
        basic.clearScreen()
        index += 1
    }
})
