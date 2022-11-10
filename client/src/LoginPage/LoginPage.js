import React from 'react'

import {
    loginForm,
    formLabels,
    title,
    sub_btn,
    p,
    container
} from "./LoginPageElements"
import styled from 'styled-components';

import { Link } from 'react-router-dom'


function LoginPage() {
    return (
        <div style={{display: 'flex', textAlign:'center', alignItems: 'center', justifyContent:'center', minHeight: '30em'}}>
            <form>
                <div style={{ borderRadius: 2, borderStyle: 'solid', padding: 20, borderRadius: 20}}>
                    <h1>Sign in to us</h1>
                    <div action="/home">
                        <p>
                            <label>Username or email address</label><br/>
                            <input type="text" name="first_name" required />
                        </p>
                        <p>
                            <label>Password</label>
                            <br/>
                            <input type="password" name="password" required />
                        </p>
                        <p>
                            <button>Login</button>
                        </p>
                    </div>
                    <footer>
                        <p>First time? <Link to="/register">Create an account</Link>.</p>
                        <p><Link to="/">Back to Homepage</Link>.</p>
                    </footer>
                </div>

            </form>
        </div>

    )
}

export default LoginPage;