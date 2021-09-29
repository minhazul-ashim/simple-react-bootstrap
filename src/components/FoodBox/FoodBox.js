import './FoodBox.css'
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';

const FoodBox = (props) => {

    const { idMeal, strMeal, strMealThumb, strCategory } = props.data;

    let history = useHistory();

    const handleDetail = () => {

        history.push(`./food/${idMeal}`)
    }

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
                    <button onClick={handleDetail} className='btn btn-info'>Details</button>
                </Card.Footer>
            </Card>
        </Col>

    );
};

export default FoodBox;