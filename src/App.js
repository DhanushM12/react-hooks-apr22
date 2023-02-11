
import './App.css';
import UseEffect from './hooks/UseEffect';
import UseMemo from './hooks/UseMemo';
import UseRef from './hooks/UseRef';
import UseState from './hooks/UseState';

function App() {
  return (
    <div className="App">
        <UseState />
        <UseEffect />
        <UseRef />
        <UseMemo />
    </div>
  );
}

export default App;
