import './ClientBox.css'
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ClientBox = (props) => {

    const { id, name, username, email } = props.data;
    console.log(props.data);

    const dynamicRoute = `/user/${id}`


    return (
        <Col className='my-3 h-100'>

            <Card className='h-100'>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{username}</Card.Subtitle>
                    <Card.Text>
                        {email}
                    </Card.Text>
                    <Link to={dynamicRoute} className='btn btn-outline-info'>Visit</Link>
                </Card.Body>
            </Card>

        </Col >
    );
};

export default ClientBox;