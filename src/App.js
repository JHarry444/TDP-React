import './App.css';
import Converter from './components/state/Converter';
import Counter from './components/state/Counter';
import Form from './form';
import Heading from './Heading';
import Trainer from './Trainer';

function App() {
  return (
    <div className="App">
      <Heading/>
      <Counter/>
      <br/>
      <Converter/>
      {/* <Trainer name="Jordan H" age={28} specialism="Software"/>
      <Trainer name="Piers B" age={24} specialism="Weaponisation"/>
      <Trainer name="Ed" age={26} specialism="SDET"/> */}
      {/* <Trainer/> */}
    </div>
  );
}

export default App;
