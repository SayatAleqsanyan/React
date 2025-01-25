import PropTypes from 'prop-types';

const Wello = ({ userName = 'User', age, gender }) => {
    return (
        <div>
            <h1>Wello {userName}, your age is {age}, your gender is {gender}</h1>
            <input type="text" />
        </div>
    );
};

// Ավելացնել PropTypes ստուգում
Wello.propTypes = {
    userName: PropTypes.string,
    age: PropTypes.number,
    gender: PropTypes.string
};

export default Wello;