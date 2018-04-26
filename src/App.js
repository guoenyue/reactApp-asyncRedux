import React,{Component} from "react";
import {connect} from "react-redux";

import MovieBox from "./container/MovieBox";
import {loadMovies} from "./redux/actions";
// const App=()=>(
//     <div>
//         <MovieBox></MovieBox>
//     </div>
// );

class App extends Component{
    constructor(){
        super()
    }
    componentWillMount(){
        //console.log();
        this.props.dispatch(loadMovies("movies---",this.props.dispatch));
    }
    render(){
        return (
            <div>
                <MovieBox></MovieBox>
            </div>
        );
    };
}
App=connect()(App);
export default App;