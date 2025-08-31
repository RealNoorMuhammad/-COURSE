import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

import { Link } from 'react-router-dom'

export default function NotFound() {
    return (
        <>
            <Navbar />
       
            <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="container text-center">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <i className="bi bi-exclamation-triangle display-1 text-danger"></i>
                            <h1 className="display-1 fw-bold">404</h1>
                            <h2 className="mb-3">Page Not Found... or Rugged?</h2>
                            <p className="mb-4 lead">
                                You tried to unlock the secret guru knowledge, but this page has been 
                                <span className="fw-bold text-danger"> RUGGED</span> from the internet.  
                                Don’t worry, your $COURSE journey isn’t over yet.  
                                Return to the homepage and keep chasing financial freedom with our 
                                <span className="text-warning"> 100% totally real strategies™</span>.
                            </p>
                            <p className="text-muted fst-italic">
                                Remember: Success is just one overpriced PDF away.  
                            </p>
                            <Link className="btn btn-primary rounded-pill py-3 px-5 me-3" to="/">
                                Go Back To Home
                            </Link>
                            <Link className="btn btn-outline-warning rounded-pill py-3 px-5" to="/courses">
                                Browse Courses
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
