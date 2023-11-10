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
    },
    {
      "pergunta" : "Qual é o coletivo de cães?",
      "alternativas" : ['Matilha', 'Rebanho', 'Alcateia', 'Manada'],
      "respostaCerta" : 'Matilha',
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
  const [alternativaCorreta, setAlternativaCorreta] = useState(false);
  


  function aoConfirmar() {
    if (alternativaSelecionada == pergunta.respostaCerta) {
      
      console.log("Parabéns vc acertou!")
    } else {
      console.log(alternativaSelecionada == pergunta.respostaCerta)
    }

    setAlternativaCorreta(pergunta.respostaCerta);
  }

  function aoSelecionar(opcaoSelecionada) {
    console.log(opcaoSelecionada);
    setAlternativaSelecionada(opcaoSelecionada);
    console.log(alternativaCorreta)
  }


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
              alternativaCorreta={alternativaCorreta} />
          ))}
          <div className='bt_confirmar'>
          <button onClick={aoConfirmar}>Confirmar</button>
          </div>
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
