
import { useEffect, useState } from "react";
import { allCharacters } from "../data/data";
import "./App.css";
import CharacterDetail from "./components/CharacterDetail";
import CharacterList from "./components/CharacterList";
import Navbar ,{SearchResult} from "./components/Navbar";
import { Toaster } from "react-hot-toast";
import axios from "axios";


function App(){
  const [characters, setCharacters] = useState([]);
  const [isLoading,setIsLoading] = useState(false);
  const [query, setQuery] = useState(null);
  const [Favourites, setFavourites] = useState([]);

  useEffect(() =>{
    async function fetchData(){
      try {
        setIsLoading(true)
      const {data} = await axios.get("https://rickandmortyapi.com/api/character")
      setCharacters(data.results.slice(0,5));
      // setIsLoading(false);

      } catch (err) {
        console.log(err.response.data.error);
        toast.error(err.response.data.error);
      }finally{
      setIsLoading(false);

      }

    }
    fetchData();
  }, [query]);
  

  const isAddToFavourite = Favourites.map((fav) => fav.id).includes(selectedId);


const handleSelectCharacter = (id) => {
  setSelectId((preId) => (preId == id ? null : id));

};

const handleAddFavourite = (char) => {
  setFavourites((preFav) => [...preFav, char]);
};

  return (
  <div className="app">
  <Toaster/>
    <Navbar >
    <Search/>
      <SearchResult numOfReasult ={characters.length}/>
      <Favourites numOfFavourites = {Favourites.length} />
    </Navbar>
    <Main>
      {isLoading ?
      <Loader />:
      <CharacterList characters={characters} isLoading={isLoading} onSelectCharacter={onSelectCharacter}/>}
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

