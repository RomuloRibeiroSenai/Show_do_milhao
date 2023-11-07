import Pergunta from './components/Pergunta';
import Resposta from './components/Resposta';
import Ajuda from './components/Ajuda';
import './App.css';

function App() {

  const pergunta_facil = [
    ["pergunta", "resposta_certa", "resposta_errada1", "resposta_errada2", "resposta_errada3"],
    ["pergunta2", "resposta_certa2", "resposta_errada12", "resposta_errada22", "resposta_errada32"],
    ["pergunta3", "resposta_certa3", "resposta_errada13", "resposta_errada23", "resposta_errada33"]
  ]

  const i = [1, 2, 3, 4].sort(() => Math.random() - 0.5);
  const j = [0, 1, 2].sort(() => Math.random() - 0.5);

  return (
    <div className='container'>

      <div className='pergunta'>

        <Pergunta pergunta={pergunta_facil[j[1]][0]}/>

      </div>


      <div className='resposta'>
        <div className='opcoes'>
          <Resposta texto={pergunta_facil[j[1]][i[0]]}/>
          <Resposta texto={pergunta_facil[j[1]][i[1]]}/>
          <Resposta texto={pergunta_facil[j[1]][i[2]]}/>
          <Resposta texto={pergunta_facil[j[1]][i[3]]}/>
          
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
