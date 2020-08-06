
let arrayDespesas = []
let cadastrarDespesa = () => {
    const despesas = {
        valor: document.getElementById('valor'),
        tipo: document.getElementById('tipo'),
        descricao: document.getElementById('descricao')
    }
    arrayDespesas.push(despesas)

    const extrato = document.getElementById('extrato')
        extrato.innerHTML += `
        Valor: ${despesas.valor.value}
        tipo: ${despesas.tipo.value},
        descricao: ${despesas.descricao.value}
        `
}





