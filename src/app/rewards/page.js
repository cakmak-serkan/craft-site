"use client";
import { Suspense } from "react";
import fakeProductData from "@/app/lib/data";
import SignIn from '@/app/components/SignIn';
import { useState, useEffect } from "react";
import Header from "../components/header/page";
import { useRouter } from 'next/navigation';

export default function Rewards() {
    const router = useRouter();    

   

    return (
        <>
        <div className="app">
          <div className="main-container">
            <Header pageName={"rewards"}  />
            {/* Page Subtitle */}
            {/* <div className="main-header d-flex justify-content-between align-items-center">
              <div className="content-section-title" style={{ marginBottom: "0px" }} >
                Apps in your plan
              </div>
            </div> */}
   
   
       <div className={`content-wrapper `} >
         {/*Main Section*/}
         <div className="content-section">
         
         
         <div className={`content-wrapper`} >
              {/*cards*/}
              <div className="content-section">
                {/*  <Suspense fallback={<LoadingPage />}>
               <Setups activeDropdown={activeDropdown} setActiveDropdown={setActiveDropdown} handleOverlayChange={handleOverlayChange} apps={apps} setApps={setApps} handleDeleteClick={handleDeleteClick} />


               </Suspense> */}
              </div>
            </div>







         <div className="divider"></div>
   
       <footer className="footer">
         <div className="footer-container">
           <div className="social">
             <a href="https://spotify.com">
               <img src="social-spotify.svg" alt="" />
             </a>
             <a href="https://facebook.com">
               <img src="social-facebook.svg" alt="" />
             </a>
             <a href="https://pinterest.com">
               <img src="social-pinterest.svg" alt="" />
             </a>
             <a href="https://instagram.com">
               <img src="social-instagram.svg" alt="" />
             </a>
             <a href="https://youtube.com">
               <img src="social-youtube.svg" alt="" />
             </a>
             <a href="https://twitter.com">
               <img src="social-twitter.svg" alt="" />
             </a>
           </div>
           <p>© 2023 Craft Coffee Company. All rights reserved.</p>
         </div>
       </footer>
    
              </div>
            </div>
   
           
          </div>
        </div>
      </>
    );
  }
  