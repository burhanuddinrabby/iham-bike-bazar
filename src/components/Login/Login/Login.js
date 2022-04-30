import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import Loading from '../Loading/Loading';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css'
import auth from '../../../firebase.init';

const Login = () => {
    const [signInWithGoogle, userByGoogle, loadingViaGoogle, errorByGoogle] = useSignInWithGoogle(auth);
    const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);
    const [checked, setChecked] = useState(false);

    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';
    const navigate = useNavigate();


    let errorMessage;
    if (error) {
        if (error.message === 'Firebase: Error (auth/wrong-password).') {
            errorMessage = 'Wrong Password Please Try Again';
        }
        else if (error.message === 'Firebase: Error (auth/user-not-found).') {
            errorMessage = 'User Not Found. Maybe invalid email or password';
        }
        else {
            errorMessage = error.message;
        }
    }
    errorByGoogle && (errorMessage = errorByGoogle.message);

    //navigating user to the previous page
    user && navigate(from, { replace: true });
    userByGoogle && navigate(from, { replace: true });

    //submitting and logging in with email and password
    const submitValue = async (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        await signInWithEmailAndPassword(email, password);
        const { data } = await axios.post('https://protected-peak-69494.herokuapp.com/login', { email });
        localStorage.setItem('token', data.token);
    }

    //logging in with google
    const handleSignInWithGoogle = () => {
        signInWithGoogle();
    }
    return (
        <div>
            <div className='text-center my-5'>
                <h1>Please
                    <span className='text-primary'> Login</span>
                </h1>
            </div>
            <Container className='mt-5'>
                <Form onSubmit={submitValue} className='w-75  mx-auto'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control name='email' type="email" placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name='password' type="password" placeholder="Password" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check onClick={() => setChecked(!checked)} type="checkbox" label="I agree terms and condition" />
                    </Form.Group>
                    <br />
                    {error && <p className='text-danger'>{errorMessage} <br /></p>}

                    <Button className='d-block mx-auto px-5' variant="primary" type="submit" disabled={!checked}>
                        Login
                    </Button>
                    <br /><br />

                    Don't have an account? <Link to='/signup'>Sign Up</Link>
                    <br /><br />

                    Forgot Password? <Link to='/forget-password'>Reset Password</Link>
                </Form>
                <div className="or-container">
                    <div></div>
                    <p>or</p>
                    <div></div>
                </div>
                {(loading || loadingViaGoogle) && <Loading />}
                {(loading || loadingViaGoogle) && !errorMessage && toast('Logging in please wait...')}
                <button className='btn btn-primary mx-auto d-block px-5' onClick={handleSignInWithGoogle}>Sign in with Google</button>
            </Container>
            <ToastContainer />
            <br />
        </div>
    );
};

export default Login;