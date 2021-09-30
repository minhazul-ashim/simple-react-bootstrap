import './BookingForm.css'
import React from 'react';
import { Form } from 'react-bootstrap';

const BookingForm = () => {
    return (
        <div className='form-bg d-flex flex-column align-items-center'>
            <div className="form-bg-overlay py-5">
                <h2 className='text-info text-center'>Please fill out the form.</h2>
                <form className='w-50 mx-auto' action="">
                    <input className='form-control my-1' type="text" placeholder='Your name' />
                    <input className='form-control my-1' type="tel" placeholder='Your contact number' />
                    <Form.Select className='mb-1' aria-label="Default select example">
                        <option>Select your dining</option>
                        <option value="1">Snacks</option>
                        <option value="2">Lunch</option>
                        <option value="3">Dinner</option>
                    </Form.Select>
                    <input className='form-control my-1' type="number" placeholder='Number of guests' />
                    <button className='btn btn-success'>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default BookingForm;