'use strict'
const main = document.getElementById('main')

const acharCursos = async function() {
    const url = "https://lion-school-phbo.onrender.com/cursos"
    const response = await fetch(url)
    const cursos = await response.json()
    return cursos

}

const criarBotoes = async function() {

    const botoes = document.createElement('div')
    botoes.classList.add('botoes')

    const cursos = await acharCursos()
    cursos.forEach(item => {
        
        const botao = document.createElement('button')

        botao.classList.add('b1')
        
        botao.textContent = cursos.sigla
        botoes.appendChild(botao)

        
    });

    main.appendChild(botoes)

    
}
criarBotoes()