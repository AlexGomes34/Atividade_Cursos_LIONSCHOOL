//Requisição das funções que serão testadas
const funcTest = require('../scripts/cursos.js')

//Função que busca os dados dos cursos
test('recebe ao iniciar a função um array com os dois cursos disponiveis',async () => {
  const result = await funcTest.acharCursos();
    expect(Array.isArray(result)).toBe(true);
  });