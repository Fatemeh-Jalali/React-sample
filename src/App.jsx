
import { characters } from "../data/data";
import "./App.css";
import CharacterDetail from "./component/CharacterDetail";
import CharacterList from "./component/CharacterList";
import Navbar from "./component/Navbar";

function App(){
  return 
  <div className="app">
    <Navbar />
    <div className="main">
      <CharacterList characters={characters} />
      <CharacterDetail />

    </div>
  </div>

}

export default App;