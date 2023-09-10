"use client";
import React from "react";
import styles from "../styles/BasketSideBar.module.css";

const BasketSidebar = ({ onClose }) => {
  return (
    <div className={` ${styles.overlay} ${styles.active} `}>
    <div className={`${styles.sidebar} container`}>
      <div className="row">
        <div className="col-xs-12">
          <h2 className="text-center">Your Shopping Basket</h2>
        </div>
      </div>
      <div className="row flex-grow-1"> {/* This row stretches to take available space */}
        <div className="col-xs-12">
          {/* Content */}
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12 text-center">
          <button className="btn btn-danger" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
  );
};

export default BasketSidebar;
