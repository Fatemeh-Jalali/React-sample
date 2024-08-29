
import { useEffect, useState } from "react";
import { allCharacters } from "../data/data";
import "./App.css";
import CharacterDetail from "./components/CharacterDetail";
import CharacterList from "./components/CharacterList";
import Navbar ,{SearchResult} from "./components/Navbar";

function App(){
  const [characters, setCharacters] = useState(allCharacters);
  const [isLoading,setIsLoading] = useState(false)

  useEffect(() =>{
    async function fetchData(){
      try {
        setIsLoading(true)
      const res = await fetch("https://rickandmortyapi.com/api/character")
      if(!res.ok) throw new Error("Something went wrong!");
      const data = await res.json();
      setCharacters(data.results.slice(0,5));
      setIsLoading(false);

      } catch (err) {

        console.log(err.message);
      }finally{
      setIsLoading(false);

      }

    }
    fetchData();
  }, []);

  return (
  <div className="app">
  <Toaster/>
    <Navbar >
      <SearchResult numOfReasult ={characters.length}/>
    </Navbar>
    <Main>
      {isLoading ?
      <Loader />:
      <CharacterList characters={characters} isLoading={isLoading}/>}
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

