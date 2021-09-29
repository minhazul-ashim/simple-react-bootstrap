import './Foods.css'
import React, { useEffect, useState } from 'react';
import { Container, FormControl, InputGroup, Row } from 'react-bootstrap';
import Button from '@restart/ui/esm/Button';
import FoodBox from '../FoodBox/FoodBox';

const Foods = () => {

    const [foods, setFood] = useState([]);

    const [search, setSearch] = useState([]);

    const handleSearch = (event) => {

        const searchText = event.target.value;

        setSearch(searchText);
    }

    useEffect(() => {

        const searchURL = `https://themealdb.com/api/json/v1/1/search.php?s=${search}`

        fetch(searchURL)
            .then(res => res.json())
            .then(data => setFood(data.meals))

    }, [search])

    useEffect(() => {

        const url = 'https://themealdb.com/api/json/v1/1/search.php?s='
        fetch(url)
            .then(res => res.json())
            .then(data => setFood((data.meals)))
    }, [])

    return (
        <Container>
            <InputGroup className="mt-3 mb-5 px-5">
                <FormControl
                    placeholder="Search your meal"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    onChange={handleSearch}
                />
                <Button className='btn btn-outline-success' variant="outline-secondary" id="button-addon2">
                    Search
                </Button>
            </InputGroup>

            <Row xs={2} md={3} lg={4} className="g-4">

                {

                    foods.map(food => {

                        return <FoodBox data={food} key={food.idMeal}></FoodBox>
                    })
                }

            </Row>
        </Container>
    );
};

export default Foods;