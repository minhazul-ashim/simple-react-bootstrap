import './ClientDetail.css';
import React from 'react';
import { Card, Container, ListGroup } from 'react-bootstrap';
import { useParams } from 'react-router';

const ClientDetai = () => {

    const { id } = useParams();

    return (
        <Container className='mx-auto'>
            <Card style={{ width: '18rem' }}>
                <Card.Header>{id}</Card.Header>
                <ListGroup variant="flush">
                    <ListGroup.Item>Cras justo odio</ListGroup.Item>
                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
            </Card>
        </Container>
    );
};

export default ClientDetai;