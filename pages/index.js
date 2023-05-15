import Head from 'next/head';
// import styles from '../styles/Home.module.css';

import React from 'react'
import Header from '../components/header';

const Home = () => {
  return (
    <div className='background_grey'>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div className="container">
        <div class="row">
          <div class="col text-center">
            <h1 className='text-white my-5'>What form are you looking to create?</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home