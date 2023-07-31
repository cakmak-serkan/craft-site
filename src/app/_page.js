"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import dynamic from "next/dynamic";
import fakeProductData from "./lib/data";
import MainHeader from '@/app/components/MainHeader';
import SignIn from './components/SignIn';



export default function Home() {



  


  // Set Loading true
  const [loading, setLoading] = useState(true);
  //const [status, setStatus] = useState("typing");
  const [width, setWidth] = useState(0);
  // styles
  const Hiden = { display: "none" };
  const [height, setHeight] = useState(0);

  const [isMobileMenuOn, setIsMobileMenuOn] = useState(false);
  const [products, setProducts] = useState(fakeProductData);
  const [selectedProduct, setSelectedProduct] = useState(products[0]);
  const [isSignInOn, setSignInOn] = useState(false);

  const vitrinProdClicked = async (selectedProd) => {
    console.log(`selected Produc: ${selectedProd.name}`);
    setSelectedProduct(selectedProd);
  };

  const menuToggle = async () => {
    console.log(`Mobile Menu toggled: ${isMobileMenuOn}`);
    setIsMobileMenuOn(isMobileMenuOn);
    //setSelectedProduct(selectedProd);
    /* btn.classList.toggle('open')
    nav.classList.toggle('hidden')
    document.body.classList.toggle('no-scroll') */

  };


const onClose = async () =>{
console.log(`onClose clicked`);
}


  return (
    <>
      <section className="MainSection">
      <div className="circle" style={{backgroundColor: selectedProduct.bgColor}}></div> 
      <MainHeader isSignInOn={isSignInOn} setSignInOn={setSignInOn} menuToggle={menuToggle} />

 
      <div className="content">
        <div className="textbox">
          <h2>            
            It's not just Coffee
            <br />
            It's <span> Craft Coffee </span>
          </h2>
          <p>           
            Lorem ipsum dolor sit amet, consectetur adipisicing elt, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.
          </p>
          <a href="#"> Learn More</a>
        </div>
        <div className="imgBox">
          <img src={`${selectedProduct.imgUrl}`} className="starbucks" />
        </div>
      </div>
      <ul className="thumb">       
        {products.map((product) => (
          <li key={product.productID}>
            <img
              src={product.imgUrlSmall}
              alt={product.name}
              onClick={() => vitrinProdClicked(product)}
            />
          </li>
        ))}
      </ul>
      <ul className="sci">
        <li>
          <a href="#">
            {" "}
            <img src="facebook.png" />
          </a>
        </li>
        <li>
          <a href="#">
            {" "}
            <img src="twitter.png" />
          </a>
        </li>
        <li>
          <a href="#">
            {" "}
            <img src="instagram.png" />
          </a>
        </li>
      </ul>
      <hr/>

      </section>
      <section className="vitrin01" > 
      <h2> Vitrin 1</h2>
      <p>Urun #1</p>
      <p>Urun #1</p>
      <p>Urun #1</p>
      </section>
      <section className="vitrin02" > 
      <h2> Vitrin 2</h2>
      <p>Urun #1</p>
      <p>Urun #1</p>
      <p>Urun #1</p>
      </section>

      {/* Box A */}
      <section className="box box-a bg-primary text-center py-md">
      <div className="box-inner">
        <h2 className="text-xl">Jingle all the way to free favorites</h2>
        <p className="text-md">
          Join Starbucks® Rewards for delicious deals & exclusive offers.
          <a href="#">Learn more</a>
        </p>
      </div>
      </section>
      {/* Box B */}
      <section className="box box-b bg-secondary grid-col-2">
      <img src="box-b.png" alt="" />
      <div className="box-text">
        <h2 className="text-xl">New to the nice list</h2>
        <p className="text-md">
          For a nondairy twist on a holiday cookie classic, try the new Iced
          Sugar Cookie Almondmilk Latte.
        </p>
        <a href="#" className="btn btn-light-outline">Order Now</a>
      </div>
      </section>
      {/* Box C */}
      <section className="box box-c bg-secondary grid-col-2 grid-reversed">
      <img src="box-c.png" alt="" />
      <div className="box-text">
        <h2 className="text-xl">Merry moment</h2>
        <p className="text-md">
          Treat yourself to a festive Sugar Plum Cheese Danish with a nicely
          spiced sugar-plum spread.
        </p>
        <a href="#" className="btn btn-light-outline">Order Now</a>
      </div>
      </section>
      {/* Box D */}
      <section className="box box-d bg-primary grid-col-2">
      <img src="box-d.png" alt="" />
      <div className="box-text">
        <h2 className="text-xl">Starbucks Thanksgiving Blend</h2>
        <p className="text-md">
          This elegant dark roast returns, showcasing flavors from some of the
          world’s major coffee-growing regions.
        </p>
        <a href="#" className="btn btn-light-outline">Order Now</a>
      </div>
      </section>

    {/* Box E */}
    <section className="box box-e bg-secondary grid-col-2 grid-reversed">
      <img src="box-e.jpg" alt="" />
      <div className="box-text">
        <h2 className="text-md">Fighting hunger this holiday</h2>
        <p className="text-sm">
          Hunger is affecting millions of people across America this holiday
          season. Join us in our commitment to hunger relief and help feed
          neighbors in need.
        </p>
        <a href="#" className="btn btn-light-outline">Order Now</a>
      </div>
    </section>

    {/* Box F */}
    <section className="box box-f grid-col-2">
      <div>
        <img src="box-f1.jpg" alt="" />
        <div className="bg-extra py-lg">
          <div className="box-text">
            <h2 className="text-md">Let the holiday cheer come to you</h2>
            <p className="text-sm">
              Make the moment merry. Order Starbucks® holiday favorites on Uber
              Eats.*
            </p>
            <a href="#" className="btn btn-dark-outline">Order Now</a>
          </div>
        </div>
      </div>
      <div>
        <img src="box-f2.jpg" alt="" />
        <div className="bg-primary py-lg">
          <div className="box-text">
            <h2 className="text-md">Loved Passing on Netflix?</h2>
            <p className="text-sm">
              Our new social series about film adaptations kicks off with the
              actors and directors who brought the book to life.
            </p>
            <a href="#" className="btn btn-light-outline">Order Now</a>
          </div>
        </div>
      </div>
    </section>

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

   { isSignInOn ? (<SignIn onClose={onClose}/>): (<></>) }




      </>
  );
}
