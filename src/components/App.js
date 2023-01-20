import {Cities} from './question.js';
import '../stylesheets/App.css';

//El componente principal después de la raíz, en el cual se renderiza la pregunta al usuario
function App() {
  //Importamos el componente definido en 'question.js'
  return (
    <div className='app-content'>
      <Cities />
    </div>    
  );
} 

export default App;
