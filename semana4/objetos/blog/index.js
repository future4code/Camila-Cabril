let arrayPost = []

const post = {
    titulo: document.getElementById('titulo-post'),
    conteudo: document.getElementById('conteudo-post'),
    autor: document.getElementById('autor-post'),
    imagem: document.getElementById('imagem-post')
}

function criarPost(e) {
    e.preventDefault()
    if(post.titulo.value !== '' && post.conteudo.value !== '' && post.autor.value !== ''){
        arrayPost.push(post)
        inserirPostHTML()
        exibirImagem()
        limparCampos()
    }else{
        alert('Campos título, autor e conteúdo são obrigatórios!!!')
    }
}


function inserirPostHTML(){
    const container = document.getElementById('container-de-posts')
    container.innerHTML += `
    <div>
    <h1>Título: ${post.titulo.value}</h1>
    <h3>Autor: ${post.autor.value}</h3>
    <p>${post.conteudo.value}</p>
    <img src=${post.imagem.value}>
    </div>
    <hr>
    `
}

function limparCampos(){
    post.titulo.value = ""
    post.conteudo.value = ""
    post.autor.value = ""
    post.imagem.value = ""
}

function exibirImagem() {
    const imagem = post.imagem.value
    if(imagem.includes('.png') || imagem.includes('.jpg')){
        container.innerHTML += `<img src=${imagem}>`
    }
}

