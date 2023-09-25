const prova = {
    aluno: "João",
    materia: "Português",
    valor: 10,
    questoes: [
        {
            resposta: "a",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        },
        {
            resposta: "e",
            correta: "b"
        },
        {
            resposta: "b",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        }
    ]
};

let acertos = 0;

function corrigirProva(prova) {
    for (let questao of prova.questoes) {
        if (questao.resposta === questao.correta) {
            acertos++;
        }
    }
    return console.log(`O aluno(a) ${prova.aluno} acertou ${acertos} questões e obteve nota ${(acertos / prova.questoes.length) * prova.valor}`)
}

const provacorrigida = corrigirProva(prova);
console.log(provacorrigida);