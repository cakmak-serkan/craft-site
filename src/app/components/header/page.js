"use client";
import { useState, useEffect } from "react";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import "@fortawesome/fontawesome-free/css/all.css";
 
function Header({pageName}) {  
  const router = useRouter();    
  const [error, setError] = useState(null);
  const Hiden = { display: "none" };    
  //const { session, update, status } = useSession();

console.log(`params: ${pageName}`);
  
 
    return (
      <>
        <div className="header">
          {/* Page Title */}
          <div className="header-menu">            
            <Link href="/" passHref legacyBehavior>
              <a className={pageName === "/" ? "menu-link is-active" : "menu-link"} href="/">                
              <i className="fa-solid fa-mug-hot"></i> &nbsp;CRAFT COFFEE
              </a>
            </Link>            
            <a className={pageName === "menu" ? "menu-link is-active" : "menu-link"} href="/menu">
            <i className="fa-solid fa-book-open"></i>
              &nbsp;MENU
            </a>                        
            <a className={pageName === "rewards" ? "menu-link is-active" : "menu-link"} href="/rewards">
            <i className="fa-solid fa-gift" style={{color:"#b7811f"}}> </i>            &nbsp;REWARDS
            </a>
          </div>

          
          <div className="header-profile">
            <div className="notification">
              <span className="notification-number">3</span>
              <svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-bell"> <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0" /> </svg>
            </div>            
            <img /* onClick={() => signIn("github")} */ className="profile-img" src="https://wallpaperaccess.com/full/1138014.jpg" alt="" />            
          </div>
        </div>
      </>
    );
}

export default Header;