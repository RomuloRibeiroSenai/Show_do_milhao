import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import certeza02 from './assets/sons/certeza02.mp3';
import certo from './assets/sons/certo.mp3';
import Ajuda from './components/Ajuda';
import Alternativa from './components/Alternativa';
import Modal from './components/Modal';
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
      'pergunta': 'carregando...',
      'alternativas': ['carregando...'],
      'respostaCerta': '',
      "perguntaEscolhida": false
    }
  );



  const [perguntaAtual, setPerguntaAtual] = useState(1);
  const [alternativaSelecionada, setAlternativaSelecionada] = useState(null);
  const [alternativaCorreta, setAlternativaCorreta] = useState();
  const [nivel, setNivel] = useState(1);
  const [valorAcerto, setValorAcerto] = useState([1000, 1000, 2000, 3000, 5000, 10000, 30000, 50000, 100000, 200000, 1000000]);
  const [index_valor, setIndex_valor] = useState(1);
  const [elimina2, setElimina2] = useState(false);
  const navigate = useNavigate();
  const [mostrarModal, setMostrarModal] = useState(false);
  const audio = useRef(null);
  const audio2 = useRef(null);

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
        if (nivel == 4) {
          setNivel(5)
        } else {
          setPerguntaAtual(perguntaAtual + 1)
        }
      }
      console.log("Parabéns vc acertou!")

      valor_concorrendo();
      reproduzirAudio(audio2);
      console.log(index_valor)
    } else {

      setTimeout(() => {
        console.log('errooou');
        navigate('/derrota')

      }, 2000);


    }

    setAlternativaCorreta(pergunta.respostaCerta);

  }

  function aoSelecionar(opcaoSelecionada) {
    console.log(opcaoSelecionada);
    setAlternativaSelecionada(opcaoSelecionada);
    reproduzirAudio(audio);

    console.log(alternativaCorreta)
  }


  function valor_concorrendo() {

    setIndex_valor(index_valor + 1)

  }

  function escolhe_pergunta_aletoria() {

    setTimeout(() => {
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
        let escolha = getRandomInt(0, listaDePerguntasMilhao.length);
        while (listaDePerguntasMilhao[escolha].perguntaEscolhida) {
          escolha = getRandomInt(0, listaDePerguntasMilhao.length);
        }
        setPergunta(listaDePerguntasMilhao[escolha]);
      }
      else if (nivel == 5) {
        //navigate("/vitoria")
        console.log("weeeeeeeee")
      }
      setMostrarModal(true);

    }, 2000);
  }
  const [pular, setPular] = useState(false);



  function reproduzirAudio(musica) {
    if (musica.current) {
      musica.current.play();
    }

  }

  function fecharModal() {
    setMostrarModal(false);
  }

  function eliminarDuasAlternativas() {
    const alternativasIncorretas = pergunta.alternativas.filter(alternativa => alternativa !== pergunta.respostaCerta);
    const duasAlternativasEliminadas = alternativasIncorretas.slice(0, 2);
    const novasAlternativas = pergunta.alternativas.filter(alternativa => duasAlternativasEliminadas.indexOf(alternativa) === -1);
    setPergunta(prevPergunta => ({ ...prevPergunta, alternativas: novasAlternativas }));
  }

  function randerizaAlternativa() {
    //   // criar um state global de array que vai levar as alternativas filtradas.
    //   // criar um devio condicional que vai olhar para o state elimina2 (true ou falso)
    //   // se true, ou seja, para eliminar 2 alternativas criar um algoritmo que jogue para dentro do state de array 
    //   // 2 alternativas, sendo 1 correta
    //   // se false jogar para dentro deste array as 4 alternativas

    //   if(duas){
    //     let nova_pergunta = []
    //     let nova_alternativa = 0
    //     for (i = 0; i < pergunta.alternativas.length ; i++){
    //       if (pergunta.alternativas[i] == pergunta.respostaCerta){
    //         pergunta.alternativas[i] = nova_pergunta[0];
    //         nova_alternativa++;
    //         pergunta.alternativas[4] = nova_pergunta[1]
    //       }
    //     }
    //     let nova = {
    //       "pergunta": pergunta.pergunta,
    //       'alternativas': nova_pergunta,
    //       'respostaCerta': nova_pergunta[0],
    //       "perguntaEscolhida": false
    //     }
    //     setPerguntaAtual(nova)
    return (
      <>

        {pergunta.alternativas.map((alternativa, index) => (
          <Alternativa alternativa={alternativa}
            index={index}
            onClick={aoSelecionar}
            alternativaSelecionada={alternativaSelecionada}
            alternativaCorreta={alternativaCorreta} />
        ))}
      </>
    );
  }

  function pulou() {
    setPular(true)
    console.log(pular)
  }

  useEffect(() => {
    randerizaAlternativa()
  }, [elimina2]);

  useEffect(() => {
    escolhe_pergunta_aletoria(nivel, perguntaAtual);
  }, [listaDePerguntasFacil, listaDePerguntasMedio, listaDePerguntasDificil, listaDePerguntasMilhao, pular]);

  return (
    <div className='container'>
      <div className='pergunta'>
        <Pergunta pergunta={pergunta.pergunta} />
      </div>


      <div className='resposta'>
        <div className='opcoes'>

          {randerizaAlternativa()}
          <audio ref={audio} src={certeza02} type='audio/mp3'></audio>
          <div className='bt_confirmar'>
            <button onClick={aoConfirmar}>Confirmar</button>
            <audio ref={audio2} src={certo} type='audio/mp3'></audio>
          </div>
        </div>

        <div className='ajuda'>
          <Ajuda
            valorErro={(valorAcerto[index_valor - 1] / 2)}
            valorParar={valorAcerto[index_valor - 1]}
            valorAcertar={valorAcerto[index_valor]}
            pulou={pulou}
            duas={eliminarDuasAlternativas}
          />
        </div>
      </div>
      {mostrarModal && (
        <Modal fechar={fecharModal} />

      )}
    </div>
  );

}


export default App;



