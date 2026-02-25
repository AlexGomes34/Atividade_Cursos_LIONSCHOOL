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
    return alunos
}

const acharAlunoSozinho = async function(alunoID){
    const url = `https://lion-school-phbo.onrender.com/alunos/${alunoID}`
    const response = await fetch(url)
    const aluno = await response.json()
    console.log(aluno)
    return aluno
}

const criarTela1 = async function() {

    const computador = document.createElement('div')
    const cursoTexto = document.createElement('h1');
    const texto1 = document.createTextNode('Escolha um ');
    const span = document.createElement('span');
    span.textContent = 'curso';
    const br = document.createElement('br');
    const texto2 = document.createTextNode(' para gerenciar');
    cursoTexto.appendChild(texto1);
    cursoTexto.appendChild(span);
    cursoTexto.appendChild(br);
    cursoTexto.appendChild(texto2);

    const compImg = document.createElement('img')
    compImg.src = './img/devices.svg'
    const estudante = document.createElement('img')
    estudante.src = './img/studant.svg'

    computador.classList.add('computador')
    compImg.classList.add('comp')
    estudante.classList.add('estuda')

    main.append(computador, estudante)
    computador.append(cursoTexto, compImg)

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
            criarTelaAlunos(cursoID)
        })

        
    });

    main.appendChild(botoes)

    
}
criarTela1()

const criarTelaAlunos = async function (cursoID) {
    
    const container = document.createElement('div')
    const cursoNome = document.createElement('div')
    const nomeCurso = document.createElement('h1')
    const todosAlunos = document.createElement('div')

    container.classList.add('container')
    cursoNome.classList.add('cursoNome')
    nomeCurso.classList.add('nomeCurso')
    todosAlunos.classList.add('todosAlunos')

    main.appendChild(container)
    container.append(cursoNome, todosAlunos)

    if (cursoID === 1) {
        nomeCurso.textContent = 'Desenvolvimento de Sistemas'
    } else if (cursoID === 2) {
        nomeCurso.textContent = 'Redes'
    }

    const alunos = await acharAlunos(cursoID)
    alunos.forEach(item => {
        const aluno = document.createElement('div')
        const fotoAluno = document.createElement('img')
        const nomeAluno = document.createElement('h1')
        aluno.classList.add('alunos')
        fotoAluno.classList.add('foto1')
        nomeAluno.classList.add('nomeAluno')

        nomeAluno.textContent = item.nome
        fotoAluno.src = item.foto

        todosAlunos.appendChild(aluno)
        aluno.append(fotoAluno, nomeAluno)

        aluno.addEventListener('click', async () => {
        main.textContent = ''
        const alunoID = item.id
        acharAlunoSozinho(alunoID)
        criarTelaAlunoSozinho(alunoID)
    })

    })
    
   
}

const criarTelaAlunoSozinho = async function() {

}