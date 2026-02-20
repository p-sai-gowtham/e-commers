"use client";

import { useState } from "react";
import HeroNormal from "@/components/HeroNormal";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";

export default function CartPage() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      img: "/img/cart/cart-1.jpg",
      name: "Vegetable's Package",
      price: 55.0,
      quantity: 1,
      total: 110.0,
    },
    {
      id: 2,
      img: "/img/cart/cart-2.jpg",
      name: "Fresh Garden Vegetable",
      price: 39.0,
      quantity: 1,
      total: 39.99,
    },
    {
      id: 3,
      img: "/img/cart/cart-3.jpg",
      name: "Organic Bananas",
      price: 69.0,
      quantity: 1,
      total: 69.99,
    },
  ]);

  const handleIncrement = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrement = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const handleRemove = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <>
      <HeroNormal />
      <Breadcrumb
        title="Shopping Cart"
        pages={[{ label: "Home", href: "/" }, { label: "Shopping Cart" }]}
      />

      {/* Shoping Cart Section Begin */}
      <section className="shoping-cart spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="shoping__cart__table">
                <table>
                  <thead>
                    <tr>
                      <th className="shoping__product">Products</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Total</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item) => (
                      <tr key={item.id}>
                        <td className="shoping__cart__item">
                          <img src={item.img} alt="" />
                          <h5>{item.name}</h5>
                        </td>
                        <td className="shoping__cart__price">
                          ${item.price.toFixed(2)}
                        </td>
                        <td className="shoping__cart__quantity">
                          <div className="quantity">
                            <div className="pro-qty">
                              <span
                                className="dec qtybtn"
                                onClick={() => handleDecrement(item.id)}
                                style={{ cursor: "pointer" }}
                              >
                                -
                              </span>
                              <input type="text" value={item.quantity} readOnly />
                              <span
                                className="inc qtybtn"
                                onClick={() => handleIncrement(item.id)}
                                style={{ cursor: "pointer" }}
                              >
                                +
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="shoping__cart__total">
                          ${item.total.toFixed(2)}
                        </td>
                        <td className="shoping__cart__item__close">
                          <span
                            className="icon_close"
                            onClick={() => handleRemove(item.id)}
                            style={{ cursor: "pointer" }}
                          ></span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="shoping__cart__btns">
                <a href="#" className="primary-btn cart-btn">
                  CONTINUE SHOPPING
                </a>
                <a href="#" className="primary-btn cart-btn cart-btn-right">
                  <span className="icon_loading"></span> Update Cart
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="shoping__continue">
                <div className="shoping__discount">
                  <h5>Discount Codes</h5>
                  <form action="#">
                    <input type="text" placeholder="Enter your coupon code" />
                    <button type="submit" className="site-btn">
                      APPLY COUPON
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="shoping__checkout">
                <h5>Cart Total</h5>
                <ul>
                  <li>
                    Subtotal <span>$454.98</span>
                  </li>
                  <li>
                    Total <span>$454.98</span>
                  </li>
                </ul>
                <Link href="/checkout" className="primary-btn">
                  PROCEED TO CHECKOUT
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Shoping Cart Section End */}
    </>
  );
}
