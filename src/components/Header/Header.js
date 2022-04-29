import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import CustomLink from '../CustomLink/CustomLink';
const Header = () => {
    const [user] = useAuthState(auth);

    //logout
    const logout = () => {
        signOut(auth);
    };

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">IHAM BIKE BAZAR</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">

                        </Nav>
                        <Nav>
                            <CustomLink className='mx-2' to='/'>Home</CustomLink>
                            <CustomLink className='mx-2' to='/services'>Services</CustomLink>
                            <CustomLink className='mx-2' to='/Blogs'>Blogs</CustomLink>
                            <CustomLink className='mx-2' to='/about'>About Me</CustomLink>
                        </Nav>
                        <Navbar.Text className='mt-3 ms-2 me-1 text-primary'>
                            {
                                user ? <p>{(user.displayName || user.email).slice(0, 8).toUpperCase()}</p> : ''
                            }
                        </Navbar.Text>
                        <Navbar.Text>

                            {
                                user ? <button onClick={logout}>SignOut</button> : <CustomLink to='/login'>Login</CustomLink>
                            }
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;