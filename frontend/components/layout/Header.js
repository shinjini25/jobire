import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import AuthContext from '../../context/AuthContext';
import { useState, useContext, useEffect } from "react";

function Header() {

    const { user, loading, logout } = useContext(AuthContext);
    const logoutHandler = () => {
        logout();
    };
    return (
        <div>
            <div className="navWrapper">
                <div className="navContainer">
                    <Link href="/">
                        <div className="logoWrapper">
                            <Image width="97" height="50" src="/images/jobirelogo.png" alt="" />

                        </div>
                    </Link>
                    <div className="btnsWrapper">
                        <a href="/employeer/jobs/new">
                            <button className="postAJobButton mt-1">
                                <span>Post A Job</span>
                            </button>
                        </a>
                        {user ? (

                            <div className="btn dropdown-ml-3"><a className="btn dropdown-toggle user-link mr-4"
                                id="dropDownMenuButton"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false">
                                <span>Hi, {user.first_name}</span>
                            </a>
                                <div className="dropdown-menu" aria-labelledby="dropDownMenuButton" >

                                    <Link href="/employeer/jobs">
                                        <a className="dropdown-item">My Jobs</a>
                                    </Link>

                                    <Link href="/me/applied">
                                        <a className="dropdown-item">Jobs Applied</a>
                                    </Link>

                                    <Link href="/me">
                                        <a className="dropdown-item">Profile</a>
                                    </Link>

                                    <Link href="/upload/resume">
                                        <a className="dropdown-item">Upload Resume</a>
                                    </Link>


                                    <Link href="/">
                                        <a
                                            className="dropdown-item text-danger"
                                            onClick={logoutHandler}
                                        >
                                            Logout
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        ) : (
                            !loading && (
                                <a href="/login">
                                    <button className="loginButtonHeader mt-1">
                                        <span>Login / Register</span>
                                    </button>
                                </a>
                            )
                        )}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
