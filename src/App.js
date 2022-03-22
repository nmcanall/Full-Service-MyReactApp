import './styles/App.css';
import {useState} from "react";
import Navbar from './components/Navbar';
import Main from './components/Main';

function App() {

  const [darkMode, toggleDarkMode] = useState(false);

  return (
    <div className="container">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
      <Main darkMode={darkMode}/>
    </div>
  );
}

export default App;