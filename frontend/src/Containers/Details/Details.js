import React, {Component} from 'react';
import axiosAPI from "../../axiosAPI";
import {axiosURL} from "../../axiosURL";
import './Details.css';

class Details extends Component {

    state = {
      detailsMovie: null,
        video: "",
        time: "",
    };

    async componentDidMount() {
        const res = await axiosAPI.get(`/details/${this.props.match.params.id}`);
        this.setState({detailsMovie: res.data,video: res.data.movieTrailer});
    }

    render() {
        return (
            <div className="detailsContainer">
                {this.state.detailsMovie !== null ? (
                    <>
                        <div className="detailsText">
                            <p className="movieName">
                                {this.state.detailsMovie.details.movieName}
                            </p>
                            <p className="category">Жанр:
                                {this.state.detailsMovie.details.categories === "horror" ? "Хоррор" :
                                 this.state.detailsMovie.details.categories === "comedy" ? "Комедия" :
                                 this.state.detailsMovie.details.categories === "detective" ? "Детектив" :
                                 ""
                                }
                            </p>
                            <p className="movieDescription">
                                {this.state.detailsMovie.movieDescription}
                            </p>
                        </div>
                        <div className="trailerBlock">
                            <video id="video"
                                   src={axiosURL + '/videos/' + this.state.video}
                                controls="controls" poster={axiosURL + '/images/' + this.state.detailsMovie.details.movieImage}
                            >
                            </video>
                            <select onChange={(e) => this.setState({video: e.target.value === "1080Hd" ? this.state.detailsMovie.movieTrailerHd :
                                    this.state.detailsMovie.movieTrailer
                            })}>
                                <option hidden>Выбрать качество</option>
                                <option value="1080Hd">1080 HD</option>
                                <option value="720p">720 p</option>
                            </select>
                        </div>
                    </>
                ) : (
                    <></>
                )}
            </div>
        );
    }
}

export default Details;