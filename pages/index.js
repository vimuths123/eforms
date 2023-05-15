import Head from 'next/head';
// import styles from '../styles/Home.module.css';


import React from 'react'
import Header from '../components/header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';


const Home = () => {
  return (
    <div className='background_grey'>
      <span className='text-start'>
        California residential lease agreement
      </span>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div className="container max814">
        <div class="row">
          <div class="col text-center">
            <h1 className='text-white my-5'>What form are you looking to create?</h1>
            <div className='position-relative'>
              <input type="text" class="form-control lh-lg ps-5"
                placeholder="Enter the name of a form (e.g., “Oregon Lease Agreement”)" />
              <FontAwesomeIcon icon={faSearch} className='position-absolute search_icon' />
            </div>
            <button type="button" class="btn btn-success my-5 home_btn">
              <span>
                <Image src="/images/icons/Comment.png" alt="My Image" width={16} height={10} className='me-2' />
                Begin
              </span>
            </button>
            <div className='d-flex'>
              <hr className='example_hr' />
              <span className='example_span'>Examples</span>
              <hr className='example_hr' />
            </div>



            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-2 g-lg-3">
              <div class="col">
                <div class="dark_gray text-white p-2 rounded">
                  <span>
                    <Image src="/images/icons/Comment-notfil.png" alt="My Image" width={16} height={10} className='me-2' />
                    <span className='text-start'>
                      California residential lease agreement
                    </span>
                  </span>
                </div>
              </div>
              <div class="col">
                <div class="dark_gray text-white p-2 rounded">Row column</div>
              </div>
              <div class="col">
                <div class="dark_gray text-white p-2 rounded">Row column</div>
              </div>
            </div>



          </div>
        </div>
      </div>
    </div>
  )
}

export default Home