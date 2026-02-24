'use strict'
const main = document.querySelector('main')

const acharCursos = async function() {
    const url = "https://lion-school-phbo.onrender.com/cursos"
    const response = await fetch(url)
    const cursos = await response.json()
    return cursos

}

const acharAlunos = async function(cursoID){
    const url = `https://lion-school-phbo.onrender.com/alunos?curso_id=${cursoID}`
    const response = await fetch(url)
    const alunos = await response.json()
    console.log(alunos)
    return alunos
}

const criarBotoes = async function() {

    const botoes = document.createElement('div')
    botoes.classList.add('botoes')

    const cursos = await acharCursos()
    cursos.forEach(item => {
        
        const botao = document.createElement('button')
        const img = document.createElement('img')
        if(item.sigla == 'DS'){
            img.src = './img/DS.svg'
            botao.textContent = item.sigla
        }else{
            img.src = './img/REDES.svg'
            botao.textContent = item.sigla
        }
        
        img.classList.add('imagem-curso')
        botao.classList.add('b1')
        botao.append(img)
        botoes.append(botao)

        botao.addEventListener('click', async () => {
            main.textContent = ''
            const cursoID = item.id
            acharAlunos(cursoID)
        })

        
    });

    main.appendChild(botoes)

    
}
criarBotoes()

const criarTelaAlunos = async function () {
    
}