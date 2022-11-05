import './App.scss';
import Profile from '../profile/profile';
import Features from '../features/features';
import Skills from '../skills/skills'
import Battle from '../battle/battle';

function App() {
  return (
    <div className="App">
      <Profile />
      <Features />
      <Skills />
      <Battle />
    </div>
  );
}

export default App;
