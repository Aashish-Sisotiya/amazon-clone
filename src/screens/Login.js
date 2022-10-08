import React from 'react'
import "./css/Login.css"
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase"
// import { async } from '@firebase/util';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    let navigate = useNavigate();

    const signIn = async (e) => {
        e.preventDefault();
        try {
            const user = await signInWithEmailAndPassword(auth, email, password);
            console.log(user);

            if (auth) {
                navigate('/');
            }

        } catch (error) {
            alert(error.message);
        }
    }

    const register = async (e) => {
        e.preventDefault();
        try {
            const user = await createUserWithEmailAndPassword(auth, email, password);
            console.log(user);
        } catch (error) {
            alert(error.message);
        }
    }
    return (

        <div className='login'>
            <Link to='/'>
                <img className='login_logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="Logo" />
            </Link>
            <div className='login_container'>
                <h1>Sign In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} />
                    <h5>Password</h5>
                    <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button onClick={signIn} type='submit' className='login_signInButton' >Sign In</button>
                    <p>
                        By signing-in you agree to Amazon Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and out Interest-Based Ads Notice.
                    </p>

                    <button onClick={register} className='login_registerButton'>Create your amazon account</button>
                </form>
            </div>
        </div>


    )
}

export default Login