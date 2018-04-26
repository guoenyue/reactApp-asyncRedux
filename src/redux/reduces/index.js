
function getMovies(state=[],action){
    const type=action.type;
    switch(type){
        case "INIT_MOVIES":
            return action.movies;
        break;
        default:
            return state;
        break;
    }
}

function getFectchState(state=true,action){
    const type=action.type;
    switch(type){
        case "INIT_MOVIES":
            return action.isFetching;
        break;
        default:
            return state;
        break;
    }
}

function getMovieTitle(state="最近热门",action){
    const type=action.type;
    switch(type){
        case "SET_MOVIES_TYPE":
            return action.movieTitle;
        break;
        default:
            return state;
        break;
    }
}

function reduces(state={},action){
    return {
        movies:getMovies(state.movies,action),
        isFetching:getFectchState(state.isFetching,action),
        movieTitle:getMovieTitle(state.movieTitle,action)
    }
}

export {reduces};