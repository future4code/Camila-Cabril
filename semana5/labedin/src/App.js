import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://avatars2.githubusercontent.com/u/39967101?s=400&u=8e65c9cf2d671f355744768b5e429e030836cf86&v=4"
          nome="Carolina Cabril" 
          descricao="Oi, eu sou a Carolina. Sou estudante e atualmente estou aperfeiçoando meus conhecimentos em programção para entrar no mercado de trabalho."
        />
        
        <ImagemButton
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <CardPequeno
          imagem="https://i.pinimg.com/originals/2b/b4/28/2bb428b7e4aa39078a119deccacae6f3.png"
          endereco="carolina@email.com"
        />
        <CardPequeno 
          imagem="https://image.flaticon.com/icons/png/512/1239/1239525.png"
          endereco="Rua dos bobos Nº 0"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://png.pngtree.com/png-vector/20191021/ourmid/pngtree-scales-of-justice-icon-simple-style-png-image_1837209.jpg" 
          nome="Melillo Luciano Advogados Associados" 
          descricao="Auxiliar Jurídico durante 6 anos."
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-linkedin-circle-512.png" 
          texto="Linkedin" 
        />        

        <ImagemButton 
          imagem="https://i.pinimg.com/originals/b1/5e/ed/b15eedbdafbbdbca3249e3942f4faf3b.png" 
          texto="Github" 
        />    

      </div>
    </div>
  );
}

export default App;
