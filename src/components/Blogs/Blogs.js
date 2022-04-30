import React from 'react';
import './Blogs.css'
const Blogs = () => {
    return (
        <div>
            <div className='blog-container mt-3'>
                <div className='blog'>
                    <h2>What are differences between JavaScript and nodejs?</h2>
                    <p>Javascript is a programming language that is used for writing scripts on the website but NodeJS is a Javascript runtime environment. JavaScript is used for client side and NodeJS is used for server side. Nodejs does not have capability to add HTML tags but JavaScript can add HTML tags using DOM.</p>
                </div>

                <div className="blog">
                    <h2>When should we use NodeJS and when should MongoDB?</h2>
                    <p>NodeJS is JavaScript runtime environment and MongoDB is a NoSQL database. NodeJS is used for server side where it can get, post, update or delete any data from database. When it comes to store something we will use MondoDB and to access data from database we will use NodeJS</p>
                </div>

                <div className='blog'>
                    <h2>What are the differences between NoSQL and SQL?</h2>
                    <p>NoSQL have dynamic schema where SQL have static schema. NoSQL are horizontally scalable but SQL are vertically scalable. NoSQL is used for storing data in the form of JSON but SQL is used for storing data in the form of SQL.
                    </p>
                </div>
                <div className='blog'>
                    <h2>What is JWT and how does it work?</h2>
                    <p>The full form of JWT is JSON Web Token. It is an open standard that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. When an user logs in jwt creates a token for that user and using that token it verifies if user is authorized or not. If not it takes action.</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;