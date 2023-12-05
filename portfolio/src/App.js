
import './App.css';
import GitStats from './components/GitStats';
import Navbar from './components/Navbar';
import { Home } from './pages/Home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <GitStats />
    </div>
  );
}

export default App;
