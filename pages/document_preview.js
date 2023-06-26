import React, { useEffect, useState } from "react";
import HeaderBar from "../components/header";
// import styles from '../styles/Home.module.css';
import Image from 'next/image';
import { useRouter } from "next/router";
import Link from "next/link";
import jsPDF from 'jspdf';

const documentPreview = () => {

  const router = useRouter();
  const [inputValue, setInputValue] = useState('')
  const [appendedComponents, setAppendedComponents] = useState([]);
  const [logged, setLogged] = useState(false);

  const downloadPDF = () => {
    const topic = localStorage.getItem('inputValue');
    const doc = new jsPDF();

    // var xOffset = doc.internal.pageSize.width / 2;

    // Set the font size and style for the first text
    // doc.setFontSize(20);
    // doc.setFont('helvetica', 'bold');
    // doc.text(topic, xOffset, 18, { align: 'center' });

    // Set the font size and style for the second text
    // doc.setFontSize(12);

    // var height = 20;

    const storedData = localStorage.getItem('questrionArr');
    const storedArray = JSON.parse(localStorage.getItem('answers'));

    // if (storedData) {
    //   const parsedData = JSON.parse(storedData);

    //   if (storedArray && storedArray.length) {
    //     if (parsedData.completion && parsedData.completion.length) {
    //       storedArray.forEach((item, index) => {
    //         if (height > doc.internal.pageSize.height - 10) {
    //           doc.addPage(); // Add a new page if the current height exceeds the available vertical space
    //           height = 20; // Reset the height for the new page
    //         }

    //         height += 10;
    //         doc.setFont('helvetica', 'bold');
    //         doc.text(parsedData.completion[index], 10, height, { align: 'left' });

    //         height += 6;
    //         doc.setFont('helvetica', 'normal');
    //         doc.text(storedArray[index], 10, height, { align: 'left' });
    //       });
    //     }
    //   }
    // }

    // const doc = new jsPDF();

    const textContent = JSON.parse(localStorage.getItem('formdata'));

const textOptions = {
  maxWidth: 180, // Maximum width of the text
};

const pageHeight = doc.internal.pageSize.getHeight(); // Get the height of the page
let cursorY = 10; // Initial cursor position

const lines = doc.splitTextToSize(textContent, textOptions.maxWidth); // Split the text into lines

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];

  if (cursorY > pageHeight - 10) {
    doc.addPage();
    cursorY = 10;
  }

  doc.text(line, 10, cursorY, textOptions);
  cursorY += 10; // Increment cursor position by a fixed value (adjust as needed)
}




    // Save the PDF
    doc.save('document.pdf');
  };

  useEffect(() => {
    setInputValue(localStorage.getItem('inputValue'));
    const storedData = localStorage.getItem('questrionArr');
    const storedArray = JSON.parse(localStorage.getItem('answers'));

    const storedUser = sessionStorage.getItem('user');
    if (storedUser !== null) {
      setLogged(true)
    }

    if (storedData) {
      const parsedData = JSON.parse(storedData);

      if (storedArray && storedArray.length) {
        if (parsedData.completion && parsedData.completion.length) {
          storedArray.map((item, index) => {
            if (index < 11) {
              handleAppendComponent('question', parsedData.completion[index])
              handleAppendComponent('answer', storedArray[index])
            }
          });
        }
      }
    }
  }, [])

  const handleAppendComponent = (type, content) => {
    if (type == 'question') {
      var componentToAppend = <p className="question mb-1">{content}</p>;
    }

    if (type == 'answer') {
      var componentToAppend = <p className="answer mb-3">{content}</p>;
    }

    setAppendedComponents(prevComponents => [...prevComponents, componentToAppend]);
  };


  return (
    <>
      <HeaderBar />

      <div className="text-center mt-5">
        <h2 className="lh-lg text-center">Create: {inputValue}</h2>
        <p className="h3 lh-lg">
          Done! Please sign in or create a free account to download (no payment required)
        </p>
        {logged ?
          (
            <button className="btn btn-primary  btn-lg mb-4 w-200" id="headerBtn-1" onClick={downloadPDF}>
              Download
            </button>
          ) :
          (
            <button className="btn btn-primary  btn-lg mb-4 w-200" id="headerBtn-1">
              <Link href="/sign_up">Sign up</Link> / <Link href="/sign_in">Login</Link>
            </button>
          )
        }

      </div>

      <div className="container mt-2">
        <div className="row">
          <div className="col-12 col-md-9 custom-bg mx-auto">
            <div className="bg-white p-3 position-relative">
              <div className="border-around">
                <h2 className="topic mb-4">{inputValue}</h2>
                {
                  appendedComponents.map((component, index) => (
                    index === appendedComponents.length - 1 ? (
                      <div className="last_answer" key={index}>{component}</div>
                    ) : (
                      <div key={index}>{component}</div>
                    )
                  ))
                }
                <p className="esign">eSign</p>
                <p className="page-number">Page 1</p>
                {/* <p className="question mb-1">Question 1:</p>
              <p className="answer mb-3">Answer 1</p>
              <p className="question mb-1">Question 2:</p>
              <p className="answer mb-3">Answer 2</p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default documentPreview;
