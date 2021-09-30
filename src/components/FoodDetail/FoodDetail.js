import './FoodDetail.css'
import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';

const FoodDetail = () => {

    const { foodId } = useParams();

    const [detail, setDetail] = useState([]);

    useEffect(() => {

        const url = `https://themealdb.com/api/json/v1/1/lookup.php?i=${foodId}`

        fetch(url)
            .then(res => res.json())
            .then(data => setDetail((data.meals[0])))
    }, [])



    return (
        <div className="d-flex justify-content-center my-5">
            <Card className='w-50'>
                <Card.Body>
                    <Card.Title className='text-center text-danger'>{detail.strMeal}</Card.Title>
                    <Card.Img className='img-fluid mb-3' variant="top" src={detail.strMealThumb} />
                    <Card.Text>{detail.strInstructions?.slice(0, 300)}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default FoodDetail;