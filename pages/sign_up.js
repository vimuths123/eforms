import Head from 'next/head'
import React from 'react'
import Header from '../components/header'

const SignUp = () => {
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
                                        <small>
                                            Create a free account to access your document. <br/>
                                            No credit card or payment required.
                                        </small>

                                        <div className="form-floating mb-3 mt-4">
                                            <input type="email" className="form-control form-control-md" id="floatingInput" placeholder="name@example.com"/>
                                            <label className='signuplabel' for="floatingInput">Email address</label>
                                        </div>

                                        <div className="form-floating mb-3">
                                            <input type="password" className="form-control form-control-md" 
                                            id="floatingInput" placeholder="name@example.com"/>
                                            <label className='signuplabel' for="floatingInput">Password</label>
                                        </div>

                                        <div className="form-floating mb-5">
                                            <input type="password" className="form-control form-control-md" 
                                            id="floatingInput" placeholder="name@example.com"/>
                                            <label className='signuplabel' for="floatingInput">Confirm Password</label>
                                        </div>

                                       
                                        <button className="btn signinbtn btn-md btn-block" type="submit">Continue</button>

                                        <div className='mt-2'>Already have an account? <a className='signupspan' href="#">Log In</a></div>

                                       
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

export default SignUp