import './Clients.css'
import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import ClientBox from '../ClientBox/ClientBox';

const Clients = () => {

    const [clients, setClients] = useState([]);

    useEffect(() => {

        const url = `https://jsonplaceholder.typicode.com/users`;
        fetch(url)
            .then(res => res.json())
            .then(data => setClients(data))
    }, [])

    return (
        <Row className='container mx-auto h-100' xs={2} md={3} lg={4}>

            {

                clients.map((client) => {

                    return <ClientBox key={client.id} data={client}></ClientBox>
                })

            }

        </Row>
    );
};

export default Clients;