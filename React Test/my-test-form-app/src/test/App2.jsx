import { useEffect, useState } from 'react';

const useValidation = (value, validations) => {
    const [isEmpty, setEmpty] = useState(true);
    const [minLengthError, setMinLengthError] = useState(false);
    const [maxLengthError, setMaxLengthError] = useState(false);
    const [regexError, setRegexError] = useState(false);

    useEffect(() => {
        setEmpty(value.trim() === '');

        if (validations.minLength) {
            setMinLengthError(value.length < validations.minLength);
        }

        if (validations.maxLength) {
            setMaxLengthError(value.length > validations.maxLength);
        }

        if (validations.isEmail) {
            const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
            setRegexError(!re.test(value));
        }

    }, [value, validations]);

    return { isEmpty, minLengthError, maxLengthError, regexError };
};

const useInput = (initialValue, validations) => {
    const [value, setValue] = useState(initialValue);
    const [isDirty, setDirty] = useState(false);

    const { isEmpty, minLengthError, maxLengthError, regexError } = useValidation(value, validations);

    const onChange = (e) => {
        setValue(e.target.value);
    };

    const onBlur = () => {
        setDirty(true);
    };

    return {
        value,
        isDirty,
        onChange,
        onBlur,
        isEmpty,
        minLengthError,
        maxLengthError,
        regexError,
    };
};

function App() {
    const login = useInput('', { isEmpty: true, minLength: 5, maxLength: 15 });
    const email = useInput('', { isEmpty: true, minLength: 5, maxLength: 15, isEmail: true });
    const password = useInput('', { isEmpty: true, minLength: 5, maxLength: 15 });
    const confirmPassword = useInput('', { isEmpty: true, minLength: 5, maxLength: 15 });

    const [passwordError, setPasswordError] = useState('');

    useEffect(() => {
        const validatePasswordMatch = () => {
            if (password.value !== confirmPassword.value) {
                setPasswordError('Passwords do not match');
            } else {
                setPasswordError('');
            }
        };

        validatePasswordMatch();
    }, [password.value, confirmPassword.value]);

    const isFormValid = !login.isEmpty && !email.isEmpty && !password.isEmpty && !confirmPassword.isEmpty &&
                        !login.minLengthError && !email.minLengthError && !password.minLengthError && 
                        !login.maxLengthError && !email.maxLengthError && !password.maxLengthError && 
                        !email.regexError && !passwordError;

    return (
        <div className="App">
            <form className="container">
                <h1>Test Registration</h1>

                {login.isDirty && login.isEmpty && <div className="error">Enter your login</div>
                || login.isDirty && login.minLengthError && <div className="error">Login must be at least 5 characters</div>
                || login.isDirty && login.maxLengthError && <div className="error">Login must be less than 15 characters</div>}

                <input
                    value={login.value}
                    onChange={login.onChange}
                    onBlur={login.onBlur}
                    name="login"
                    type="login"
                    placeholder="Your login..."
                    autoComplete="login"
                />

                {email.isDirty && email.isEmpty && <div className="error">Enter your email</div>
                || email.isDirty && email.minLengthError && <div className="error">Email must be at least 5 characters</div>
                || email.isDirty && email.maxLengthError && <div className="error">Email must be less than 15 characters</div>
                || email.isDirty && email.regexError && <div className="error">Enter a valid email</div>}

                <input
                    value={email.value}
                    onChange={email.onChange}
                    onBlur={email.onBlur}
                    name="email"
                    type="email"
                    placeholder="Your email..."
                    autoComplete="email"
                />

                {password.isDirty && password.isEmpty && <div className="error">Enter your password</div>
                || password.isDirty && password.minLengthError && <div className="error">Password must be at least 5 characters</div>
                || password.isDirty && password.maxLengthError && <div className="error">Password must be less than 15 characters</div>}

                <input
                    value={password.value}
                    onChange={password.onChange}
                    onBlur={password.onBlur}
                    name="password"
                    type="password"
                    placeholder="Your password..."
                    autoComplete="current-password"
                />

                {confirmPassword.isDirty && confirmPassword.isEmpty && <div className="error">Confirm your password</div>
                || passwordError && <div className="error">{passwordError}</div>}

                <input
                    value={confirmPassword.value}
                    onChange={confirmPassword.onChange}
                    onBlur={confirmPassword.onBlur}
                    name="confirmPassword"
                    type="password"
                    placeholder="Confirm your password"
                    autoComplete="new-password"
                />

                <button type="submit" disabled={!isFormValid} onClick={(e) => { console.log("test: "); e.preventDefault() }}>
                    Submit
                </button>
            </form>
        </div>
    );
}

export default App;
