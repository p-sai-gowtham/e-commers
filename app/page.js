"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCart } from "../context/CartContext";
import products, { categories, getFeaturedProducts, getLatestProducts } from "../data/products";
import blogs from "../data/blogs";

const filterOptions = [
  { label: "All", value: "All" },
  { label: "Fresh Fruit", value: "Fresh Fruit" },
  { label: "Dried Fruit", value: "Dried Fruit" },
  { label: "Vegetables", value: "Vegetables" },
  { label: "Drink Fruits", value: "Drink Fruits" },
];

const departmentsList = [
  "Fresh Fruits",
  "Dried Fruits",
  "Vegetables",
  "Juice",
  "Fruit & Nut Gifts",
  "Fresh Berries",
  "Ocean Foods",
  "Butter & Eggs",
  "Fresh Onion",
  "Oatmeal",
  "Fresh Bananas",
];

export default function HomePage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();
  const { addToCart, toggleWishlist } = useCart();

  const featured = getFeaturedProducts(8);
  const filteredProducts =
    activeFilter === "All"
      ? featured
      : featured.filter((p) => p.category === activeFilter);

  const latest = getLatestProducts(3);
  const topRated = [...products].filter((p) => p.rating === 5).slice(0, 3);
  const reviewed = [...products].sort((a, b) => b.reviews - a.reviews).slice(0, 3);

  const latestProductColumns = [
    { title: "Latest Products", items: latest },
    { title: "Top Rated Products", items: topRated },
    { title: "Review Products", items: reviewed },
  ];

  const blogPosts = blogs.slice(0, 3);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/shop?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

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
                      <Link href={`/shop?department=${encodeURIComponent(dept)}`}>{dept}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="hero__search">
                <div className="hero__search__form">
                  <form onSubmit={handleSearch}>
                    <div className="hero__search__categories">
                      All Categories
                      <span className="arrow_carrot-down"></span>
                    </div>
                    <input
                      type="text"
                      placeholder="What do you need?"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
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
                  <Link href="/shop" className="primary-btn">
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
                  style={{
                    backgroundImage: `url(/img/categories/cat-${index + 1}.jpg)`,
                  }}
                >
                  <h5>
                    <Link href={`/shop?category=${encodeURIComponent(cat)}`}>
                      {cat}
                    </Link>
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
              <div className="col-lg-3 col-md-4 col-sm-6" key={product.id}>
                <div className="featured__item">
                  <div
                    className="featured__item__pic set-bg"
                    style={{ backgroundImage: `url(${product.image})` }}
                  >
                    <ul className="featured__item__pic__hover">
                      <li>
                        <a
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            toggleWishlist(product);
                          }}
                        >
                          <i className="fa fa-heart"></i>
                        </a>
                      </li>
                      <li>
                        <Link href={`/shop-details?id=${product.id}`}>
                          <i className="fa fa-retweet"></i>
                        </Link>
                      </li>
                      <li>
                        <a
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            addToCart(product);
                          }}
                        >
                          <i className="fa fa-shopping-cart"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="featured__item__text">
                    <h6>
                      <Link href={`/shop-details?id=${product.id}`}>
                        {product.name}
                      </Link>
                    </h6>
                    <h5>${product.price.toFixed(2)}</h5>
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
                    {column.items.map((product) => (
                      <Link
                        href={`/shop-details?id=${product.id}`}
                        className="latest-product__item"
                        key={product.id}
                      >
                        <div className="latest-product__item__pic">
                          <img src={product.image} alt={product.name} />
                        </div>
                        <div className="latest-product__item__text">
                          <h6>{product.name}</h6>
                          <span>${product.price.toFixed(2)}</span>
                        </div>
                      </Link>
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
            {blogPosts.map((post) => (
              <div className="col-lg-4 col-md-4 col-sm-6" key={post.id}>
                <div className="blog__item">
                  <div className="blog__item__pic">
                    <img src={post.image} alt={post.title} />
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
                      <Link href={`/blog-details?id=${post.id}`}>
                        {post.title}
                      </Link>
                    </h5>
                    <p>{post.excerpt.substring(0, 80)}...</p>
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
