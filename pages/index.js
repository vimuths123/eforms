import Head from 'next/head';
// import styles from '../styles/Home.module.css';


import React from 'react'
import Header from '../components/header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import HomeFooter from '../components/homefooter';


const Home = () => {
  return (
    <div className='background_grey'>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div className="container max814">
        <div className="row">
          <div className="col text-center">
            <h1 className='text-white my-5'>What form are you looking to create?</h1>
            <div className='position-relative'>
              <input type="text" className="form-control lh-lg ps-5"
                placeholder="Enter the name of a form (e.g., “Oregon Lease Agreement”)" />
              <FontAwesomeIcon icon={faSearch} className='position-absolute search_icon' />
            </div>
            <button type="button" className="btn btn-success my-5 home_btn">
              <span>
                <Image src="/images/icons/Comment.png" alt="My Image" width={16} height={10} className='me-2' />
                Begin
              </span>
            </button>
            <div className='d-flex'>
              <hr className='example_hr' />
              <span className='example_span mb-4'>Examples</span>
              <hr className='example_hr' />
            </div>



            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-2 g-lg-3">
              <div className="col">
                <div className="dark_gray text-white p-2 rounded homegriditem">
                  <span className='d-flex pb-3'>
                    <Image src="/images/icons/Comment-notfil.png" alt="My Image" width={16}
                      height={10} className='me-2 cment_nofill' />
                    <div className='text-start'>
                      "California residential lease agreement"
                    </div>
                  </span>
                  <div className='float-end me-2 usediv rounded'>
                    <span className='me-2'>Use</span>
                    <FontAwesomeIcon height={13} icon={faAngleRight} /></div>
                </div>
              </div>
              <div className="col">
                <div className="dark_gray text-white p-2 rounded homegriditem">
                  <span className='d-flex pb-3'>
                    <Image src="/images/icons/Comment-notfil.png" alt="My Image" width={16}
                      height={10} className='me-2 cment_nofill' />
                    <div className='text-start'>
                      "California residential lease agreement"
                    </div>
                  </span>
                  <div className='float-end me-2 usediv rounded'>
                    <span className='me-2'>Use</span>
                    <FontAwesomeIcon height={13} icon={faAngleRight} /></div>
                </div>
              </div>
              <div className="col">
                <div className="dark_gray text-white p-2 rounded homegriditem">
                  <span className='d-flex pb-3'>
                    <Image src="/images/icons/Comment-notfil.png" alt="My Image" width={16}
                      height={10} className='me-2 cment_nofill' />
                    <div className='text-start'>
                      "California residential lease agreement"
                    </div>
                  </span>
                  <div className='float-end me-2 usediv rounded'>
                    <span className='me-2'>Use</span>
                    <FontAwesomeIcon height={13} icon={faAngleRight} /></div>
                </div>
              </div>
              <div className="col">
                <div className="dark_gray text-white p-2 rounded homegriditem">
                  <span className='d-flex pb-3'>
                    <Image src="/images/icons/Comment-notfil.png" alt="My Image" width={16}
                      height={10} className='me-2 cment_nofill' />
                    <div className='text-start'>
                      "California residential lease agreement"
                    </div>
                  </span>
                  <div className='float-end me-2 usediv rounded'>
                    <span className='me-2'>Use</span>
                    <FontAwesomeIcon height={13} icon={faAngleRight} /></div>
                </div>
              </div>
              <div className="col">
                <div className="dark_gray text-white p-2 rounded homegriditem">
                  <span className='d-flex pb-3'>
                    <Image src="/images/icons/Comment-notfil.png" alt="My Image" width={16}
                      height={10} className='me-2 cment_nofill' />
                    <div className='text-start'>
                      "California residential lease agreement"
                    </div>
                  </span>
                  <div className='float-end me-2 usediv rounded'>
                    <span className='me-2'>Use</span>
                    <FontAwesomeIcon height={13} icon={faAngleRight} /></div>
                </div>
              </div>
              <div className="col">
                <div className="dark_gray text-white p-2 rounded homegriditem">
                  <span className='d-flex pb-3'>
                    <Image src="/images/icons/Comment-notfil.png" alt="My Image" width={16}
                      height={10} className='me-2 cment_nofill' />
                    <div className='text-start'>
                      "California residential lease agreement"
                    </div>
                  </span>
                  <div className='float-end me-2 usediv rounded'>
                    <span className='me-2'>Use</span>
                    <FontAwesomeIcon height={13} icon={faAngleRight} /></div>
                </div>
              </div>
              <div className="col">
                <div className="dark_gray text-white p-2 rounded homegriditem">
                  <span className='d-flex pb-3'>
                    <Image src="/images/icons/Comment-notfil.png" alt="My Image" width={16}
                      height={10} className='me-2 cment_nofill' />
                    <div className='text-start'>
                      "California residential lease agreement"
                    </div>
                  </span>
                  <div className='float-end me-2 usediv rounded'>
                    <span className='me-2'>Use</span>
                    <FontAwesomeIcon height={13} icon={faAngleRight} /></div>
                </div>
              </div>
              <div className="col">
                <div className="dark_gray text-white p-2 rounded homegriditem">
                  <span className='d-flex pb-3'>
                    <Image src="/images/icons/Comment-notfil.png" alt="My Image" width={16}
                      height={10} className='me-2 cment_nofill' />
                    <div className='text-start'>
                      "California residential lease agreement"
                    </div>
                  </span>
                  <div className='float-end me-2 usediv rounded'>
                    <span className='me-2'>Use</span>
                    <FontAwesomeIcon height={13} icon={faAngleRight} /></div>
                </div>
              </div>
              <div className="col">
                <div className="dark_gray text-white p-2 rounded homegriditem">
                  <span className='d-flex pb-3'>
                    <Image src="/images/icons/Comment-notfil.png" alt="My Image" width={16}
                      height={10} className='me-2 cment_nofill' />
                    <div className='text-start'>
                      "California residential lease agreement"
                    </div>
                  </span>
                  <div className='float-end me-2 usediv rounded'>
                    <span className='me-2'>Use</span>
                    <FontAwesomeIcon height={13} icon={faAngleRight} /></div>
                </div>
              </div>
            </div>



          </div>
        </div>
      </div>

      <HomeFooter/>
    </div>
  )
}

export default Home