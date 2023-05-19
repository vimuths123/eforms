import Head from 'next/head';


import React from 'react'
import Header from '../components/header';
import Image from 'next/image';

import { connect } from 'react-redux';
import { setInputValue, fetchResult } from '../redux/store';


const ChatgbtP1 = ({ inputValue, setInputValue, fetchResult, result, loading, error }) => {

  // console.log(result.completion.count())

  return (
    // <>
    //   <HeaderBar />

    //   {/* body-content */}
    //   {/* bg= > #353541 */}

    //   <div className="text-center mt-5">
    //     <h2 className="lh-lg">Create: California lease agreement</h2>
    //     <p className="h3 lh-lg">
    //       We’re going to ask you a series of step by step questions to build
    //       your agreement.
    //     </p>
    //     <p className="h6 lh-lg">1 of 23 questions answered</p>
    //   </div>

    //   <div className="middle-content-box-1 container text-center p-1 rounded-3 d-flex align-content-between flex-wrap">
    //     <div className="middle-content-box-section-1  m-3 p-3 rounded-3">
    //       <div className="row">
    //         <div className="col-1">
    //           <img src="chat-symbol-Group.svg" />
    //         </div>
    //         <div className="col-11">
    //           <p className="text-left">
    //             Great! I will guide you through the process of creating a
    //             California lease agreement by asking you a series of questions.
    //             Please provide accurate and detailed information as you respond
    //             to the questions. Once we have collected all the necessary
    //             information, I'll help you create the lease agreement. Let's
    //             start with the first question. What is the full legal name of
    //             the landlord or property management company?
    //           </p>
    //         </div>
    //       </div>
    //     </div>

    //     {/* <div className="middle-content-box-2"></div> */}

    //     <div className="middle-content-box-3  m-3">
    //       <textarea
    //         className="form-control"
    //         placeholder="Please type your annswer"
    //         id="floatingTextarea"
    //       >
    //         Please type your annswer
    //       </textarea>
    //     </div>
    //   </div>
    // </>
    <div className='background_grey'>
      <Head>
        <title>Payment</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div className="container max991">
        <div className="text-center mt-5">
          <h3 className="lh-lg">Create: { inputValue }</h3>
          <p className="lh-lg mb-3">
            We’re going to ask you a series of step by step questions to build
            your agreement.
          </p>
          <p className="lh-lg mb-3">1 of {result?.completion.length} questions answered</p>
        </div>
        <div className="row">
          <div className="col text-center">

            <div className="row row-cols-12 g-4 g-lg-4">
              <div className="col-md-12">
                <div className="dark_gray text-white p-4 rounded height600 mb-3">
                  <div className="middle-content-box-section-1  p-3 rounded-3">
                    <div className="row">
                      <div className="col-1">
                        <img src="chat-symbol-Group.svg" />
                      </div>
                      <div className="col-11">
                        <p className="text-start">
                          Great! I will guide you through the process of creating a { inputValue } by asking you a series of questions.
                          Please provide accurate and detailed information as you respond
                          to the questions. Once we have collected all the necessary
                          information, I'll help you create the lease agreement. Let's
                          start with the first question. {result?.completion[0]}?
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


            </div>



          </div>
        </div>
      </div>

    </div>
  );
};

// export default ChatgbtP1;

const mapStateToProps = (state) => ({
  inputValue: state.input.inputValue,
  result: state.input.result,
  loading: state.input.loading,
  error: state.input.error,
});

const mapDispatchToProps = { setInputValue, fetchResult };

export default connect(mapStateToProps, mapDispatchToProps)(ChatgbtP1);