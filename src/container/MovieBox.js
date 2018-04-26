import React from "react";
import {connect} from "react-redux";

import MovieList from "../component/MovieList";

function mapStateToProps(state){
    return {
        movies:state.movies,
        isFetching:state.isFetching,
        movieTitle:state.movieTitle
    };
}

function mapDispatchToProps(dispatch){
    return {
        movieClick:function(id){
            console.log(id);
        }
    };
}

const MovieBox=connect(mapStateToProps,mapDispatchToProps)(MovieList);
export default MovieBox;
