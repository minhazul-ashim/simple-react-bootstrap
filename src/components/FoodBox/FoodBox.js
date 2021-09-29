import './FoodBox.css'
import React from 'react';
import { Card, Col } from 'react-bootstrap';

const FoodBox = (props) => {

    const { strMeal, strMealThumb, strCategory } = props.data;

    return (
        <Col>
            <Card>
                <Card.Img className='img-fluid' variant="top" src={strMealThumb} />
                <Card.Body>
                    <Card.Title>{strMeal}</Card.Title>
                    <Card.Text>
                        <p>{strCategory}</p>
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <button className='btn btn-info'>Details</button>
                </Card.Footer>
            </Card>
        </Col>

    );
};

export default FoodBox;