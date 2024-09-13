function carregar() {
    var msg = document.querySelector("#mensagem")
    var img = document.getElementById("foto")
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora < 12) {
        img.style.background = "url(imagens/foto-manhã.jpg) center center no-repeat"
        img.style.backgroundSize = "cover"
        document.body.style.backgroundColor = '#e2cd9f'

    } else if (hora >= 12 && hora < 18) {
        img.style.background = "url(imagens/foto-tarde.jpg) center center no-repeat"
        img.style.backgroundSize = "cover"
        document.body.style.backgroundColor = '#b9846f'

    } else if (hora >= 18) {
        img.style.background = "url(imagens/foto-noite.jpg) center center no-repeat"
        img.style.backgroundSize = "cover"
        document.body.style.backgroundColor = '#13131F'
    }
}