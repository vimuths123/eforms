import React, { useEffect, useState } from "react";
import HeaderBar from "../components/header";
// import styles from '../styles/Home.module.css';
import Image from "next/image";
import { useRouter } from "next/router";

const documentPreview = () => {
  const router = useRouter();
  const [inputValue, setInputValue] = useState("");
  const [appendedComponents, setAppendedComponents] = useState([]);

  useEffect(() => {
    setInputValue(localStorage.getItem("inputValue"));
    const storedData = localStorage.getItem("questrionArr");
    const storedArray = JSON.parse(localStorage.getItem("answers"));

    if (storedData) {
      const parsedData = JSON.parse(storedData);

      if (storedArray && storedArray.length) {
        if (parsedData.completion && parsedData.completion.length) {
          storedArray.map((item, index) => {
            if (index < 11) {
              handleAppendComponent("question", parsedData.completion[index]);
              handleAppendComponent("answer", storedArray[index]);
            }
          });
        }
      }
    }
  }, []);

  const handleAppendComponent = (type, content) => {
    if (type == "question") {
      var componentToAppend = <p className="question mb-1">{content}</p>;
    }

    if (type == "answer") {
      var componentToAppend = <p className="answer mb-3">{content}</p>;
    }

    setAppendedComponents((prevComponents) => [
      ...prevComponents,
      componentToAppend,
    ]);
  };

  return (
    <>
      <HeaderBar />

      <div className="text-center mt-5">
        <h2 className="lh-lg text-center">
          Create: California lease agreement
        </h2>
        <p className="h3 lh-lg">
          Done! Please sign in or create a free account to download (no payment
          required)
        </p>
        <button className="btn btn-primary  btn-lg mb-4 w-200" id="headerBtn-1">
          Sign up / Login
        </button>
      </div>

      <div className="container mt-2">
        <div className="row">
          <div
            className="col-12 col-md-9 custom-bg mx-auto"
            id="content-outof-w-1"
          >
            <div
              className="bg-white p-5 position-relative"
              id="content-outof-w-2"
            >
              <div id="content-paper-3">
                <div id="content-paper-4">
                  <h1 className="topic mb-4" id="question-part-heading">
                    {inputValue}
                  </h1>
                  <div className="dob-body-content-1" id="question-part-line1">
                    {appendedComponents.map((component, index) => (
                      <div key={index} id="question-part-line1">
                        <div id="question-part-line2">{component}</div>
                      </div>
                    ))}
                  </div>
                  <p class="esign">eSign</p>
                  <p class="page-number">Page 1</p>
                  {/* <p className="question mb-1">Question 1:</p>
              <p className="answer mb-3">Answer 1</p>
              <p className="question mb-1">Question 2:</p>
              <p className="answer mb-3">Answer 2</p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default documentPreview;
