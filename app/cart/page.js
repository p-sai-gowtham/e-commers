"use client";

import { useState } from "react";
import Link from "next/link";
import HeroNormal from "@/components/HeroNormal";
import Breadcrumb from "@/components/Breadcrumb";
import { useCart } from "../../context/CartContext";

export default function CartPage() {
  const { cart, cartTotal, updateQuantity, removeFromCart } = useCart();
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);
  const [couponMessage, setCouponMessage] = useState("");

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    if (coupon.toLowerCase() === "ogani10") {
      setDiscount(cartTotal * 0.1);
      setCouponMessage("Coupon applied! 10% discount.");
    } else if (coupon.toLowerCase() === "fresh20") {
      setDiscount(cartTotal * 0.2);
      setCouponMessage("Coupon applied! 20% discount.");
    } else if (coupon.trim()) {
      setDiscount(0);
      setCouponMessage("Invalid coupon code. Try OGANI10 or FRESH20.");
    }
  };

  const finalTotal = cartTotal - discount;

  return (
    <>
      <HeroNormal />
      <Breadcrumb
        title="Shopping Cart"
        pages={[{ label: "Home", href: "/" }, { label: "Shopping Cart" }]}
      />

      <section className="shoping-cart spad">
        <div className="container">
          {cart.length === 0 ? (
            <div className="row">
              <div className="col-lg-12 text-center" style={{ padding: "60px 0" }}>
                <h4>Your cart is empty</h4>
                <p style={{ margin: "20px 0" }}>Looks like you haven&apos;t added any items yet.</p>
                <Link href="/shop" className="primary-btn">
                  CONTINUE SHOPPING
                </Link>
              </div>
            </div>
          ) : (
            <>
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
                        {cart.map((item) => (
                          <tr key={item.id}>
                            <td className="shoping__cart__item">
                              <img src={item.image} alt={item.name} />
                              <h5>
                                <Link href={`/shop-details?id=${item.id}`}>
                                  {item.name}
                                </Link>
                              </h5>
                            </td>
                            <td className="shoping__cart__price">
                              ${item.price.toFixed(2)}
                            </td>
                            <td className="shoping__cart__quantity">
                              <div className="quantity">
                                <div className="pro-qty">
                                  <span
                                    className="dec qtybtn"
                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                    style={{ cursor: "pointer" }}
                                  >
                                    -
                                  </span>
                                  <input type="text" value={item.quantity} readOnly />
                                  <span
                                    className="inc qtybtn"
                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                    style={{ cursor: "pointer" }}
                                  >
                                    +
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="shoping__cart__total">
                              ${(item.price * item.quantity).toFixed(2)}
                            </td>
                            <td className="shoping__cart__item__close">
                              <span
                                className="icon_close"
                                onClick={() => removeFromCart(item.id)}
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
                    <Link href="/shop" className="primary-btn cart-btn">
                      CONTINUE SHOPPING
                    </Link>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="shoping__continue">
                    <div className="shoping__discount">
                      <h5>Discount Codes</h5>
                      <form onSubmit={handleApplyCoupon}>
                        <input
                          type="text"
                          placeholder="Enter your coupon code"
                          value={coupon}
                          onChange={(e) => setCoupon(e.target.value)}
                        />
                        <button type="submit" className="site-btn">
                          APPLY COUPON
                        </button>
                      </form>
                      {couponMessage && (
                        <p
                          style={{
                            marginTop: 10,
                            color: discount > 0 ? "#7fad39" : "#e53637",
                            fontSize: 14,
                          }}
                        >
                          {couponMessage}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="shoping__checkout">
                    <h5>Cart Total</h5>
                    <ul>
                      <li>
                        Subtotal <span>${cartTotal.toFixed(2)}</span>
                      </li>
                      {discount > 0 && (
                        <li>
                          Discount <span style={{ color: "#7fad39" }}>-${discount.toFixed(2)}</span>
                        </li>
                      )}
                      <li>
                        Total <span>${finalTotal.toFixed(2)}</span>
                      </li>
                    </ul>
                    <Link href="/checkout" className="primary-btn">
                      PROCEED TO CHECKOUT
                    </Link>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}
