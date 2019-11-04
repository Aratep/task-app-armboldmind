import React, {useState, useEffect} from 'react';

import Input from "../../components/inputs/Input"
import Button from "../../components/button/Button"
import InputWithIcon from "../../components/inputs/InputWithIcon";
import eyeIcon from "../../images/eye.svg"
import hands from "../../images/hands.png";
import {API_URL} from "../../constants/api-details"
import history from "../../history"
import './styles.css';

const Login = ({...props}) => {
    const [pswdType, setPasswordType] = useState("password");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        if ( localStorage.getItem('authToken')) {
            history.push('/dashboard/category')
        }

    });

    function login(email, password) {
        const body = {email, password, osType: 3};

        fetch(`${API_URL}/auth/login`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                language: 1
            },
            body: JSON.stringify(body)
        })
            .then(res => res.json())
            .then(response => {
                console.log(response)

                if (response.success === true && response.message === 'ok') {
                    localStorage.setItem('authToken', response.data.authToken);
                    history.push('/')
                } else {
                    setError(response.message)
                }
            })
    }

    function onSignIn(e) {
        e.preventDefault();
        login(email, password)
    }

    function toggleType() {
        const type = pswdType === 'password' ? 'text' : 'password';
        setPasswordType(type)
    }

    return (
        <main className="login-page">
            <section className="signin-form">
                <div>
                    <h1>Sign in</h1>
                    <div className="login-message">Enter your email and password and login in your account</div>
                    {
                        error && <div className="error-message">{error}</div>
                    }

                    <form>
                        <div className="input-groups">
                            <Input
                                type="text"
                                label="Email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="input-group"
                            />
                            <InputWithIcon
                                type={pswdType}
                                label="Password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="input-group"
                                isIcon={true}
                                image={eyeIcon}
                                onClick={toggleType}
                            />
                        </div>
                        <Button onClick={onSignIn} text="sign in" className="signin-button"/>
                    </form>
                </div>
            </section>
            <section className="image-wrap">
                <img src={hands} alt='Hands'/>
            </section>
        </main>
    );
}

export default Login;
