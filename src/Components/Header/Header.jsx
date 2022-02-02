import { Button, Stack, TextField } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = ({ search, filter }) => {
    const [input, setInput] = useState('')


    return (
        <header>

            <Stack spacing={2} direction="row" justifyContent="center" alignItems="center">
                <Link to="/">
                    <img width={70} src="https://images.absolutdrinks.com/drink-images/Raw/Absolut/5ce2c4fd-22fd-4b00-8709-808d5ef52c13.jpg?imwidth=500" alt="" />
                </Link>
                <h1>Cocktails | React</h1>
                <TextField onChange={(event) => setInput(event.target.value)} required id="outlined-required" label="Cocktail Name" defaultValue="" />
                <select onChange={(event) => filter(event.target.value)}>
                    <option value="Alcoholic">Алкогольный</option>
                    <option value="Non_Alcoholic">Без алкогольный</option>
                </select>
                <Button onClick={() => search(input)} variant="outlined">Search</Button>
            </Stack>

        </header >
    );
};

export default Header;