"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import HeroNormal from "@/components/HeroNormal";
import Breadcrumb from "@/components/Breadcrumb";
import { useCart } from "../../context/CartContext";

export default function CheckoutPage() {
  const { cart, cartTotal, clearCart } = useCart();
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    country: "",
    address: "",
    address2: "",
    city: "",
    state: "",
    postcode: "",
    phone: "",
    email: "",
    orderNotes: "",
    paymentMethod: "check",
  });
  const [errors, setErrors] = useState({});
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.country.trim()) newErrors.country = "Country is required";
    if (!formData.address.trim()) newErrors.address = "Address is required";
    if (!formData.city.trim()) newErrors.city = "City is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setOrderPlaced(true);
    clearCart();
  };

  if (orderPlaced) {
    return (
      <>
        <HeroNormal />
        <Breadcrumb
          title="Order Placed"
          pages={[{ label: "Home", href: "/" }, { label: "Order Placed" }]}
        />
        <section className="checkout spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center" style={{ padding: "60px 0" }}>
                <i className="fa fa-check-circle" style={{ fontSize: 60, color: "#7fad39", marginBottom: 20 }}></i>
                <h3>Thank you for your order!</h3>
                <p style={{ margin: "20px 0", fontSize: 16 }}>
                  Your order has been placed successfully. You will receive a confirmation email shortly.
                </p>
                <a
                  href="/"
                  className="primary-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    router.push("/");
                  }}
                >
                  CONTINUE SHOPPING
                </a>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }

  if (cart.length === 0) {
    return (
      <>
        <HeroNormal />
        <Breadcrumb
          title="Checkout"
          pages={[{ label: "Home", href: "/" }, { label: "Checkout" }]}
        />
        <section className="checkout spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center" style={{ padding: "60px 0" }}>
                <h4>Your cart is empty</h4>
                <p style={{ margin: "20px 0" }}>Add some items to your cart before checking out.</p>
                <a
                  href="/shop"
                  className="primary-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    router.push("/shop");
                  }}
                >
                  GO TO SHOP
                </a>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <HeroNormal />
      <Breadcrumb
        title="Checkout"
        pages={[{ label: "Home", href: "/" }, { label: "Checkout" }]}
      />

      <section className="checkout spad">
        <div className="container">
          <div className="checkout__form">
            <h4>Billing Details</h4>
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-lg-8 col-md-6">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="checkout__input">
                        <p>First Name<span>*</span></p>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          style={errors.firstName ? { borderColor: "#e53637" } : {}}
                        />
                        {errors.firstName && <small style={{ color: "#e53637" }}>{errors.firstName}</small>}
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="checkout__input">
                        <p>Last Name<span>*</span></p>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          style={errors.lastName ? { borderColor: "#e53637" } : {}}
                        />
                        {errors.lastName && <small style={{ color: "#e53637" }}>{errors.lastName}</small>}
                      </div>
                    </div>
                  </div>
                  <div className="checkout__input">
                    <p>Country<span>*</span></p>
                    <input
                      type="text"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      style={errors.country ? { borderColor: "#e53637" } : {}}
                    />
                    {errors.country && <small style={{ color: "#e53637" }}>{errors.country}</small>}
                  </div>
                  <div className="checkout__input">
                    <p>Address<span>*</span></p>
                    <input
                      type="text"
                      name="address"
                      placeholder="Street Address"
                      className="checkout__input__add"
                      value={formData.address}
                      onChange={handleChange}
                      style={errors.address ? { borderColor: "#e53637" } : {}}
                    />
                    {errors.address && <small style={{ color: "#e53637" }}>{errors.address}</small>}
                    <input
                      type="text"
                      name="address2"
                      placeholder="Apartment, suite, unit etc (optional)"
                      value={formData.address2}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="checkout__input">
                    <p>Town/City<span>*</span></p>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      style={errors.city ? { borderColor: "#e53637" } : {}}
                    />
                    {errors.city && <small style={{ color: "#e53637" }}>{errors.city}</small>}
                  </div>
                  <div className="checkout__input">
                    <p>Country/State</p>
                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="checkout__input">
                    <p>Postcode / ZIP</p>
                    <input
                      type="text"
                      name="postcode"
                      value={formData.postcode}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="checkout__input">
                        <p>Phone<span>*</span></p>
                        <input
                          type="text"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          style={errors.phone ? { borderColor: "#e53637" } : {}}
                        />
                        {errors.phone && <small style={{ color: "#e53637" }}>{errors.phone}</small>}
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="checkout__input">
                        <p>Email<span>*</span></p>
                        <input
                          type="text"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          style={errors.email ? { borderColor: "#e53637" } : {}}
                        />
                        {errors.email && <small style={{ color: "#e53637" }}>{errors.email}</small>}
                      </div>
                    </div>
                  </div>
                  <div className="checkout__input">
                    <p>Order notes</p>
                    <input
                      type="text"
                      name="orderNotes"
                      placeholder="Notes about your order, e.g. special notes for delivery."
                      value={formData.orderNotes}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="checkout__order">
                    <h4>Your Order</h4>
                    <div className="checkout__order__products">
                      Products <span>Total</span>
                    </div>
                    <ul>
                      {cart.map((item) => (
                        <li key={item.id}>
                          {item.name} x{item.quantity}{" "}
                          <span>${(item.price * item.quantity).toFixed(2)}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="checkout__order__subtotal">
                      Subtotal <span>${cartTotal.toFixed(2)}</span>
                    </div>
                    <div className="checkout__order__total">
                      Total <span>${cartTotal.toFixed(2)}</span>
                    </div>
                    <div className="checkout__input__checkbox">
                      <label htmlFor="payment-check">
                        Check Payment
                        <input
                          type="radio"
                          id="payment-check"
                          name="paymentMethod"
                          value="check"
                          checked={formData.paymentMethod === "check"}
                          onChange={handleChange}
                        />
                        <span className="checkmark"></span>
                      </label>
                    </div>
                    <div className="checkout__input__checkbox">
                      <label htmlFor="payment-paypal">
                        Paypal
                        <input
                          type="radio"
                          id="payment-paypal"
                          name="paymentMethod"
                          value="paypal"
                          checked={formData.paymentMethod === "paypal"}
                          onChange={handleChange}
                        />
                        <span className="checkmark"></span>
                      </label>
                    </div>
                    <button type="submit" className="site-btn">
                      PLACE ORDER
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
