import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from "@/app/styles/MainHeader.module.css";

const MainHeader = ({isSignInOn, setSignInOn, menuToggle}) => {
    
  const router = useRouter();

  const CreateNavTo = () => {
    router.push('/account/create');
  };


  return (    
    <header className="pageHeader">
      <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <a href="index.html">
            {/* <img src="img/logo.svg" alt="Starbucks" /> */}
            <img src="logo.png" className="logo" alt='Craft coffee' />
          </a>
        </div>

        <ul className="navbar-nav-left">
          <li>
            <a href="#">Menu</a>
          </li>
          <li>
            <a href="#">Rewards</a>
          </li>
          <li>
            <a href="#">Gift Cards</a>
          </li>
        </ul>

        <ul className="navbar-nav-right">
          <li>
            <a href="#">
              <img src="marker.svg" alt="" />
              <span>Find a store</span>
            </a>
          </li>
          <li><button className="btn btn-dark-outline" onClick={()=> setSignInOn(true) } >Sign in</button></li>
          <li><button className="btn btn-dark" onClick={()=>  router.push('/account/create') }>Join now</button></li>
        </ul>
        
        {/* Hamburger Menu */}
        <button type="button" className="hamburger" id="menu-btn" onClick={() => menuToggle}>
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>
    </nav>
 </header>
  );
};

export default MainHeader;
