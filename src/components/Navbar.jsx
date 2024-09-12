import {HeartIcon} from "@heroicons/react/24/outline"
export default function Navbar({children}){
    return (
    <nav className="navbar">
       <Logo/> 
       {children}
       
    </nav>
);
}

function Logo(){
    return   <div className="navbar__logo"> logo </div>
}

function search(){
return <input type="text" className="text-field" placeholder="search" />
}

export function searchResult(numOfResult){
return <div className="navbar__result">Found{numOfResult} characters</div>

}

export function Favourites({numOfFavourites}){
    return(
        <>
        <Modal />
        <button className="heart" onClick={() => setIsOpen}>
            <HeartIcon className="icon" />
            <span className="badge">{numOfFavourites}</span>
        </button>
        </>
    );
}