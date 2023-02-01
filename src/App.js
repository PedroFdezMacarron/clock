import Clock from './components/Clock/Clock';
import Chrono from './components/Chrono/Chrono';
import Countdown from './components/Countdown/Countdown';
import './App.css'

function App() {
  return (
    <div className="App">    
     <Clock></Clock>
     <Countdown></Countdown>
     <Chrono></Chrono>
    </div>
  );
}

export default App;
