"use client";
import { Suspense } from "react";
import fakeProductData from "@/app/lib/data";
import SignIn from '@/app/components/SignIn';
import { useState, useEffect } from "react";
import Header from "../components/header/page";
import { useRouter } from 'next/navigation';

export default function Menu() {
    const router = useRouter();    

    
    const DrinksClicked = async () => {
        try {
          /* const newSetup = { appID: 1, name: "Draft Setup", description: "Description", };  
          const response = await fetch(`/api/addNewSetup`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Cache-Control": "no-cache",
            },
            body: JSON.stringify(newSetup),
          });
       */
          /* if (response.ok) {
            const jsonData = await response.json();        
            toast.success(`"${newSetup.name}" created`)
            setApps(prevApps => [...prevApps, jsonData]);  
                            
          } else {
            console.error("Failed to add new setup");
            toast.error("Failed to add new setup")
          } */
        } catch (error) {
          console.error(error);
          toast.error(error);
        }
      };


    return (
        <>
        <div className="app">
          <div className="main-container">
            <Header pageName={"menu"}  />
            {/* Page Subtitle */}
            <div className="main-header d-flex justify-content-between align-items-center" style={{padding: "7px 0px 0px 28px"}}>
             {/*  <div className="content-section-title" style={{ marginBottom: "0px" }} >
                Drinks
              </div> */}              
              {/* Drinks */}
              <a className="menu-link-main" style={{ marginRight: "20px", borderRadius: "6px", borderBottom: "1px solid #00800052", color: "var(--content-title-color)", }} href="#" onClick={DrinksClicked}> <i class="fa-solid fa-mug-hot"></i> Drinks </a>
              {/* Food */}              
              <a className="menu-link-main" style={{ marginRight: "20px", borderRadius: "6px", borderBottom: "1px solid #00800052", color: "var(--content-title-color)", }} href="#" onClick={DrinksClicked}> <i class="fa-solid fa-cookie-bite"></i> Food </a>
              {/* At home */}              
              <a className="menu-link-main" style={{ marginRight: "20px", borderRadius: "6px", borderBottom: "1px solid #00800052", color: "var(--content-title-color)", }} href="#" onClick={DrinksClicked}> <i class="fa-solid fa-kitchen-set"></i> At Home </a>
              {/* Serveware */}              
              <a className="menu-link-main" style={{ marginRight: "20px", borderRadius: "6px", borderBottom: "1px solid #00800052", color: "var(--content-title-color)", }} href="#" onClick={DrinksClicked}> <i class="fa-solid fa-glass-water"></i> Serveware </a>
            </div> 
                                
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
  