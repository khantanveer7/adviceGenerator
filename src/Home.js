import axios from 'axios';
import React, { useState } from 'react';
import './Home.css'

const Home = () => {

    const [advice, setAdvice] = useState();
    const [loading, setLoading] = useState(false)

    const getAdvice = () => {
        setLoading(true)
        async function getData() {
            await axios.get('https://api.adviceslip.com/advice')
                .then((response) => {
                    setAdvice(response.data.slip.advice)
                    setLoading(false)
                })
        }
        getData()
    };

    return (
        <div className="home">
            <div className="home__card">
                {loading ? < p className="home__loading">{`Loading...`}</p> : <h1 className="home__advice">{advice}</h1>}
                {!advice ? <button className="home__buttonBefore" onClick={getAdvice} >Give Me Advice</button> : <button className="home__button" onClick={getAdvice} >New Advice</button>}
            </div >
        </div>
    )
}

export default Home
