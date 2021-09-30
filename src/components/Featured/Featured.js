import './Featured.css'
import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';

const Featured = () => {

    const [featured, setFeatured] = useState({});

    useEffect(() => {

        const url = 'https://themealdb.com/api/json/v1/1/search.php?s='
        const randomIndex = Math.round(Math.random() * 20);

        fetch(url)
            .then(res => res.json())
            .then(data => setFeatured(data.meals[randomIndex]))
    }, [])

    return (
        <div className='container d-flex flex-column align-items-center'>
            <h2 className='text-center text-danger my-4'>Today's Featured</h2>

            <Card className='w-50 mb-4'>
                <Card.Img className='img-fluid' variant="top" src={featured.strMealThumb} />
                <Card.Body>
                    <Card.Title>{featured.strMeal}</Card.Title>
                    <Card.Text className='text-danger'>
                        Origin: {featured.strArea}
                    </Card.Text>
                    <Card.Text className='text-success'>
                        Category: {featured.strCategory}
                    </Card.Text>
                    <Card.Text>
                        Instructions: {featured.strInstructions?.slice(0, 300)}
                    </Card.Text>
                </Card.Body>
            </Card>

        </div>
    );
};

export default Featured;