import { useState } from 'react';

const RegisterForm = () => {
    
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    
    let users = JSON.parse(localStorage.getItem('users')) || [];

    const validateForm = () => {
        setErrorMessage('');  

        if (!username || !email || !password) {
            setErrorMessage('All fields are required.');
            return false;
        }

        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailRegex.test(email)) {
            setErrorMessage('Please enter a valid email address.');
            return false;
        }

        if (password.length < 6) {
            setErrorMessage('Password must be at least 6 characters long.');
            return false;
        }

        return true;
    };

    const register = () => {
        if (validateForm()) {
            const newUser = {
                id: users.length + 1,
                name: username,
                email: email,
                password: password,
            };

            users = [...users, newUser];
            localStorage.setItem('users', JSON.stringify(users));  
        
            setUsername('');
            setEmail('');
            setPassword('');
        }
    };

    const handleUsernameChange = (e) => setUsername(e.target.value);
    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);

    return (
        <div>
            <form
                onSubmit={(e) => {
                    e.preventDefault(); 
                    register();
                }}
                className="register-form"
            >
                <div>
                    <input
                        className="username"
                        type="text"
                        value={username}
                        onChange={handleUsernameChange}
                        placeholder="Username"
                        autoComplete="username"
                    />
                </div>
                <div>
                    <input
                        className="email"
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                        placeholder="Email"
                        autoComplete="email"
                    />
                </div>
                <div>
                    <input
                        className="password"
                        type="password"
                        value={password}
                        onChange={handlePasswordChange}
                        placeholder="Password"
                        autoComplete="new-password"
                    />
                </div>

                {errorMessage && <div className="error-message">{errorMessage}</div>}

                <div>
                    <button type="submit">Register</button>
                </div>
            </form>
        </div>
    );
};

export default RegisterForm;
