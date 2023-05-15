import Head from 'next/head';
// import styles from '../styles/Home.module.css';

import React from 'react'
import Header from '../components/header';

const Home = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container">
        <Head>

        </Head>
        <div className="row">
          <div className="col">
            Column
          </div>
          <div className="col">
            Column
          </div>
          <div className="col">
            Column
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home