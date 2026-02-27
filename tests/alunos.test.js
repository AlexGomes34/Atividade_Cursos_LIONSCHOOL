//Requisição das funções que serão testadas
const alunos = require('../scripts/alunos')

//Função que busca os dados dos alunos baseado no ID do curso fornecido
test('A função recebe um ID e deve devolver um array que tem todos os alunos de tal curso',async () => {
    const result = await alunos.acharAlunos(1);

    expect(Array.isArray(result)).toBe(true);
})
