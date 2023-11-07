import Pergunta from './components/Pergunta';
import Resposta from './components/Resposta';
import Ajuda from './components/Ajuda';
import './App.css';

function App() {
  return (
    <div className='container'>

      <div className='pergunta'>

        <Pergunta />

      </div>

      <div className='resposta'>
        <div className='opcoes'>
          <Resposta texto='blabla'/>
          <Resposta texto='bleble'/>
          <Resposta texto='blibli'/>
          <Resposta texto='bloblo'/>
        </div>

        <div className='ajuda'>
            <Ajuda />
        </div>
      </div>

    </div>
  );
}

export default App;
