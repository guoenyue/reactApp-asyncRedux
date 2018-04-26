import {fetch} from "../../util";


function loadMovies(moviesType,dispatch){
    fetch("https://api-m.mtime.cn/Showtime/LocationMovies.api?locationId=290").then(res=>res.json()).then(res=>dispatch(setMovies(res.ms)),err=>dispatch(setMovies([])));
    return {
        type:"INIT_MOVIES",
        isFetching:true,
        movies:[],
    };
}
function setMovies(movies){
    return {
        type:"INIT_MOVIES",
        isFetching:false,
        movies:movies,
        movieTitle:"3223323"
    };
}



export {loadMovies,setMovies};