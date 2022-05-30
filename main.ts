let list: number[] = []
let diviseur = 0
let reste = 0
let index = 0
let divsion = 0
let list2: number[] = []
let x = 0
function ConvertirBinaire (num: number) {
    list = [0]
    diviseur = 16
    reste = index
    for (let index2 = 0; index2 < 5; index2++) {
        divsion = Math.floor(reste / diviseur)
        reste = reste - diviseur * divsion
        list.unshift(divsion)
        if (reste >= 1) {
            diviseur = diviseur / 2
        }
    }
    return list
}
basic.forever(function () {
    index = 0
    for (let index2 = 0; index2 < 16; index2++) {
        list2 = ConvertirBinaire(index)
        x = 0
        for (let valeur of list2) {
            if (valeur == 1) {
                led.plot(x, 0)
            } else {
                led.unplot(x, 0)
            }
            x += 1
        }
        basic.pause(200)
        basic.clearScreen()
        index += 1
    }
})
