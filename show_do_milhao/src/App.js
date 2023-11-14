import { useEffect, useState } from 'react';
import './App.css';
import Ajuda from './components/Ajuda';
import Alternativa from './components/Alternativa';
import Pergunta from './components/Pergunta';

function App() {

  const [listaDePerguntasFacil, setListaDePerguntasFacil] = useState([
    {
      "pergunta": 'Qual é a capital do Brasil?',
      "alternativas": ['Rio de Janeiro', 'Brasília', 'Bahia', 'São Paulo'],
      "respostaCerta": 'Brasília',
      "perguntaEscolhida": false
    },
    {
      "pergunta": "Qual é o coletivo de cães?",
      "alternativas": ['Matilha', 'Rebanho', 'Alcateia', 'Manada'],
      "respostaCerta": 'Matilha',
      "perguntaEscolhida": false
    },
    {
      "pergunta": "Seguindo a sequência do baralho, qual carta vem depois do dez?",
      "alternativas": ['Rei', 'Valete', 'Nove', 'As'],
      "respostaCerta": 'Valete',
      "perguntaEscolhida": false
    },
    {
      "pergunta": "Qual é o maior planeta do Sistema Solar?",
      "alternativas": ['Terra', 'Jupiter', 'Urano', 'Saturno'],
      "respostaCerta": 'Jupiter',
      "perguntaEscolhida": false
    },
    {
      "pergunta": " Que atleta é o detentor do recorde de medalhas olímpicas?",
      "alternativas": ['Mark Spitz', 'Michael Phelps', 'Usain Bolt', 'Larissa Latynina'],
      "respostaCerta": 'Michael Phelps',
      "perguntaEscolhida": false
    },

  ])
  const [listaDePerguntasMedio, setListaDePerguntasMedio] = useState([
    {
      "pergunta": " Qual bicho transmite Doença de Chagas?",
      "alternativas": ['Abelha', 'Barata', 'Pulga', 'Barbeiro'],
      "respostaCerta": 'Barbeiro',
      "perguntaEscolhida": false
    },
    {
      "pergunta": " Qual o primeiro time brasileiro a pertimitir jogadores negros?",
      "alternativas": ['Santos', 'Vasco', 'Bahia', 'Flamengo'],
      "respostaCerta": 'Vasco',
      "perguntaEscolhida": false
    },
    {
      "pergunta": " Quem compôs o Hino da Independência?",
      "alternativas": ['Dom Pedro I', 'Manuel bandeira', 'Castro Alvez', 'Carlos Gomes'],
      "respostaCerta": 'Dom Pedro I',
      "perguntaEscolhida": false
    },
    {
      "pergunta": " Em que parte do corpo se encontra a epiglote?",
      "alternativas": ['Estômago', 'Pâncreas', 'Rim', 'Boca'],
      "respostaCerta": 'Boca',
      "perguntaEscolhida": false
    },


  ])
  const [listaDePerguntasDificil, setListaDePerguntasDificil] = useState([
    {
      "pergunta": "Qual foi o primeiro país da América a declarar sua independência de uma potência europeia?",
      "alternativas": ['Estados Unidos', 'Brasil', 'Colômbia', 'Argentina'],
      "respostaCerta": 'Estados Unidos',
      "perguntaEscolhida": false
    },
    {
      "pergunta": "Qual era a colônia mais importante do Império Britânico?",
      "alternativas": ['Africa do Sul', 'Índia', 'Estados Unidos', 'Egito'],
      "respostaCerta": 'Índia',
      "perguntaEscolhida": false
    },
    {
      "pergunta": "Qual foi a primeira cidade na história a atingir a marca de um milhão de habitantes?",
      "alternativas": ['Pequim', 'Tóquio', 'Roma', 'Atenas'],
      "respostaCerta": 'Roma',
      "perguntaEscolhida": false
    },
    {
      "pergunta": "Em que ano o homem pisou na lua pela primeira vez?",
      "alternativas": ['1969', '1972', '1965', '1980'],
      "respostaCerta": '1969',
      "perguntaEscolhida": false
    },

  ])
  const [listaDePerguntasMilhao, setListaDePerguntasMilhao] = useState([
    {
      "pergunta": "Em que dia nasceu e em que dia foi registrado o Presidente Lula?",
      "alternativas": ['6 e 27 de outubro', '8 e 27 de outubro', '9 e 26 de outubro', '7 e 23 de outubro'],
      "respostaCerta": '6 e 27 de outubro',
      "perguntaEscolhida": false
    },
    {
      "pergunta": "Em que ano foi realizado o primeiro transplante de órgãos no Brasil?",
      "alternativas": ['1953', '1964', '1988', '1977'],
      "respostaCerta": '1964',
      "perguntaEscolhida": false
    },
    {
      "pergunta": "Qual o país esteve na liderança militar da Minustah, a Missão das Nações Unidas para a Estabilização no Haiti?",
      "alternativas": ['Japão', 'França', 'Estados Unidos', 'Brasil'],
      "respostaCerta": 'Brasil',
      "perguntaEscolhida": false
    },
    {
      "pergunta": "Qual o nome do primeiro samurai estrangeiro da história do Japão?",
      "alternativas": ['Yasuke', 'Hiroshi', 'Akihiro', 'Niels'],
      "respostaCerta": 'Yasuke',
      "perguntaEscolhida": false
    },
  ]) //Carregar as perguntas;

  const [pergunta, setPergunta] = useState(
    {
      'pergunta': '',
      'alternativas': [],
      'respostaCerta': '',
      "perguntaEscolhida": false
    }
  );



  const [perguntaAtual, setPerguntaAtual] = useState(1);
  const [alternativaSelecionada, setAlternativaSelecionada] = useState(null);
  const [alternativaCorreta, setAlternativaCorreta] = useState(false);
  const [nivel, setNivel] = useState(1);
  const [valorAcerto, setValorAcerto] = useState([1000, 1000, 2000, 3000, 5000, 10000, 30000, 50000, 100000, 200000, 1000000]);
  const [index_valor, setIndex_valor] = useState(1)

  let index = 0

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min)
  }

  function aoConfirmar() {
    if (alternativaSelecionada == pergunta.respostaCerta) {
      let novalista = [...listaDePerguntasFacil];
      pergunta.perguntaEscolhida = true;      
      if (nivel == 1) {
        setListaDePerguntasFacil((prevList) => {
          const newList = [...prevList];
          newList[index].perguntaEscolhida = true;
          return newList;
        });
      } else if (nivel == 2) {
        setListaDePerguntasMedio((prevList) => {
          const newList = [...prevList];
          newList[index].perguntaEscolhida = true;
          return newList;
        });
      } else if (nivel == 3) {
        setListaDePerguntasDificil((prevList) => {
          const newList = [...prevList];
          newList[index].perguntaEscolhida = true;
          return newList;
        });
      } else if (nivel == 4) {
        setListaDePerguntasMilhao((prevList) => {
          const newList = [...prevList];
          newList[index].perguntaEscolhida = true;
          return newList;
        });
      } 
      if (perguntaAtual == 3) {
        setPerguntaAtual(1)
        setNivel(nivel + 1)
      }
      else {
        if(nivel == 4){
          setNivel(5)
        }else {
        setPerguntaAtual(perguntaAtual + 1)
      }
      }
      console.log("Parabéns vc acertou!")
      valor_concorrendo();
      console.log(index_valor)
    } else {
      console.log(alternativaSelecionada == pergunta.respostaCerta)
    }

  }

  function aoSelecionar(opcaoSelecionada) {
    console.log(opcaoSelecionada);
    setAlternativaSelecionada(opcaoSelecionada);
    console.log(alternativaCorreta)
  }


  function valor_concorrendo(){
    // let i = 0;
   
    //   if(acertou){
    //     setValorAcertar(valorAcerto[i]);
    //     setValorParar(valorAcerto[i-1]);
    //     setValorErro((valorParar)/2);
    //     setAcertou(false);

    //     i++;
        
    //   }

    setIndex_valor(index_valor + 1)

  }

  function escolhe_pergunta_aletoria() {

    setTimeout(() =>{
    if (nivel == 1) {
      let escolha = getRandomInt(0, listaDePerguntasFacil.length)
      while (listaDePerguntasFacil[escolha].perguntaEscolhida) {
        escolha = getRandomInt(0, listaDePerguntasFacil.length)
      }
      setPergunta(listaDePerguntasFacil[escolha])
    }
    else if (nivel == 2) {
      let escolha = getRandomInt(0, listaDePerguntasMedio.length)
      while (listaDePerguntasMedio[escolha].perguntaEscolhida) {
        escolha = getRandomInt(0, listaDePerguntasMedio.length)
      }
      setPergunta(listaDePerguntasMedio[escolha])
    }
    else if (nivel == 3) {
      let escolha = getRandomInt(0, listaDePerguntasDificil.length)
      while (listaDePerguntasDificil[escolha].perguntaEscolhida) {
        escolha = getRandomInt(0, listaDePerguntasDificil.length)
      }
      setPergunta(listaDePerguntasDificil[escolha])
    }
    else if (nivel == 4) {
      let escolha = getRandomInt(0, listaDePerguntasMilhao.length)
      while (listaDePerguntasMilhao[escolha].perguntaEscolhida) {
        escolha = getRandomInt(0, listaDePerguntasMilhao.length)
      }
      setPergunta(listaDePerguntasMilhao[escolha])

    }
    else if (nivel == 5){
        console.log("weeeeeeeee")
    }
  },2000);
  }

  useEffect(() => {
    escolhe_pergunta_aletoria();
  }, [listaDePerguntasFacil]);
  useEffect(() => {
    escolhe_pergunta_aletoria();
  }, [listaDePerguntasMedio]);
  useEffect(() => {
    escolhe_pergunta_aletoria();
  }, [listaDePerguntasDificil]);
  useEffect(() => {
    escolhe_pergunta_aletoria();
  }, [listaDePerguntasMilhao]);
  
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
            valorErro= {(valorAcerto[index_valor - 1] / 2)}
            valorParar={valorAcerto[index_valor - 1]}
            valorAcertar={valorAcerto[index_valor]}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
