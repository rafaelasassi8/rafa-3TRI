const url='https://raw.githubusercontent.com/timreis/api/refs/heads/main/rafaela.json'

async function vizualizarInformacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()

    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')
    paragrafo.innerHTML = `No Jayme Canet temos 6 turmas, as maiores turmas tem <span>${dados.Primeiro_A}</span> alunos, da turma 1A e 1B, já o 2A tem <span>${dados.Segundo_A}</span> alunos. Um total de <span>${dados.Segundo_B}</span> alunos será no 2B. Por fim, as duas turmas menores tem <span>${dados.Terceiro_A}</span> e <span>${dados.Terceiro_B}</span> alunos, para o 3A e 3B, respectivamente.`
    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo);
}

vizualizarInformacoesGlobais()