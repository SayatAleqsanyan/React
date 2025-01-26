import { useState, useEffect } from 'react';

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

    const handleSubmit = (e) => {
        e.preventDefault();

        const validationErrors = {
            loginError: login.isEmpty ? 'Login is required' : (login.minLengthError ? 'Login must be at least 5 characters' : ''),
            emailError: email.isEmpty ? 'Email is required' : (email.regexError ? 'Invalid email format' : ''),
            passwordError: password.isEmpty ? 'Password is required' : (password.minLengthError ? 'Password must be at least 5 characters' : ''),
            confirmPasswordError: confirmPassword.isEmpty ? 'Confirm Password is required' : (password.value !== confirmPassword.value ? 'Passwords do not match' : ''),
        };

        const hasErrors = Object.values(validationErrors).some(error => error);

        if (!hasErrors) {
            const userData = {
                login: login.value,
                email: email.value,
                password: password.value,
                confirmPassword: confirmPassword.value,
            };

            console.log('User Data:', userData);
        } else {
            console.log(validationErrors);  // Ցուցադրում ենք վելիդացիայի սխալները
        }
    };

    return (
        <div className="App">
            <form className="container" onSubmit={handleSubmit}>
                <h1>Test Registration</h1>

                <input
                    value={login.value}
                    onChange={login.onChange}
                    onBlur={login.onBlur}
                    name="login"
                    type="text"
                    placeholder="Your login..."
                    autoComplete="username"  // Proper autocomplete for username field
                />

                <input
                    value={email.value}
                    onChange={email.onChange}
                    onBlur={email.onBlur}
                    name="email"
                    type="email"
                    placeholder="Your email..."
                    autoComplete="email"  // Proper autocomplete for email field
                />

                <input
                    value={password.value}
                    onChange={password.onChange}
                    onBlur={password.onBlur}
                    name="password"
                    type="password"
                    placeholder="Your password..."
                    autoComplete="new-password"  // Proper autocomplete for password field
                />

                <input
                    value={confirmPassword.value}
                    onChange={confirmPassword.onChange}
                    onBlur={confirmPassword.onBlur}
                    name="confirmPassword"
                    type="password"
                    placeholder="Confirm your password..."
                    autoComplete="new-password"  // Proper autocomplete for password confirmation field
                />

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default App;
