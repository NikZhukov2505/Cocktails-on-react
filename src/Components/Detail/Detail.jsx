import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { DETAIL_COCTAIL_API } from '../API/API';

const Detail = () => {

    const params = useParams()
    const [info, setInfo] = useState({})

    const getDetailInfo = async () => {
        const request = await fetch(DETAIL_COCTAIL_API + params.id)
        const response = await request.json()
        setInfo(response.drinks[0])
    }
    useEffect(() => {
        getDetailInfo()
    }, [])

    return (
        <div>
            <div>
                <img src={info.strDrinkThumb} alt="" />
            </div>
            <div>
                <h3>Name: {info.strDrink}</h3>
                <h3>Alcoholic: {info.strAlcoholic}</h3>
                <ul>
                    <h2>Ingridients:</h2>
                    <li>
                        <Link to={'/ingridients/' + info?.strIngredient1}>{info?.strIngredient1}</Link>
                    </li>
                    <li>
                        <Link to={'/ingridients/' + info?.strIngredient2}>{info?.strIngredient2}</Link>
                    </li>
                    <li>
                        <Link to={'/ingridients/' + info?.strIngredient3}>{info?.strIngredient3}</Link>
                    </li>
                    <li>
                        <Link to={'/ingridients/' + info?.strIngredient4}>{info?.strIngredient4}</Link>
                    </li>
                </ul>
            </div>
        </div >
    );
};

export default Detail;