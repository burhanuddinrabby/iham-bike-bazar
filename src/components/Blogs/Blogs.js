import React from 'react';
import './Blogs.css'
const Blogs = () => {
    return (
        <div>
            <div className='blog-container mt-3'>
                <div className='blog'>
                    <h2>What is differences between JavaScript and nodejs?</h2>
                    <p>Authentication is the process to verify someone who he/she is. And authorization is a process of verifying what specific applications, files, and data an user has access to view or edit.</p>
                </div>

                <div className="blog">
                    <h2>Why using firebase? What other option do we have to implement authorization?</h2>
                    <p>Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more. Back4App, AWS Amplify, Kuzzle, Couchbase, NativeScript are few alternatives of firebase</p>
                </div>

                <div className='blog'>
                    <h2>What other services does firebase provide other than authorization?</h2>
                    <p>Firebase provides database, storage, hosting, realtime database etc.</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;