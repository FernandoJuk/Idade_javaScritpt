//detectamos um home com 20 anos
function verificar() {
    var img = window.document.getElementById('imagem')
    var foto = window.document.getElementById('foto')
    var ano_input = window.document.getElementById('ano_nasceu')
    var ano_numero_nasceu = Number(ano_nasceu.value) // PEGA O VALOR DO NUMERO DIGITADO

    var sexo_masc = (document.getElementById('masc').checked)
    var sexo_fem = (document.getElementById('fem').checked)

    var resultado = window.document.getElementById('result')
    var ano = new Date()
    var ano_atual = Number(ano.getFullYear())
    var idade = ano_atual - ano_numero_nasceu

    if ((ano_numero_nasceu <= 0) || (ano_numero_nasceu > ano_atual)) {
        resultado.innerHTML = ('Ano inválido !')
    }
    else {
        if (sexo_masc) {
            resultado.innerHTML = (`Detectamos um homen com ${idade} anos.`)
            if (idade > 59) {
                img.src = "idoso250.png"
            }
            else if ((idade <= 59) && (idade >= 18)) {
                img.src = "homen250.png"
            }
            else if ((idade >= 12) && (idade < 18)) {
                img.src = "adolecenteMasculino250.png"
            }
            else {
                img.src = "crianca250.png"
            }

        } else if (sexo_fem) {
            resultado.innerHTML = (`Detectamos uma mulher com ${idade} anos.`)
            if (idade > 59) {
                img.src = "idosa250.png"
            }
            else if ((idade <= 59) && (idade >= 18)) {
                img.src = "mulher250.png"
            }
            else if ((idade >= 12) && (idade < 18)) {
                img.src = "adolecenteFeminina250.png"
            }
            else {
                img.src = "menininha250.png"
            }
        }
        else {
            resultado.innerHTML = ('Favor selecione o sexo !')
        }


    }
}