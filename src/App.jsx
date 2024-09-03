
import { useEffect, useState } from "react";
import { allCharacters } from "../data/data";
import "./App.css";
import CharacterDetail from "./components/CharacterDetail";
import CharacterList from "./components/CharacterList";
import Navbar ,{SearchResult} from "./components/Navbar";
import { Toaster } from "react-hot-toast";
import axios from "axios";


function App(){
  const [characters, setCharacters] = useState(allCharacters);
  const [isLoading,setIsLoading] = useState(false)

  useEffect(() =>{
    async function fetchData(){
      try {
        setIsLoading(true)
      const {data} = await axios.get("https://rickandmortyapi.com/api/character")
      setCharacters(data.results.slice(0,5));
      // setIsLoading(false);

      } catch (err) {

        console.log(err.message);
        toast.error(err.message)
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

