import { useEffect, useState } from 'react';
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
    

    ]
    let listaDePerguntasDificil = [
      {
        "pergunta" : "Qual foi o primeiro país da América a declarar sua independência de uma potência europeia?",
        "alternativas" : ['Estados Unidos', 'Brasil', 'Colômbia', 'Argentina'],
        "respostaCerta" : 'Estados Unidos',
      },
      {
        "pergunta" : "Qual era a colônia mais importante do Império Britânico?",
        "alternativas" : ['Africa do Sul', 'Índia', 'Estados Unidos', 'Egito'],
        "respostaCerta" : 'Índia',
      },
      {
        "pergunta" : "Qual foi a primeira cidade na história a atingir a marca de um milhão de habitantes?",
        "alternativas" : ['Pequim', 'Tóquio', 'Roma', 'Atenas'],
        "respostaCerta" : 'Roma',
      },
      {
        "pergunta" : "Qual foi a primeira cidade na história a atingir a marca de um milhão de habitantes?",
        "alternativas" : ['Pequim', 'Tóquio', 'Roma', 'Atenas'],
        "respostaCerta" : 'Roma',
      },
      {
        "pergunta" : "Em que ano o homem pisou na lua pela primeira vez?",
        "alternativas" : ['1969', '1972', '1965', '1980'],
        "respostaCerta" : '1969',
      },
      
      ]
      let listaDePerguntasMilhao = [
      {
        "pergunta" : "Em que dia nasceu e em que dia foi registrado o Presidente Lula?",
        "alternativas" : ['6 e 27 de outubro', '8 e 27 de outubro', '9 e 26 de outubro', '7 e 23 de outubro'],
        "respostaCerta" : '6 e 27 de outubro',
      },
      {
        "pergunta" : "Em que ano foi realizado o primeiro transplante de órgãos no Brasil?",
        "alternativas" : ['1953', '1964', '1988', '1977'],
        "respostaCerta" : '1964',
      },
      {
        "pergunta" : "Qual o país esteve na liderança militar da Minustah, a Missão das Nações Unidas para a Estabilização no Haiti?",
        "alternativas" : ['Japão', 'França', 'Estados Unidos', 'Brasil'],
        "respostaCerta" : 'Brasil',
      },
      {
        "pergunta" : "Qual o nome do primeiro samurai estrangeiro da história do Japão?",
        "alternativas" : ['Yasuke', 'Hiroshi', 'Akihiro', 'Niels'],
        "respostaCerta" : 'Yasuke',
      },
      ] //Carregar as perguntas;
      "perguntaEscolhida": true,
    },
    
  ] //Carregar as perguntas;
  const [pergunta, setPergunta] = useState(
    {
      'pergunta': 'Qual é a capital do Brasil?',
      'alternativas': ['Rio de Janeiro', 'Brasília', 'Bahia', 'São Paulo'],
      'respostaCerta': 'Brasília',
      "perguntaEscolhida": false,
    }
  );



  const [perguntaAtual, setPerguntaAtual] = useState(0);
  const [alternativaSelecionada, setAlternativaSelecionada] = useState(null);
  const [indexSelecionado, setIndexSelecionado] = useState(null);
  const [alternativaCorreta, setAlternativaCorreta] = useState(false);
  
  
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min)
  }
  
  function aoConfirmar() {
    if (alternativaSelecionada == pergunta.respostaCerta) {
      pergunta.perguntaEscolhida = true;
      listaDePerguntas[index].perguntaEscolhida = pergunta.perguntaEscolhida
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

  //teste
  
  useEffect(() => {
    let escolha = getRandomInt(0,listaDePerguntas.length)
    console.log(listaDePerguntas.length)
    while(listaDePerguntas[escolha].perguntaEscolhida){
       escolha = getRandomInt(0,listaDePerguntas.length)
    }
    setPergunta(listaDePerguntas[escolha])
    let index = escolha
  
  },[]);
  
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
