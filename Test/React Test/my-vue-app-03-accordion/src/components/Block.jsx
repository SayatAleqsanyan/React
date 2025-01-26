import { useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes for validation

export const Block = ({text, max = 50 }) => {
    let [showLess, setShowLess] = useState(true);

    if (text.length <= max) 
        return <div>{text}</div>; 

    return (
        <div>
            <p>{showLess ? `${text.substring(0, max)} ...` : text}</p>
            <a href="#" onClick={e => {
                e.preventDefault();
                setShowLess(!showLess);
            }}>
                {showLess ? 'Show more' : 'Show less'}
            </a>
        </div>
    );
};

// Adding prop validation
Block.propTypes = {
    text: PropTypes.string.isRequired, // text should be a required string
    max: PropTypes.number, // max should be a number
};