import './App.css';
import Form from './form';
import Heading from './Heading';
import Trainer from './Trainer';

function App() {
  return (
    <div className="App">
      <Heading/>
      <Trainer name="Jordan H" age={28} specialism="Software"/>
      <Trainer name="Piers B" age={24} specialism="Weaponisation"/>
      <Trainer name="Ed" age={26} specialism="SDET"/>
      {/* <Trainer/> */}
    </div>
  );
}

export default App;
