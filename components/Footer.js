"use client";

import { useState } from "react";
import Link from "next/link";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim() && email.includes("@")) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="footer spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="footer__about">
              <div className="footer__about__logo">
                <Link href="/">
                  <img src="/img/logo.png" alt="Ogani" />
                </Link>
              </div>
              <ul>
                <li>Address: 60-49 Road 11378 New York</li>
                <li>Phone: +65 11.188.888</li>
                <li>Email: hello@colorlib.com</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-1">
            <div className="footer__widget">
              <h6>Useful Links</h6>
              <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/shop">Shop</Link></li>
                <li><Link href="/cart">Shopping Cart</Link></li>
                <li><Link href="/checkout">Checkout</Link></li>
                <li><Link href="/blog">Blog</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
              <ul>
                <li><Link href="/shop?category=Fresh+Fruit">Fresh Fruit</Link></li>
                <li><Link href="/shop?category=Vegetables">Vegetables</Link></li>
                <li><Link href="/shop?category=Dried+Fruit">Dried Fruit</Link></li>
                <li><Link href="/shop?category=Drink+Fruits">Drink Fruits</Link></li>
                <li><Link href="/blog">Blog Posts</Link></li>
                <li><Link href="/contact">Support</Link></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-12">
            <div className="footer__widget">
              <h6>Join Our Newsletter Now</h6>
              <p>Get E-mail updates about our latest shop and special offers.</p>
              <form onSubmit={handleSubscribe}>
                <input
                  type="text"
                  placeholder="Enter your mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit" className="site-btn">
                  Subscribe
                </button>
              </form>
              {subscribed && (
                <p style={{ color: "#7fad39", marginTop: 10, fontSize: 14 }}>
                  Thank you for subscribing!
                </p>
              )}
              <div className="footer__widget__social">
                <a href="#"><i className="fa fa-facebook"></i></a>
                <a href="#"><i className="fa fa-instagram"></i></a>
                <a href="#"><i className="fa fa-twitter"></i></a>
                <a href="#"><i className="fa fa-pinterest"></i></a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="footer__copyright">
              <div className="footer__copyright__text">
                <p>
                  Copyright &copy; {new Date().getFullYear()} All rights
                  reserved | This template is made with{" "}
                  <i className="fa fa-heart" aria-hidden="true"></i> by{" "}
                  <a href="https://colorlib.com" target="_blank" rel="noreferrer">
                    Colorlib
                  </a>
                </p>
              </div>
              <div className="footer__copyright__payment">
                <img src="/img/payment-item.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
