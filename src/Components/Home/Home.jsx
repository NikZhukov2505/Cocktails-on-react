import React, { useEffect, useState } from 'react';
import { ALLCOCTAILS_API, FILTER, SEARCH_COCTAIL_BY_NAME } from '../API/API';
import Header from '../Header/Header';
import Output from '../Output/Output';


const Home = () => {
    const [data, setData] = useState([])

    const getAllCocktails = async () => {
        const request = await fetch(ALLCOCTAILS_API)
        const response = await request.json()
        setData(response.drinks);
    }

    const getCoctailByName = async (name) => {
        const request = await fetch(SEARCH_COCTAIL_BY_NAME + name)
        const response = await request.json()
        setData(response.drinks)
    }

    useEffect(() => {
        getAllCocktails()
    }, [])

    const getFilter = async (option) => {
        const request = await fetch(FILTER + option)
        const response = await request.json()
        console.log(response.drinks);
        setData(response.drinks);
    }


    return (
        <div>
            <Header search={getCoctailByName} filter={getFilter} />
            <Output data={data} />

        </div>
    );
};

export default Home;