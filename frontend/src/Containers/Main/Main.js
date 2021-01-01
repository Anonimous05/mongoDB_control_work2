import React, {Component} from 'react';
import axiosAPI from "../../axiosAPI";
import {axiosURL} from "../../axiosURL";
import './Main.css';

class Main extends Component {

    state = {
        movies: [],
        movieName: '',
    };

    async componentDidMount() {
        const resMovie = await axiosAPI.get('/movie');
        this.setState({movies: resMovie.data});
    }

    inputValHandler = (e) => {
        this.foundMovie(e.target.value);
        this.setState({[e.target.name]: e.target.value});
    };

    fetchMovie = async (e) => {
        if(e.target.value === "Все"){
            this.componentDidMount();
        }else {
            const resMovie = await axiosAPI.post(`/movie/${
                e.target.value === "Хоррор"  ? "horror" :
                    e.target.value === "Комедия" ? "comedy" :
                        e.target.value === "Детективы" ? "detective" : ""
            }`);
            this.setState({movies: [resMovie.data]})
        }
    };

    foundMovie = (movieName) => {
      const find = this.state.movies.find(name => name.movieName.toLowerCase().trim() === movieName.toLowerCase().trim());
      if(find !== undefined){
          this.setState({movies: [find]});
      }
      if(movieName.trim() === ""){
          this.componentDidMount();
      }
    };

    render() {
        return (
            <div className="MainContainer">
                <div className="controls">
                    <div className="found">
                        <input list="movieNames" type="text" name="movieName" onChange={this.inputValHandler}/>
                        <datalist id="movieNames">
                            {this.state.movies && Object.keys(this.state.movies).map(name => (
                                <option value={this.state.movies[name].movieName} key={name}/>
                            ))}
                        </datalist>
                    </div>
                    <div className="categories">
                        <select onChange={this.fetchMovie}>
                            <option hidden>Выбрать категорию</option>
                            <option>Хоррор</option>
                            <option>Комедия</option>
                            <option>Детективы</option>
                            <option>Все</option>
                        </select>
                    </div>
                </div>
                <div className="movies">
                    {this.state.movies && Object.keys(this.state.movies).map(info => (
                        <div className="movie_block" key={info}>
                            <div className="img">
                                <img src={axiosURL + '/images/' + this.state.movies[info].movieImage} alt=""/>
                            </div>
                            <p>Название фильма: <br/> {this.state.movies[info].movieName}</p>
                            <p>Жанр: <br/>{
                                this.state.movies[info].categories === "horror"     ? "Хоррор"      :
                                this.state.movies[info].categories === "comedy"     ? "Комедия"     :
                                this.state.movies[info].categories === "detective"  ? "Детектив"    : ""
                            }</p>
                            <button className="details" onClick={() =>
                                this.props.history.push(`/details/${this.state.movies[info]._id}`)
                            }>
                                смотреть
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default Main;