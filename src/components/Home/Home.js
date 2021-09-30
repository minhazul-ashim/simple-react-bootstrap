import './Home.css'
import React from 'react';
import { useHistory } from 'react-router';

const Home = () => {

    let history = useHistory();

    const handleFeature = () => {

        history.push('/featured')
    }

    return (
        <>
            <div className="home-container">
                <div className="p-5 home-overlay d-flex flex-column align-items-center">
                    <h1 className='text-light text-center'>Taste Life</h1>
                    <p className='text-light text-center lead'>
                        The only one who cares genuinely for satisfying your cravings.
                    </p>
                    <button onClick={handleFeature} className='btn btn-outline-danger btn-sm'>Check Featured</button>
                </div>
            </div>
            <h2 className='celebration text-center my-3'>Have a celebration?</h2>
            <div className="celebration-image">
                <div className="celebration-text d-flex flex-column align-items-center">
                    <h3 className='p-5 text-light text-center'>Book your program now!</h3>
                    <button className='btn btn-outline-danger'>Book now</button>
                </div>
            </div>
        </>
    );
};

export default Home;