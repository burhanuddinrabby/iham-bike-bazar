import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
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
                    <Navbar.Brand as={Link} to='/'>IHAM BIKE BAZAR</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">

                        </Nav>
                        <Nav>
                            <CustomLink className='mx-2' to='/'>Home</CustomLink>
                            <CustomLink className='mx-2' to='/Blogs'>Blogs</CustomLink>
                        </Nav>

                        {
                            user &&
                            //if user if logged in nav bar will three links
                            <Nav>
                                <CustomLink className='mx-2' to='/manage-items'>Manage Items</CustomLink>
                                <CustomLink className='mx-2' to='/add-item'>Add Item</CustomLink>
                                <CustomLink className='mx-2' to='/my-items'>My Items</CustomLink>
                            </Nav>
                        }

                        <Navbar.Text>
                            {
                                user ? <button onClick={logout} className='btn btn-danger'>SignOut</button> : <CustomLink to='/login'>Login</CustomLink>

                            }
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;