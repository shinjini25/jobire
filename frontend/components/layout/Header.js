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
                            <Image width="97" height="50" src="/images/jobirelogo.png" alt="" />

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
                                <span>Login / Register</span>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
