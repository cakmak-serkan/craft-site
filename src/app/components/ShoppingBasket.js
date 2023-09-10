import React, { useState } from 'react';
import styles from '../styles/BasketSideBar.module.css';
import "@fortawesome/fontawesome-free/css/all.css";
import BasketSidebar from './BasketSidebar';

const ShoppingBasket = () => {
  const [isBasketOpen, setIsBasketOpen] = useState(false);

  const toggleBasket = () => { setIsBasketOpen(!isBasketOpen); };

  return (
    <div className={styles.shoppingBasket}>
      <div className={`notification`} onClick={toggleBasket}>
        <span
          className="notification-number"
          style={{ margin: "4px -1px 0px 0px" }}
        >
          3
        </span>
        <i
          className="fa-solid fa-basket-shopping"
          style={{ fontSize: "x-large", margin: "7px 0px 0px 0px" }}
        ></i>
      </div>

      {isBasketOpen && (
        <div className={`${styles.overlay} ${styles.active}`} styles={{display:"flex",justifyContent:"end" }} >
          <BasketSidebar onClose={toggleBasket} />
        </div>
      )}
    </div>
  );
};

export default ShoppingBasket;    