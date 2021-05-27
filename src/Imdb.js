import React from 'react';
import movieThumbnail from './loki.jpg';

function Imdb() {
    // array ke ander object
    const data = [
        {
            title: "loki",
            date: "1/4/2019",
        },
        {
            title: "Thor",
            date: "11/2/2021",
            image: "http://localhost:3000/static/media/loki.bfb690d0.jpg",
        },
        {
            title: "Hulk",
            date: "21/3/2022",
            image: "http://localhost:3000/static/media/loki.bfb690d0.jpg",
        },
        {
            title: "Radhe",
            date: "31/5/2022",
            image: "http://localhost:3000/static/media/loki.bfb690d0.jpg",
        },
    ]
     
    // object ke ander array and fir object
    const data2 = {
        list: [
            {
                name: "rohit",
                age: "27"

            },
            {
                name: "mohit",
                age: "28"
            },
        ]

    }

    console.log(data2)
    return (
        <div>
            <header>
                <div className="container">
                    <div className="headerInner">
                        <div className="logo">
                            <span>IMDB Bitch</span>
                        </div>
                        <div className="search">
                            <input type="text" placeholder="Search" />
                        </div>
                    </div>
                </div>
            </header>
            <ul>
                {data2.list.map((item) => {
                    return (
                    <li>Name:{item.name}, Age:{item.age}</li>
                    )
                })}
                
            </ul>
            <section className="movies">
                <div className="container">
                    <div className="moviesInner">
                        {data.map((item) => {
                            return (
                                <div className="movieCard">
                                    <img src={data.image ? item.image : movieThumbnail} />
                                    <div className="movieContent">
                                        <h2>{item.title}</h2>
                                        <p><b>Release Date:</b> <span>{item.date}</span></p>
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
export default Imdb;