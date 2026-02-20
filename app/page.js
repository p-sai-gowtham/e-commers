"use client";

import { useState } from "react";
import Link from "next/link";

const featuredProducts = [
  { id: 1, image: "/img/featured/feature-1.jpg", name: "Crab Pool Security", price: "$30.00", categories: ["oranges", "fresh-meat"] },
  { id: 2, image: "/img/featured/feature-2.jpg", name: "Crab Pool Security", price: "$30.00", categories: ["vegetables", "fastfood"] },
  { id: 3, image: "/img/featured/feature-3.jpg", name: "Crab Pool Security", price: "$30.00", categories: ["vegetables", "fresh-meat"] },
  { id: 4, image: "/img/featured/feature-4.jpg", name: "Crab Pool Security", price: "$30.00", categories: ["fastfood", "oranges"] },
  { id: 5, image: "/img/featured/feature-5.jpg", name: "Crab Pool Security", price: "$30.00", categories: ["fresh-meat", "vegetables"] },
  { id: 6, image: "/img/featured/feature-6.jpg", name: "Crab Pool Security", price: "$30.00", categories: ["oranges", "fastfood"] },
  { id: 7, image: "/img/featured/feature-7.jpg", name: "Crab Pool Security", price: "$30.00", categories: ["fresh-meat", "vegetables"] },
  { id: 8, image: "/img/featured/feature-8.jpg", name: "Crab Pool Security", price: "$30.00", categories: ["fastfood", "vegetables"] },
];

const filterOptions = [
  { label: "All", value: "*" },
  { label: "Oranges", value: "oranges" },
  { label: "Fresh Meat", value: "fresh-meat" },
  { label: "Vegetables", value: "vegetables" },
  { label: "Fastfood", value: "fastfood" },
];

const categories = [
  { name: "Fresh Fruit", image: "/img/categories/cat-1.jpg" },
  { name: "Dried Fruit", image: "/img/categories/cat-2.jpg" },
  { name: "Vegetables", image: "/img/categories/cat-3.jpg" },
  { name: "drink fruits", image: "/img/categories/cat-4.jpg" },
];

const departmentsList = [
  "Fresh Meat",
  "Vegetables",
  "Fruit & Nut Gifts",
  "Fresh Berries",
  "Ocean Foods",
  "Butter & Eggs",
  "Fastfood",
  "Fresh Onion",
  "Papayaya & Crisps",
  "Oatmeal",
  "Fresh Bananas",
];

const latestProductColumns = [
  { title: "Latest Products" },
  { title: "Top Rated Products" },
  { title: "Review Products" },
];

const latestProducts = [
  { image: "/img/latest-product/lp-1.jpg", name: "Crab Pool Security", price: "$30.00" },
  { image: "/img/latest-product/lp-2.jpg", name: "Crab Pool Security", price: "$30.00" },
  { image: "/img/latest-product/lp-3.jpg", name: "Crab Pool Security", price: "$30.00" },
];

const blogPosts = [
  { image: "/img/blog/blog-1.jpg", title: "Cooking tips make cooking simple", date: "May 4,2019", comments: "5" },
  { image: "/img/blog/blog-2.jpg", title: "6 ways to prepare breakfast for 30", date: "May 4,2019", comments: "5" },
  { image: "/img/blog/blog-3.jpg", title: "Visit the clean farm in the US", date: "May 4,2019", comments: "5" },
];

