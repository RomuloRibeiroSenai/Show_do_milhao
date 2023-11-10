import { useState } from 'react';
import './App.css';
import Ajuda from './components/Ajuda';
import Alternativa from './components/Alternativa';
import Pergunta from './components/Pergunta';

function App() {

  let listaDePerguntasFacil = [
    {
      "pergunta": 'Qual é a capital do Brasil?',
      "alternativas": ['Rio de Janeiro', 'Brasília', 'Bahia', 'São Paulo'],
      "respostaCerta": 'Brasília',
    },
    {
      "pergunta" : "Qual é o coletivo de cães?",
      "alternativas" : ['Matilha', 'Rebanho', 'Alcateia', 'Manada'],
      "respostaCerta" : 'Matilha',
    },
    {
      "pergunta" : "Seguindo a sequência do baralho, qual carta vem depois do dez?",
      "alternativas" : ['Rei', 'Valete', 'Nove', 'As'],
      "respostaCerta" : 'Valete',
    },
    {
      "pergunta" : "Qual é o maior planeta do Sistema Solar?",
      "alternativas" : ['Terra', 'Jupiter', 'Urano', 'Saturno'],
      "respostaCerta" : 'Jupiter',
    },
    {
      "pergunta" : " Que atleta é o detentor do recorde de medalhas olímpicas?",
      "alternativas" : ['Mark Spitz', 'Michael Phelps', 'Usain Bolt', 'Larissa Latynina'],
      "respostaCerta" : 'Michael Phelps',
    },
   
  ]
    let listaDePerguntasMedio =[
    {
      "pergunta" : " Qual bicho transmite Doença de Chagas?",
      "alternativas" : ['Abelha', 'Barata', 'Pulga', 'Barbeiro'],
      "respostaCerta" : 'Barbeiro',
    },
    {
      "pergunta" : " Qual o primeiro time brasileiro a pertimitir jogadores negros?",
      "alternativas" : ['Santos', 'Vasco', 'Bahia', 'Flamengo'],
      "respostaCerta" : 'Vasco',
    },
    {
      "pergunta" : " Quem compôs o Hino da Independência?",
      "alternativas" : ['Dom Pedro I', 'Manuel bandeira', 'Castro Alvez', 'Carlos Gomes'],
      "respostaCerta" : 'Dom Pedro I',
    },
    {
      "pergunta" : " Em que parte do corpo se encontra a epiglote?",
      "alternativas" : ['Estômago', 'Pâncreas', 'Rim', 'Boca'],
      "respostaCerta" : 'Boca',
    },
    

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
