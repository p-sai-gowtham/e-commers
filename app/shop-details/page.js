"use client";

import { Suspense, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import HeroNormal from "@/components/HeroNormal";
import Breadcrumb from "@/components/Breadcrumb";
import { useCart } from "../../context/CartContext";
import { getProductById } from "../../data/products";
import products from "../../data/products";

export default function ShopDetailsPage() {
  return (
    <Suspense fallback={<div></div>}>
      <ShopDetailsContent />
    </Suspense>
  );
}

function ShopDetailsContent() {
  const searchParams = useSearchParams();
  const productId = searchParams.get("id");
  const product = getProductById(productId) || products[0];
  const { addToCart, toggleWishlist, isInWishlist } = useCart();

  const [selectedImage, setSelectedImage] = useState(product.detailImages[0]);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");

  useEffect(() => {
    setSelectedImage(product.detailImages[0]);
    setQuantity(1);
    setActiveTab("description");
  }, [product]);

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(product, quantity);
  };

  const handleToggleWishlist = (e) => {
    e.preventDefault();
    toggleWishlist(product);
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<i key={i} className="fa fa-star"></i>);
      } else if (i - 0.5 <= rating) {
        stars.push(<i key={i} className="fa fa-star-half-o"></i>);
      } else {
        stars.push(<i key={i} className="fa fa-star-o"></i>);
      }
    }
    return stars;
  };

  return (
    <>
      <HeroNormal />
      <Breadcrumb
        title={product.name}
        pages={[
          { label: "Home", href: "/" },
          { label: product.category, href: `/shop?category=${encodeURIComponent(product.category)}` },
          { label: product.name },
        ]}
      />

      {/* Product Details Section Begin */}
      <section className="product-details spad">
        <div className="container">
          <div className="row">
            {/* Product Images */}
            <div className="col-lg-6 col-md-6">
              <div className="product__details__pic">
                <div className="product__details__pic__item">
                  <img
                    className="product__details__pic__item--large"
                    src={selectedImage}
                    alt={product.name}
                  />
                </div>
                <div className="product__details__pic__slider">
                  {product.thumbImages.map((thumb, index) => (
                    <img
                      key={index}
                      src={thumb}
                      alt=""
                      onClick={() => setSelectedImage(product.detailImages[index])}
                      style={{
                        cursor: "pointer",
                        opacity: selectedImage === product.detailImages[index] ? 1 : 0.6,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div className="col-lg-6 col-md-6">
              <div className="product__details__text">
                <h3>{product.name}</h3>
                <div className="product__details__rating">
                  {renderStars(product.rating)}
                  <span>({product.reviews} reviews)</span>
                </div>
                <div className="product__details__price">
                  ${product.price.toFixed(2)}
                  {product.oldPrice && (
                    <span style={{ textDecoration: "line-through", color: "#999", fontSize: 16, marginLeft: 10 }}>
                      ${product.oldPrice.toFixed(2)}
                    </span>
                  )}
                </div>
                <p>{product.description}</p>
                <div className="product__details__quantity">
                  <div className="quantity">
                    <div className="pro-qty">
                      <span
                        className="dec qtybtn"
                        onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
                        style={{ cursor: "pointer" }}
                      >
                        -
                      </span>
                      <input type="text" value={quantity} readOnly />
                      <span
                        className="inc qtybtn"
                        onClick={() => setQuantity((prev) => prev + 1)}
                        style={{ cursor: "pointer" }}
                      >
                        +
                      </span>
                    </div>
                  </div>
                </div>
                <a href="#" className="primary-btn" onClick={handleAddToCart}>
                  ADD TO CART
                </a>
                <a
                  href="#"
                  className="heart-icon"
                  onClick={handleToggleWishlist}
                  style={{ color: isInWishlist(product.id) ? "#e53637" : undefined }}
                >
                  <span className="icon_heart_alt"></span>
                </a>
                <ul>
                  <li>
                    <b>Availability</b> <span>In Stock</span>
                  </li>
                  <li>
                    <b>Shipping</b>{" "}
                    <span>
                      01 day shipping. <samp>Free pickup today</samp>
                    </span>
                  </li>
                  <li>
                    <b>Weight</b> <span>{product.weight}</span>
                  </li>
                  <li>
                    <b>Share on</b>
                    <div className="share">
                      <a href="#"><i className="fa fa-facebook"></i></a>
                      <a href="#"><i className="fa fa-twitter"></i></a>
                      <a href="#"><i className="fa fa-instagram"></i></a>
                      <a href="#"><i className="fa fa-pinterest"></i></a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Tabs */}
            <div className="col-lg-12">
              <div className="product__details__tab">
                <ul className="nav nav-tabs" role="tablist">
                  <li className="nav-item">
                    <a
                      className={`nav-link ${activeTab === "description" ? "active" : ""}`}
                      onClick={() => setActiveTab("description")}
                      role="tab"
                      style={{ cursor: "pointer" }}
                    >
                      Description
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className={`nav-link ${activeTab === "information" ? "active" : ""}`}
                      onClick={() => setActiveTab("information")}
                      role="tab"
                      style={{ cursor: "pointer" }}
                    >
                      Information
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className={`nav-link ${activeTab === "reviews" ? "active" : ""}`}
                      onClick={() => setActiveTab("reviews")}
                      role="tab"
                      style={{ cursor: "pointer" }}
                    >
                      Reviews <span>({product.reviews})</span>
                    </a>
                  </li>
                </ul>
                <div className="tab-content">
                  {activeTab === "description" && (
                    <div className="tab-pane active" role="tabpanel">
                      <div className="product__details__tab__desc">
                        <h6>Product Description</h6>
                        <p>{product.description}</p>
                      </div>
                    </div>
                  )}
                  {activeTab === "information" && (
                    <div className="tab-pane active" role="tabpanel">
                      <div className="product__details__tab__desc">
                        <h6>Product Information</h6>
                        <p><strong>Weight:</strong> {product.weight}</p>
                        <p><strong>Category:</strong> {product.category}</p>
                        <p><strong>Department:</strong> {product.department}</p>
                        <p><strong>Size:</strong> {product.size}</p>
                        <p><strong>Color:</strong> {product.color.charAt(0).toUpperCase() + product.color.slice(1)}</p>
                        <p><strong>Tags:</strong> {product.tags.join(", ")}</p>
                      </div>
                    </div>
                  )}
                  {activeTab === "reviews" && (
                    <div className="tab-pane active" role="tabpanel">
                      <div className="product__details__tab__desc">
                        <h6>Customer Reviews ({product.reviews})</h6>
                        <div style={{ marginBottom: 20 }}>
                          <div style={{ display: "flex", alignItems: "center", marginBottom: 10 }}>
                            {renderStars(product.rating)}
                            <span style={{ marginLeft: 10 }}>{product.rating} out of 5</span>
                          </div>
                          <p>Based on {product.reviews} reviews from verified buyers.</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Product Details Section End */}

      {/* Related Product Section Begin */}
      {relatedProducts.length > 0 && (
        <section className="related-product">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title related__product__title">
                  <h2>Related Product</h2>
                </div>
              </div>
            </div>
            <div className="row">
              {relatedProducts.map((rp) => (
                <div className="col-lg-3 col-md-4 col-sm-6" key={rp.id}>
                  <div className="product__item">
                    <div
                      className="product__item__pic set-bg"
                      style={{ backgroundImage: `url(${rp.image})` }}
                    >
                      <ul className="product__item__pic__hover">
                        <li>
                          <a
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              toggleWishlist(rp);
                            }}
                          >
                            <i className="fa fa-heart"></i>
                          </a>
                        </li>
                        <li>
                          <Link href={`/shop-details?id=${rp.id}`}>
                            <i className="fa fa-retweet"></i>
                          </Link>
                        </li>
                        <li>
                          <a
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              addToCart(rp);
                            }}
                          >
                            <i className="fa fa-shopping-cart"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="product__item__text">
                      <h6>
                        <Link href={`/shop-details?id=${rp.id}`}>{rp.name}</Link>
                      </h6>
                      <h5>${rp.price.toFixed(2)}</h5>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
      {/* Related Product Section End */}
    </>
  );
}
