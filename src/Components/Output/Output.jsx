import React from 'react';
import './Output.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Stack } from '@mui/material';
import { Link } from 'react-router-dom';

const Output = ({ data }) => {
    return (
        <Stack direction="row" flexWrap="wrap" justifyContent="space-evenly">

            {
                data.map(el => {
                    return (
                        <div className='cards' key={el.idDrink}>
                            <Card sx={{ maxWidth: 345, minWidth: 345 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="100%"
                                        image={el.strDrinkThumb}
                                        alt={el.strDrink}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {el.strDrink}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Link to={"/detail/" + el.idDrink}> <Button size="medium" color="primary">
                                        Learn More
                                    </Button>
                                    </Link>
                                </CardActions>
                            </Card>
                        </div>
                    )
                })
            }

        </Stack>
    );
};

export default Output;