export default function HomePage() {
  const [activeFilter, setActiveFilter] = useState("*");

  const filteredProducts =
    activeFilter === "*"
      ? featuredProducts
      : featuredProducts.filter((product) => product.categories.includes(activeFilter));

  return (
    <>
      {/* Hero Section Begin */}
      <section className="hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="hero__categories">
                <div className="hero__categories__all">
                  <i className="fa fa-bars"></i>
                  <span>All departments</span>
                </div>
                <ul>
                  {departmentsList.map((dept, index) => (
                    <li key={index}>
                      <Link href="#">{dept}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="hero__search">
                <div className="hero__search__form">
                  <form action="#">
                    <div className="hero__search__categories">
                      All Categories
                      <span className="arrow_carrot-down"></span>
                    </div>
                    <input type="text" placeholder="What do yo u need?" />
                    <button type="submit" className="site-btn">
                      SEARCH
                    </button>
                  </form>
                </div>
                <div className="hero__search__phone">
                  <div className="hero__search__phone__icon">
                    <i className="fa fa-phone"></i>
                  </div>
                  <div className="hero__search__phone__text">
                    <h5>+65 11.188.888</h5>
                    <span>support 24/7 time</span>
                  </div>
                </div>
              </div>
              <div
                className="hero__item set-bg"
                style={{ backgroundImage: `url(/img/hero/banner.jpg)` }}
              >
                <div className="hero__text">
                  <span>FRUIT FRESH</span>
                  <h2>
                    Vegetable <br />
                    100% Organic
                  </h2>
                  <p>Free Pickup and Delivery Available</p>
                  <Link href="#" className="primary-btn">
                    SHOP NOW
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Hero Section End */}

      {/* Categories Section Begin */}
      <section className="categories">
        <div className="container">
          <div className="row">
            {categories.map((cat, index) => (
              <div className="col-lg-3" key={index}>
                <div
                  className="categories__item set-bg"
                  style={{ backgroundImage: `url(${cat.image})` }}
                >
                  <h5>
                    <Link href="#">{cat.name}</Link>
                  </h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Categories Section End */}

      {/* Featured Section Begin */}
      <section className="featured spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h2>Featured Product</h2>
              </div>
              <div className="featured__controls">
                <ul>
                  {filterOptions.map((option) => (
                    <li
                      key={option.value}
                      className={activeFilter === option.value ? "active" : ""}
                      onClick={() => setActiveFilter(option.value)}
                    >
                      {option.label}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="row featured__filter">
            {filteredProducts.map((product) => (
              <div
                className={`col-lg-3 col-md-4 col-sm-6 mix ${product.categories.join(" ")}`}
                key={product.id}
              >
                <div className="featured__item">
                  <div
                    className="featured__item__pic set-bg"
                    style={{ backgroundImage: `url(${product.image})` }}
                  >
                    <ul className="featured__item__pic__hover">
                      <li>
                        <a href="#">
                          <i className="fa fa-heart"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-retweet"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-shopping-cart"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="featured__item__text">
                    <h6>
                      <Link href="#">{product.name}</Link>
                    </h6>
                    <h5>{product.price}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Featured Section End */}

      {/* Banner Begin */}
      <div className="banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="banner__pic">
                <img src="/img/banner/banner-1.jpg" alt="" />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="banner__pic">
                <img src="/img/banner/banner-2.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Banner End */}

      {/* Latest Product Section Begin */}
      <section className="latest-product spad">
        <div className="container">
          <div className="row">
            {latestProductColumns.map((column, colIndex) => (
              <div className="col-lg-4 col-md-6" key={colIndex}>
                <div className="latest-product__text">
                  <h4>{column.title}</h4>
                  <div className="latest-prdouct__slider__item">
                    {latestProducts.map((product, prodIndex) => (
                      <a href="#" className="latest-product__item" key={prodIndex}>
                        <div className="latest-product__item__pic">
                          <img src={product.image} alt="" />
                        </div>
                        <div className="latest-product__item__text">
                          <h6>{product.name}</h6>
                          <span>{product.price}</span>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Latest Product Section End */}

      {/* Blog Section Begin */}
      <section className="from-blog spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title from-blog__title">
                <h2>From The Blog</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {blogPosts.map((post, index) => (
              <div className="col-lg-4 col-md-4 col-sm-6" key={index}>
                <div className="blog__item">
                  <div className="blog__item__pic">
                    <img src={post.image} alt="" />
                  </div>
                  <div className="blog__item__text">
                    <ul>
                      <li>
                        <i className="fa fa-calendar-o"></i> {post.date}
                      </li>
                      <li>
                        <i className="fa fa-comment-o"></i> {post.comments}
                      </li>
                    </ul>
                    <h5>
                      <Link href="#">{post.title}</Link>
                    </h5>
                    <p>
                      Sed quia non numquam modi tempora indunt ut labore et dolore magnam
                      aliquam quaerat{" "}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Blog Section End */}
    </>
  );
}
