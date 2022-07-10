import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function Header() {
    return (
        <div>
            <div className="navWrapper">
                <div className="navContainer">
                    <Link href="/">
                        <div className="logoWrapper">
                            <div className="logoImgWrapper">
                                <Image width="30" height="30" src="/images/logo.png" alt="" />
                            </div>
                            <span className="logo1">Job</span>
                            <span className="logo2">bee</span>
                        </div>
                    </Link>
                    <div className="btnsWrapper">
                        <a href="/employeer/jobs/new">
                            <button className="postAJobButton">
                                <span>Post A Job</span>
                            </button>
                        </a>

                        <a href="/login">
                            <button className="loginButtonHeader">
                                <span>Login</span>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
