import PropTypes from 'prop-types';

export const Block = ({ userName = 'User', age, gender }) => { 
    return (
        <div>
            <h1>Wello {userName}, your age is {age}, your gender is {gender}</h1>
            <input type="text" />
        </div>
    );
};

// Ավելացնել PropTypes ստուգում
Block.propTypes = {
    userName: PropTypes.string,
    age: PropTypes.number,
    gender: PropTypes.string
};
