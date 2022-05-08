import './App.css';
import AnnotationList from './Components/AnnotationList';
import AnnotationWindow from './Components/AnnotationWindow';
import Records from './Components/Records';

function App() {
  return (
    <div className="App">
      <Records />
      <AnnotationList />
      <AnnotationWindow />
    </div>
  );
}

export default App;
