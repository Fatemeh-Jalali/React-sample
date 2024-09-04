import { ArrowUpCircleIcon } from "@heroicons/react/24/outline";
import { episode} from "../../data/data";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

function CharacterDetail(selectId) {
  const [character, setCharacters] = useState(null);
  const [isLoading, setIsLoading]= useState(false);
  const [episodes, setEpisodes] = useState([]);

  useEffect(()=>{
    async function fetchData(){
      try{
      setIsLoading(true);
    const {data} = await  axios.get(
      `https://rickanndmortyapi.com/api/characters/${selectId}`);
      data.episode.map((e) => e.split('/').at(-1));
      setCharacters(data);



    }catch(error){
      toast.error(error.response.error)

    }finally{
      setIsLoading(false);
    }
  }
  if(selectId) fetchData();
}, [selectedId]);
if(isLoading)
  return(
<div style={{flex:1}}>
  <Loader/>
</div>
);



if(!character || !selectId)
   return (
   <div style={{flex:1, color:"var(--slate-300)"}}>
    please select a chaaracter.
    </div>
   );
  



  return (
    <div style={{flex:1}}>
      <div className="character-detail">
        <img src={character.image} alt={character.name} className="character-detail__img" />
        <div className="character-detail__info">
          <h3 className="name">
            <span>{character.gender=== "Male" ? "*" : "#"}</span>
            <span>{character.name}</span>
          </h3>
          <div className="info">
            <span className={`status ${character.status === "Dead" ? "red" :""}`}>

              <span>{character.status}</span>
              <span>{character.species}</span>
            </span>
          </div>
          <div className="location">
            <p>last khown location</p>
            <p>{character.location.name}</p>
          </div>
          <div className="action">
            <button className="btn btn--primary">add to Favourite</button>
          </div>
        </div>
      </div>
      <div className="character-opisodes">
        <div className="title">
          <h2>list of episodes:</h2>
          <button>
            <ArrowUpCircleIcon className="icon" />
          </button>

        </div>
        <ul>
         
            {episodes.map((item, index) => (
            <li key={item.id}>
              <div>
               {String(index +1).padStart(2, "0")} - {item.episode} : <strong>{item.name}</strong>
              </div>
              <div className="badge badge--secendary">{item.air_date}</div>

            </li>
            ))
          }
        </ul>
      </div>
    </div>
  );
}

export default CharacterDetail;