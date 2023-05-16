import Head from 'next/head'
import React from 'react'
import Header from '../components/header'

const SignIn = () => {
    return (
        <div className='background_grey'>
            <Head>
                <title>Sign In</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />

            <div className="container max814">
                <section className="" >
                    <div className="container py-5">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-12 col-md-8">
                                <div className="rounded darkgrey">
                                    <div className="card-body px-5 py-4 text-center">

                                        <h3 className="mb-2">Access Your Document</h3>
                                        <small>Log in to your account to access your document.</small>

                                        <div className="form-outline mt-4">
                                            <input type="email" id="typeEmailX-2" placeholder='contact@opendocs.com' className="form-control form-control-md mb-4" />
                                        </div>

                                        <div className="form-outline">
                                            <input type="password" id="typePasswordX-2" placeholder='password' className="form-control form-control-md mb-5" />
                                        </div>


                                        <button className="btn signinbtn btn-md btn-block" type="submit">Continue</button>

                                        <div className='mt-2'>Don’t have an account? <a className='signupspan' href="#">Sign up for free</a></div>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </div>
    )
}

export default SignIn