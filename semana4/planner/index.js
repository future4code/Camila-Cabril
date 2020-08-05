function criarTarefa() {
    const tarefa = document.getElementById('tarefa')
    let valorTarefa = tarefa.value

    const diaDaSemana = document.getElementById('dias-semana')
    let valorDiaDaSemana = diaDaSemana.value

    if(valorTarefa !== ''){
        if(valorDiaDaSemana === 'domingo'){
            const domingo = document.getElementById('domingo')
            domingo.innerHTML += `<li>${valorTarefa}</li>`
            tarefa.value = ''

        }else if(valorDiaDaSemana === 'segunda'){
            const segunda = document.getElementById('segunda')
            segunda.innerHTML += `<li>${valorTarefa}</li>`
            tarefa.value = ''

        }else if(valorDiaDaSemana === 'terca'){
            const terca = document.getElementById('terca')
            terca.innerHTML += `<li>${valorTarefa}</li>`
            tarefa.value = ''

        }else if(valorDiaDaSemana === 'quarta'){
            const quarta = document.getElementById('quarta')
            quarta.innerHTML += `<li>${valorTarefa}</li>`
            tarefa.value = ''

        }else if(valorDiaDaSemana === 'quinta'){
            const quinta = document.getElementById('quinta')
            quinta.innerHTML += `<li>${valorTarefa}</li>`
            tarefa.value = ''

        }else if(valorDiaDaSemana === 'sexta'){
            const sexta = document.getElementById('sexta')
            sexta.innerHTML += `<li>${valorTarefa}</li>`
            tarefa.value = ''

        }else if(valorDiaDaSemana === 'sabado'){
            const sabado = document.getElementById('sabado')
            sabado.innerHTML += `<li>${valorTarefa}</li>`
            tarefa.value = ''
        }
    }else{
        alert('Por favor preencha uma nova tarefa!')
    }

    
}