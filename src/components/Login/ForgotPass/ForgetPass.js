import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from '../Loading/Loading';

const ForgetPass = () => {
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);

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

    const submitValue = async (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        await sendPasswordResetEmail(email);
        if (!error) {
            alert('Verification email sent');
            toast('Please check your email for reset password link');
        }
    }

    return (
        <div>
            <Container className='mt-5'>
                <Form onSubmit={submitValue} className='w-75  mx-auto'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control name='email' type="email" placeholder="Enter email" required />
                    </Form.Group>
                    <br />
                    {error && <p className='text-danger'>{errorMessage} <br /></p>}
                    <Button className='d-block mx-auto px-5' variant="primary" type="submit">
                        Send Password Reset Email
                    </Button>
                    <br /><br />
                    Don't have an account? <Link to='/signup'>Sign Up</Link>
                </Form>
                {
                    sending && <>{sending && toast('Sending Email...')}<Loading /></>
                }
            </Container>
            <ToastContainer />
        </div>
    );
};

export default ForgetPass;