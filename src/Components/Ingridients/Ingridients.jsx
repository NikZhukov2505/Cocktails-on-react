import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { SEARCH_BY_INGR } from '../API/API';

const Ingridients = () => {
    const params = useParams()
    const [ingr, setIngr] = useState()

    const searchIngridient = async () => {
        const request = await fetch(SEARCH_BY_INGR + params.name)
        const response = await request.json()
        setIngr(response.ingredients[0])
    }
    useEffect(() => {
        searchIngridient()
    }, [])
    return (
        <div>

            <h1>Name: {ingr?.strIngredient}</h1>
            <h4>Description:</h4>
            <p>{ingr?.strDescription}</p>

        </div >
    );
};

export default Ingridients;