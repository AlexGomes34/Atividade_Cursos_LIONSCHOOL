const acharCursos = async function() {
    const url = "https://lion-school-backend.onrender.com/cursos"
    const response = await fetch(url)
    const cursos = await response.json()
    return cursos

}

module.exports = {
    acharCursos
}