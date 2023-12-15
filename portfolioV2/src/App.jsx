
import './App.css';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import GitStats from './components/GitStats';
import Navbar from './components/Navbar';
import ProjectsSection from './components/ProjectsSection';
import SkillSection from './components/SkillSection';
import { Home } from './pages/Home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <AboutSection />
      <SkillSection />
      <ProjectsSection />
      <GitStats />
      <ContactSection />
    </div>
  );
}

export default App;
