import Head from 'next/head'
import React, { useState } from 'react'
import Header from '../components/header'
import { useRouter } from 'next/router';


const SignIn = () => {

    const [token, setToken] = useState('');
    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            "email": email,
            token,
        };

        const response = await fetch('https://l8bzcyhc56.execute-api.us-east-1.amazonaws.com/api/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }).then((response) => {
            // Get the status code
            const statusCode = response.status;

            // Handle the response based on the status code
            if (statusCode === 200) {
                router.push('/');
            } else if (statusCode === 401) {
                setErrorMessage('Invalid username or password');
            } else {
                setErrorMessage('Error happond please contact admin');
            }

            // Return the response
            return response;
        });


    }

    return (
        <div className='background_grey'>
            <Head>
                <title>Sign In</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />

            <div className="container max814">
                <section className="" >
                    <div className="container py-5 paddingt6">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-12 col-md-8">
                                <div className="rounded darkgrey">
                                    <div className="card-body px-5 py-4 text-center">
                                        <form onSubmit={handleSubmit}>
                                            <h3 className="mb-2">Access Your Document</h3>
                                            <small>Log in to your account to access your document.</small>

                                            <div className="form-outline mt-4">
                                                <input type="email" id="typeEmailX-2"
                                                    placeholder='contact@opendocs.com'
                                                    className="form-control form-control-md mb-4"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)} />
                                            </div>

                                            <div className="form-outline">
                                                <input type="password" id="typePasswordX-2"
                                                    placeholder='password'
                                                    className="form-control form-control-md"
                                                    value={token}
                                                    onChange={(e) => setToken(e.target.value)} />
                                            </div>
                                            <div className='mb-5 text-start text-danger'>
                                                {errorMessage && <span>{errorMessage}</span>}
                                            </div>


                                            <button className="btn signinbtn btn-md btn-block" type="submit">Continue</button>
                                        </form>
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