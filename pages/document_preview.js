import React from "react";
import HeaderBar from "../components/header";
// import styles from '../styles/Home.module.css';
import Image from 'next/image';
import { useRouter } from "next/router";


const documentPreview = () => {

  const router = useRouter();

  return (
    <>
      <HeaderBar />

      {/* body-content */}
      {/* bg= > #353541 */}

      <div className="text-center mt-5">
        <h2 className="lh-lg text-center">Create: California lease agreement</h2>
        <p className="h3 lh-lg">
        Done! Please sign in or create a free account to download (no payment required)
        </p>
        <button className="btn btn-primary  btn-lg mb-4 w-200" id="headerBtn-1">Sign up /Login</button>
      </div>

      <div className="middle-content-box-1 container text-center p-1 rounded-3 d-flex align-content-between flex-wrap w-800">

        <div className="header-set-collections w-800">
        <div className=" m-3 p-3 rounded-3">
          
          {/* <h2 className="text-center">test</h2> */}
          {/* <img src="Bitmap.svg" /> */}
          <div className="row" >
          <div  className="col-12" id="doct-space-1" style={{display:"grid",justifyContent:"center"}}>
          <Image
             src="/images/Bitmap.svg"
             width={500}
             height={500}
             alt="document "

             className="doct-img"
         />


{/* <LeaseForm/> */}


</div>
</div>
        </div>

    
        </div>

        {/* <div className="middle-content-box-2"></div> */}

        
      </div>
    </>
  );
};

export default documentPreview;
