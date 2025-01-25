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
            const re = /^[a-zA-Z0-9._-]+@[a-zAZO0-9.-]+\.[a-zA-Z]{2,6}$/;
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

    const [loginError, setLoginError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Ստուգում ենք, արդյոք այս լոգինը արդեն զբաղված չէ
        let users = JSON.parse(localStorage.getItem('users')) || [];
        const isLoginTaken = users.some(user => user.login === login.value);

        if (isLoginTaken) {
            setLoginError('Login is already taken');
            return;
        } else {
            setLoginError('');
        }

        // Ստուգում ենք, արդյոք գաղտնաբառը և հաստատման գաղտնաբառը համընկնում են
        if (password.value !== confirmPassword.value) {
            setConfirmPasswordError('Passwords do not match');
            return;
        } else {
            setConfirmPasswordError('');
        }

        const validationErrors = {
            loginError: login.isEmpty ? 'Login is required' : (login.minLengthError ? 'Login must be at least 5 characters' : ''),
            emailError: email.isEmpty ? 'Email is required' : (email.regexError ? 'Invalid email format' : ''),
            passwordError: password.isEmpty ? 'Password is required' : (password.minLengthError ? 'Password must be at least 5 characters' : ''),
        };

        const hasErrors = Object.values(validationErrors).some(error => error);

        if (!hasErrors) {
            const userId = users.length + 1;

            const userData = {
                id: userId,
                login: login.value,
                email: email.value,
                password: password.value,              
            };

            // Ավելացնում ենք օգտատիրոջ տվյալները localStorage-ում
            users.push(userData);
            localStorage.setItem('users', JSON.stringify(users));

            // Արտածում ենք նոր օգտատիրոջ տվյալները
            console.log('User Data:', userData);

            // Դաշտերը մաքրում ենք հաջող գրանցումից հետո
            login.setValue('');
            email.setValue('');
            password.setValue('');
            confirmPassword.setValue('');
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
                {loginError && <div className="error">{loginError}</div>}  {/* Login error message */}

                <input
                    value={email.value}
                    onChange={email.onChange}
                    onBlur={email.onBlur}
                    name="email"
                    type="email"
                    placeholder="Your email..."
                    autoComplete="email"  // Proper autocomplete for email field
                />
                {email.isDirty && email.isEmpty && <div className="error">Email is required</div>}
                {email.isDirty && email.regexError && <div className="error">Invalid email format</div>}

                <input
                    value={password.value}
                    onChange={password.onChange}
                    onBlur={password.onBlur}
                    name="password"
                    type="password"
                    placeholder="Your password..."
                    autoComplete="new-password"  // Proper autocomplete for password field
                />
                {password.isDirty && password.isEmpty && <div className="error">Password is required</div>}
                {password.isDirty && password.minLengthError && <div className="error">Password must be at least 5 characters</div>}

                <input
                    value={confirmPassword.value}
                    onChange={confirmPassword.onChange}
                    onBlur={confirmPassword.onBlur}
                    name="confirmPassword"
                    type="password"
                    placeholder="Confirm your password..."
                    autoComplete="new-password"  // Proper autocomplete for password confirmation field
                />
                {confirmPasswordError && <div className="error">{confirmPasswordError}</div>}  {/* Confirm password error */}

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default App;
