function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("inascimento")
    
    if (fano.value.length == 0 || fano.value > ano) {
        alert("[ERRO] Verifique os dados e tente novamente!")
        return
    }

    var rsex = document.getElementsByName("radsex")
    var idade = ano - Number(fano.value)

    var genero = ''
    var imagem = document.getElementById("img")

    if (rsex[0].checked) {
        genero = 'Homem'

        if (idade <= 12) {
            imagem.style.display = "block"
            imagem.style.background = "url(imagens/criança-m.jpg) center left no-repeat"
            imagem.style.backgroundSize = "cover"

        } else if (idade > 12 && idade < 50) {
            imagem.style.display = "block"
            imagem.style.background = "url(imagens/jovem-m.jpg) center center no-repeat"
            imagem.style.backgroundSize = "cover"

        } else {
            imagem.style.display = "block"
            imagem.style.background = "url(imagens/idoso.jpg) center center no-repeat"
            imagem.style.backgroundSize = "cover"
        }

    } else {
        genero = 'Mulher'

        if (idade <= 12) {
            imagem.style.display = "block"
            imagem.style.background = "url(imagens/criança-f.jpg) center center no-repeat"
            imagem.style.backgroundSize = "cover"

        } else if (idade > 12 && idade < 50) {
            imagem.style.display = "block"
            imagem.style.background = "url(imagens/jovem-f.jpg) center center no-repeat"
            imagem.style.backgroundSize = "cover"

        } else {
            imagem.style.display = "block"
            imagem.style.background = "url(imagens/idosa.jpg) center center no-repeat"
            imagem.style.backgroundSize = "cover"
        }
    }

    document.getElementById("iniciar").innerText = `Você tem ${idade} anos e é ${genero}.`
}