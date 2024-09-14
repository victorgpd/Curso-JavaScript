function contar() {
    var inicio = document.getElementById("inicio")
    var fim = document.getElementById("ifim")
    var passo = document.getElementById("ipasso")
    var result = document.getElementById("res")

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 || passo.value <= 0) {
        result.innerText = 'Impossível contar!'
        return
    }

    result.innerText = "Contando:"

    if (inicio.value < fim.value) {
        for (var c = Number(inicio.value); c <= Number(fim.value); c += Number(passo.value)) {
            if (c == fim.value) {
                result.innerText += ` ${c}\u{1f3c1}`
            } else {
                result.innerText += ` ${c}\u{1f449}`
            }
        }
    } else {
        for (var c = Number(inicio.value); c >= Number(fim.value); c -= Number(passo.value)) {
            if (c == fim.value) {
                result.innerText += ` ${c}\u{1f3c1}`
            } else {
                result.innerText += ` ${c}\u{1f449}`
            }
        }
    }
}