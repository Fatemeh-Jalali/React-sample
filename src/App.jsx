
import { useState } from "react";
import "./App.css";
import CharacterDetail from "./components/CharacterDetail";
import CharacterList from "./components/CharacterList";
import Navbar from "./components/Navbar";

function App(){
  const [characters, setCharacters] = useState(allCharacters);
  return (
  <div className="app">
    <Navbar numOfReasult ={characters.length}/>
    <Main characters={characters}/>
    <CharacterList characters={characters}/>
    <CharacterDetail />
    </Main>
  </div>
  );

}

export default App;

function Main({children}){
return
  <div className="main">
    {children}
</div>

}

