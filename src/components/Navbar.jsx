import {HeartIcon} from "@heroicons/react/24/outline"
export default function Navbar({numOfResult}){
    return (
    <nav className="navbar">
       <Logo/> 
       <Search/>
       <searchResult numOfResult={numOfResult}/>
       <Favourites/>
       
    </nav>
);
}

function Logo(){
    return   <div className="navbar__logo"> logo </div>
}

function search(){
return <input type="text" className="text-field" placeholder="search" />
}

function searchResult(numOfResult){
return <div className="navbar__result">Found{numOfResult} characters</div>

}

function Favourites(){
    return(
        <button className="heart">
            <HeartIcon className="icon" />
            <span className="badge">4</span>
        </button>
    );
}