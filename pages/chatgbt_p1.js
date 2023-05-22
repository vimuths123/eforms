import Head from 'next/head';


import React, { useEffect, useRef, useState } from 'react'
import Header from '../components/header';
import Image from 'next/image';

import { connect } from 'react-redux';
import { setInputValue, fetchResult } from '../redux/store';
import { useLocalStorage } from '../hooks/useLocalStorage'
import { useClientLocalStorage } from '../hooks/useClientLocalStorage'
import Question from '../components/question';
import Answer from '../components/answer';

const ChatgbtP1 = ({ }) => {

  const [form, setForm] = useState({});
  const [result, setResult] = useState({});
  const [inputValue, setInputValue] = useState('')

  const textareaRef = useRef(null);

  useEffect(() => {
    setInputValue(localStorage.getItem('inputValue').replace(/^"(.*)"$/, '$1'))
    const storedData = localStorage.getItem('questrionArr');
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setResult(parsedData.completion);
    }

    
  }, [])


  // const [count, setCount] = useState(0)

  const submitAnswer = () => {

    // Add answer to chat
    const answer = textareaRef.current.value;
    handleAppendComponent('answer', answer)
    textareaRef.current.value = '';

    // Add question to chat
    var qcount = localStorage.getItem('qcount');
    if (qcount) {
      handleAppendComponent('question', result[++qcount])
      localStorage.setItem('qcount', qcount);
      console.log(qcount)
    }
    // if (result) {
    //   var form = {
    //     "form_name": inputValue,
    //     "qa": [
    //       { "question": "What is your full name", "answer": "jeff boze" },
    //       { "question": "What is your date of birth", "answer": "02/03/1800" },
    //     ]
    //   }
    // }
  }

  const [appendedComponents, setAppendedComponents] = useState([]);

  const handleAppendComponent = (type, content) => {
    if(type == 'question'){
      var componentToAppend = <Question text={content}/>;
    }

    if(type == 'answer'){
      var componentToAppend = <Answer text={content}/>;
    }
    
    setAppendedComponents(prevComponents => [...prevComponents, componentToAppend]);
  };

  // console.log(result.completion.count())

  return (

    <div className='background_grey'>
      <Head>
        <title>Payment</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      {/* <button onClick={() => handleAppendComponent('question', 'question')}>Append question</button>
      <button onClick={() => handleAppendComponent('answer', 'answer')}>Append answer</button> */}

      <div className="container max991">
        <div className="text-center mt-5">
          {/* <h3 className="lh-lg">Create: {inputValue}</h3> */}
          <h3 className="lh-lg">
            <span dangerouslySetInnerHTML={{ __html: inputValue }} />
          </h3>
          <p className="lh-lg mb-3">
            We’re going to ask you a series of step by step questions to build
            your agreement.
          </p>
          <p className="lh-lg mb-3">1 of {(result && result.length) ? result.length : ''} questions answered
          </p>
        </div>
        <div className="row">
          <div className="col text-center">

            <div className="row row-cols-12 g-4 g-lg-4">
              <div className="col-md-12">
                <div className="dark_gray text-white p-4 rounded height600 mb-3 position-relative">
                  <div className="middle-content-box-section-1  p-3 rounded-3">
                    <div className="row">
                      <div className="col-1">
                        <Image src="/images/chat-symbol-Group.svg" alt="My Image" width={30}
                          height={30} />
                        {/* // <img src="chat-symbol-Group.svg" /> */}
                      </div>
                      <div className="col-11">
                        <p className="text-start">
                          Great! I will guide you through the process of creating a <span dangerouslySetInnerHTML={{ __html: inputValue }} /> by asking you a series of questions.
                          Please provide accurate and detailed information as you respond
                          to the questions. Once we have collected all the necessary
                          information, I'll help you create the lease agreement. Let's
                          start with the first question. {(result && result.length) ? result[0] : ''}?
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* <div className="middle-content-box-section-1 mt-2 p-3 rounded-3">
                    <div className="row">
                      <div className="col-1">
                        <Image src="/images/you.png" alt="My Image" width={30}
                          height={30} />
                      </div>
                      <div className="col-11">
                        <p className="text-start">
                          The name of the landlord is John Smith.
                        </p>
                      </div>
                    </div>
                  </div> */}

                  {appendedComponents.map((component, index) => (
                    <div key={index}>{component}</div>
                  ))}


                  <div className="middle-content-box-3 bottom-0 position-absolute tempmargin">
                    <div className='position-relative'>
                      <Image onClick={submitAnswer} className='position-absolute answer_clk' src="/images/icons/Send.png" alt="My Image" width={20}
                        height={20} />
                      <textarea
                        className="form-control pe-5"
                        placeholder="Please type your annswer"
                        id="floatingTextarea"
                        ref={textareaRef}
                      >
                        {/* Please type your annswer */}
                      </textarea>
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

export default ChatgbtP1;

