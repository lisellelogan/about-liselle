import React from 'react';
import { useHistory } from 'react-router-dom';

const Welcome = () => {
    const history = useHistory();
    return(
        <>
            <h3>Hi, I'm</h3>
            <h1>Liselle Logan</h1>
            <p>Full-Stack Software Engineer</p>

            <button>Download Resume</button> <button onClick={() => history.push('/about')}>Learn More</button>
        </>
    )
}

export default Welcome;