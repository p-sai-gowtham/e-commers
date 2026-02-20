"use client";

import { useState } from "react";
import HeroNormal from "@/components/HeroNormal";
import Breadcrumb from "@/components/Breadcrumb";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <>
      <HeroNormal />
      <Breadcrumb
        title="Contact Us"
        pages={[{ label: "Home", href: "/" }, { label: "Contact Us" }]}
      />

      {/* Contact Section Begin */}
      <section className="contact spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-6 text-center">
              <div className="contact__widget">
                <span className="icon_phone"></span>
                <h4>Phone</h4>
                <p>+01-3-8888-6868</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 text-center">
              <div className="contact__widget">
                <span className="icon_pin_alt"></span>
                <h4>Address</h4>
                <p>60-49 Road 11378 New York</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 text-center">
              <div className="contact__widget">
                <span className="icon_clock_alt"></span>
                <h4>Open time</h4>
                <p>10:00 am to 23:00 pm</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 text-center">
              <div className="contact__widget">
                <span className="icon_mail_alt"></span>
                <h4>Email</h4>
                <p>hello@colorlib.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Section End */}

      {/* Map Begin */}
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49116.39176087041!2d-86.41867791216099!3d39.69977417971648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886ca48c841038a1%3A0x70cfba96bf847f0!2sPlainfield%2C%20IN%2C%20USA!5e0!3m2!1sen!2sbd!4v1586106673811!5m2!1sen!2sbd"
          height="500"
          style={{ border: 0 }}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        ></iframe>
        <div className="map-inside">
          <i className="icon_pin"></i>
          <div className="inside-widget">
            <h4>New York</h4>
            <ul>
              <li>Phone: +12-345-6789</li>
              <li>Add: 16 Creek Ave. Farmingdale, NY</li>
            </ul>
          </div>
        </div>
      </div>
      {/* Map End */}

      {/* Contact Form Begin */}
      <div className="contact-form spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="contact__form__title">
                <h2>Leave Message</h2>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  style={errors.name ? { borderColor: "#e53637" } : {}}
                />
                {errors.name && <small style={{ color: "#e53637" }}>{errors.name}</small>}
              </div>
              <div className="col-lg-6 col-md-6">
                <input
                  type="text"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  style={errors.email ? { borderColor: "#e53637" } : {}}
                />
                {errors.email && <small style={{ color: "#e53637" }}>{errors.email}</small>}
              </div>
              <div className="col-lg-12 text-center">
                <textarea
                  name="message"
                  placeholder="Your message"
                  value={formData.message}
                  onChange={handleChange}
                  style={errors.message ? { borderColor: "#e53637" } : {}}
                ></textarea>
                {errors.message && <small style={{ color: "#e53637", display: "block", marginBottom: 10 }}>{errors.message}</small>}
                {submitted && (
                  <p style={{ color: "#7fad39", marginBottom: 15, fontSize: 16 }}>
                    Thank you! Your message has been sent successfully.
                  </p>
                )}
                <button type="submit" className="site-btn">
                  SEND MESSAGE
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* Contact Form End */}
    </>
  );
}
