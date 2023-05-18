import Head from 'next/head';


import React from 'react'
import Header from '../components/header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import HomeFooter from '../components/homefooter';

const Payment = () => {
    return (
        <div className='background_grey'>
            <Head>
                <title>Payment</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />

            <div className="container max991">
                <div className="row">
                    <div className="col text-center">
                        <h2 className='text-white my-5'>Payment</h2>

                        <div className="row row-cols-1 row-cols-md-12 g-4 g-lg-4">
                            <div className="col-md-5">
                                <div className="dark_gray text-white p-4 rounded">
                                    <h4 className='text-start'>Subscribe to Forms.ai</h4>
                                    <h4 className='text-start greenfont'>$8 / month</h4>
                                    <div className='text-start'>
                                        By paying you agree to the terms and conditions outlined
                                        here on our website: https://www.forms.ai/ <br />
                                        terms-and-conditions
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-7">
                                <div className="dark_gray text-white p-4 rounded">
                                    <form className='mb-3'>
                                        <div className="form-group text-start mb-3">
                                            <label htmlFor="name">Name</label>
                                            <input type="text" className="form-control form-control-lg" id="name" />
                                        </div>
                                        <div className="form-group text-start mb-3">
                                            <label htmlFor="email">Email</label>
                                            <input type="email" className="form-control form-control-lg" id="email" />
                                        </div>
                                        <div className="form-group text-start mb-4">
                                            <label htmlFor="card_info">Card Information</label>
                                            <div className='position-relative'>
                                                <input placeholder='1234 1234 1234 1234' type="text"
                                                    className="form-control card_number form-control-lg" />
                                                <Image src="/images/cards.png" alt="My Image" width={80} height={25} className='me-2 position-absolute cardtypes' />
                                                <div className="row">
                                                    <div className='col-8 pe-0'>
                                                        <input type="text" placeholder='MM / YY'
                                                            className="form-control form-control-lg no_top_border card_expire" />
                                                    </div>
                                                    <div className='col-4 ps-0'>
                                                        <input type="text" placeholder='CVC'
                                                            className="form-control form-control-lg no_top_border card_cvv" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <button className="btn signinbtn btn-md btn-block btn-lg" type="submit">Subscribe</button>
                                    </form>
                                    <small className='text-center'>
                                        By confirming your subscription, you allow Forms.ai to charge your card
                                        for this payment and future payments in accordance with their terms. You
                                        can always cancel your subscription.
                                    </small>
                                </div>
                            </div>

                        </div>



                    </div>
                </div>
            </div>

        </div>
    )
}

export default Payment