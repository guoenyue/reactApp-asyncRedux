import React from "react";

const Movie=({tCn,img,actors,id,movieType,clickEvent})=>(
    <li onClick={()=>clickEvent(id)}>
        <p>电影：{tCn}</p>
        <p>演员：{actors}</p>
    </li>
);

const MovieList=({movies,isFetching,movieTitle,movieClick})=>{
    switch(true){
        case isFetching:
            return (<div>正在加载中，请稍候...</div>);
        break;
        case !isFetching&&movies&&movies.length===0:
            return (<div>电影数据为0，请看看其他东西吧！</div>);
        break;
        case !isFetching&&movies&&movies.length>0:
            return (<div>
                <h3>{movieTitle}</h3>
                <ul>
                    {movies.map(movie=><Movie key={movie.id} clickEvent={movieClick} {...movie} />)}
                </ul>
            </div>);
        break;
        case !isFetching&&!movies:
            return (<div>列表拉取失败请刷新...</div>);
        break;
    }
};

export default MovieList;