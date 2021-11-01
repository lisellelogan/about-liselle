import React from 'react';
import { useHistory } from 'react-router-dom';

const Welcome = () => {

    const history = useHistory();
    const handleClick = () => history.push('/about');

    return(
        <>
            <h3>Hi, I'm</h3>
            <h1>Liselle Logan</h1>
            <p>Full-Stack Software Engineer</p>

            <button>Download Resume</button> <button onClick={handleClick}>Learn More</button>
        </>
    )
}

export default Welcome;