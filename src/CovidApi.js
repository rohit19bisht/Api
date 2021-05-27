import React, {useState, useEffect} from 'react';
import Moment from 'react-moment';

function CovidApi() {
    
    const [covidDate, setCovidData] = useState([]);
    const getCovidData = async() => {
        const res = await fetch("https://api.covid19india.org/data.json");
        const data = await res.json();
        console.log(data.statewise)
        setCovidData(data.statewise)
        // console.log(object.key(data.statewise))
    }

    useEffect(()=> {
        getCovidData();
    },[])
    
    return (
        <div>
            {Object.keys(covidDate).map((key, item) =>{
                return (
                    <li>{key}</li>
                )
            })}
            <header>
                <div className="container">
                    <div className="headerInner">
                        <div className="logo">
                            <span>IMDB Bitch</span>
                        </div>
                        <div className="search">
                            <input type="text" placeholder="Search" />
                            <button>Search</button>
                        </div>
                    </div>
                </div>
            </header>
            <section className="movies">
                <div className="container">
                    <h2 style={{fontWeight: "700", textAlign:"center", fontSize:"30px"}}>Covid Update</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Last Updated Time</th>
                                <th>Active</th>
                                <th>Confirmed</th>
                                <th>Deaths</th>
                                <th>Recovered</th>
                            </tr>
                        </thead>
                        <tbody>
                            {covidDate.map((item) =>{
                                return (
                                    <tr>
                                        <td>{item.lastupdatedtime }</td>
                                        <td>{item.active}</td>
                                        <td>{item.confirmed}</td>
                                        <td>{item.deaths}</td>                                        
                                        <td>{item.recovered}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </section>

            <footer>
                <p>@copyright 2021 IMDB Bitch</p>
            </footer>

        </div>
    );
}
export default CovidApi;