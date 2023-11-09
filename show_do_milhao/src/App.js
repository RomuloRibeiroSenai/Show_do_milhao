import { useState } from 'react';
import './App.css';
import Ajuda from './components/Ajuda';
import Alternativa from './components/Alternativa';
import Pergunta from './components/Pergunta';

function App() {

  let listaDePerguntas = [
    {
      "pergunta": 'Qual é a capital do Brasil?',
      "alternativas": ['Rio de Janeiro', 'Brasília', 'Bahia', 'São Paulo'],
      "respostaCerta": 'Brasília',
    }
  ] //Carregar as perguntas;
  const [pergunta, setPergunta] = useState(
    {
      'pergunta': 'Qual é a capital do Brasil?',
      'alternativas': ['Rio de Janeiro', 'Brasília', 'Bahia', 'São Paulo'],
      'respostaCerta': 'Brasília'
    }
  );

  const [perguntaAtual, setPerguntaAtual] = useState(0);
  const [alternativaSelecionada, setAlternativaSelecionada] = useState(null);
  const [indexSelecionado, setIndexSelecionado] = useState(null);
  const [alternativaCorreta, setAlternativaCorreta] = useState(null);


  function aoConfirmar() {
    if (alternativaSelecionada == pergunta.respostaCerta) {
      setAlternativaCorreta(true);
      console.log("Parabéns vc acertou!")
    } else {
      console.log(alternativaSelecionada == pergunta.respostaCerta)
    }
  }

  //teste

  function aoSelecionar(opcaoSelecionada) {
    console.log(opcaoSelecionada);
    setAlternativaSelecionada(opcaoSelecionada);
  }

  // const i = [1, 2, 3, 4].sort(() => Math.random() - 0.5);
  // const j = [0, 1, 2].sort(() => Math.random() - 0.5);
  // let certa = pergunta_facil[j[1]][1];
  // console.log(certa)

  return (
    <div className='container'>

      <div className='pergunta'>

        <Pergunta pergunta={pergunta.pergunta} />
      </div>


      <div className='resposta'>
        <div className='opcoes'>
          {pergunta.alternativas.map((alternativa, index) => (
            <Alternativa alternativa={alternativa}
              index={index}
              onClick={aoSelecionar}
              alternativaSelecionada={alternativaSelecionada}
              alternativaCerta={alternativaCorreta} />
          ))}

          <button onClick={aoConfirmar}>Confirmar</button>
        </div>

        <div className='ajuda'>
          <Ajuda
            valorErro='500'
            valorParar='1000'
            valorAcertar='2000'
          />
        </div>
      </div>

    </div>
  );
}

export default App;
