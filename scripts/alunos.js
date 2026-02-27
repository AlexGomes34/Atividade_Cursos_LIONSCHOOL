const acharAlunos = async function(cursoID){
    const url = `https://lion-school-backend.onrender.com/alunos?curso_id=${cursoID}`
    const response = await fetch(url)
    const alunos = await response.json()
    return alunos
}

module.exports = {
    acharAlunos
}