import React, {useState} from 'react';
import movieThumbnail from './loki.jpg';
import axios from "axios"

function ImdbApi() {
    const [searchInput, setSearchInput] = useState('');
    const [movieName, setMovieName] = useState([]);
    const searchChange = (e) => {
        setSearchInput(e.target.value);
    }
    const getMoviesData = async() => {
        const getApi = await axios.get(`https://imdb8.p.rapidapi.com/auto-complete/?q=${searchInput}`,{
            headers: {
                'x-rapidapi-key': 'eb3df15a07msh2652ba1a5bf626ap1bcd61jsndb930e737e26',
                'x-rapidapi-host': 'imdb8.p.rapidapi.com'
            }
        });
        console.log(getApi.data.d);
        setMovieName(getApi.data.d)
    }

    return (
        <div>
            <header>
                <div className="container">
                    <div className="headerInner">
                        <div className="logo">
                            <span>IMDB Bitch</span>
                        </div>
                        <div className="search">
                            <input type="text" placeholder="Search" onChange={searchChange} value={searchInput} />
                            <button onClick={getMoviesData}>Search</button>
                        </div>
                    </div>
                </div>
            </header>
            <section className="movies">
                <div className="container">
                    <div className="moviesInner">
                        {movieName.map((item) => {
                            return (
                                <div className="movieCard">
                                    <img style={{height:"215px", objectFit: "cover"}} src={item?.i?.imageUrl ? item?.i?.imageUrl : movieThumbnail} />
                                    <div className="movieContent">
                                        <h2>{item.l}</h2>
                                        <p><b>Release Year:</b> <span>{item?.y}</span></p>
                                        <p><b>Rank:</b> <span>{item?.rank}</span></p>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                </div>
            </section>

            <footer>
                <p>@copyright 2021 IMDB Bitch</p>
            </footer>

        </div>
    );
}
export default ImdbApi;