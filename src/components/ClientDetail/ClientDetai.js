import './ClientDetail.css';
import React, { useEffect, useState } from 'react';
import { Card, Container, ListGroup } from 'react-bootstrap';
import { useParams } from 'react-router';

const ClientDetai = () => {

    const { id } = useParams();

    const [user, setUser] = useState({});

    useEffect(() => {

        const userUrl = `https://jsonplaceholder.typicode.com/users/${id}`
        fetch(userUrl)
            .then(res => res.json())
            .then(data => setUser(data))

    })

    return (
        <Container className='mx-auto'>
            <Card className='w-75 mx-auto my-5 bg-secondary text-light'>
                <Card.Header>Name: {user.name}</Card.Header>
                <ListGroup variant='flush'>
                    <ListGroup.Item>Identification: {user.id}</ListGroup.Item>
                    <ListGroup.Item>Email: {user.email}</ListGroup.Item>
                    <ListGroup.Item>Street: {user.address?.street}</ListGroup.Item>
                    <ListGroup.Item>Suite: {user.address?.suite}</ListGroup.Item>
                    <ListGroup.Item>City: {user.address?.city}</ListGroup.Item>
                    <ListGroup.Item>Phone: {user.phone}</ListGroup.Item>
                    <ListGroup.Item>Company: {user.company?.name}</ListGroup.Item>
                </ListGroup>
            </Card>
        </Container>
    );
};

export default ClientDetai;