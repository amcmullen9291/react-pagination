import axios from 'axios';
import React from 'react';
import { useState } from 'react';

export default function  FunctionalComponentPagination() {

    const [players, setPlayers ] = useState([]);
    const [ loading, setLoading ] = useState(false);
    const DATA_URL = "https://nba-players.herokuapp.com/players-stats"

    const getData = async () => {
        try {
            const data = await axios.get(DATA_URL);
            console.log(data.data);
            setPlayers(data.data)
        } catch (e){
            console.log(e);
        }
    }

    getData();

    


return (
    <>
    <div>
        <center><h1>Functional component pagination</h1></center>
    </div>
    </>
);
}
