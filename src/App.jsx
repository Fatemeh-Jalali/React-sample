
import { useEffect, useState } from "react";
import { allCharacters } from "../data/data";
import "./App.css";
import CharacterDetail from "./components/CharacterDetail";
import CharacterList from "./components/CharacterList";
import Navbar ,{SearchResult} from "./components/Navbar";
import { Toaster } from "react-hot-toast";
import axios from "axios";
import Modal from "./components/Modal";


function App(){
  const [characters, setCharacters] = useState([]);
  const [isLoading,setIsLoading] = useState(false);
  const [query, setQuery] = useState(null);
  const [favourites, setFavourites] = useState([]);
  const [count, setCount] = useState(0);

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
  
  useEffect(() => {
    setInterval(() => setCount((c) => c+1),1000);
  },[count]);



  const handleSelectCharacter = (id) => {
    setSelectId((preId) => (preId == id ? null : id));
  
  };

  const handleAddFavourite = (char) => {
    setFavourites((preFav) => [...preFav, char]);
  };


  const isAddToFavourite = favourites.map((fav) => fav.id).includes(selectedId);


  return (
  <div className="app">
  <Toaster/>
  {/* <Modal title='modal test' open={true}> this ss </Modal> */}
    <Navbar >
    <Search/>
      <SearchResult numOfReasult ={characters.length}/>
      <Favourites numOfFavourites = {Favourites.length} />
    </Navbar>
    <Main>
      <CharacterList
      selectedId={selectedId}
       characters={characters} 
       isLoading={isLoading} 
       onSelectCharacter={handleSelectCharacter}/>

       <CharacterDetail
       selectedId={selectedId}
       onAddFavourite={handleAddFavourite}
       isAddToFavourite={isAddToFavourite}
       />

       
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

export default CharacterDetail;

function characterSubInfo(){
  return
}