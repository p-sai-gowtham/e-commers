"use client";

import { useState, useEffect, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import HeroNormal from "@/components/HeroNormal";
import Breadcrumb from "@/components/Breadcrumb";
import { useCart } from "../../context/CartContext";
import products, {
  categories,
  departments,
  colors,
  sizes,
  getDiscountProducts,
  getLatestProducts,
} from "../../data/products";

export default function ShopPage() {
  const searchParams = useSearchParams();
  const { addToCart, toggleWishlist } = useCart();

  const initialCategory = searchParams.get("category") || "";
  const initialDepartment = searchParams.get("department") || "";
  const initialSearch = searchParams.get("search") || "";

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedDepartment, setSelectedDepartment] = useState(initialDepartment);
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [sortBy, setSortBy] = useState("default");
  const [priceRange, setPriceRange] = useState([0, 50]);
  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 9;

  useEffect(() => {
    setSelectedCategory(searchParams.get("category") || "");
    setSelectedDepartment(searchParams.get("department") || "");
    setSearchQuery(searchParams.get("search") || "");
    setCurrentPage(1);
  }, [searchParams]);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q))
      );
    }

    if (selectedCategory) {
      result = result.filter((p) => p.category === selectedCategory);
    }

    if (selectedDepartment) {
      result = result.filter((p) => p.department === selectedDepartment);
    }

    if (selectedColor) {
      result = result.filter((p) => p.color === selectedColor);
    }

    if (selectedSize) {
      result = result.filter((p) => p.size === selectedSize);
    }

    result = result.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
    );

    switch (sortBy) {
      case "price-low":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        result.sort((a, b) => b.price - a.price);
        break;
      case "name-az":
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    return result;
  }, [searchQuery, selectedCategory, selectedDepartment, selectedColor, selectedSize, priceRange, sortBy]);

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const discountProducts = getDiscountProducts().slice(0, 3);
  const latestProducts = getLatestProducts(3);

  const clearFilters = () => {
    setSelectedCategory("");
    setSelectedDepartment("");
    setSelectedColor("");
    setSelectedSize("");
    setPriceRange([0, 50]);
    setSearchQuery("");
    setSortBy("default");
    setCurrentPage(1);
  };

  return (
    <>
      <HeroNormal />
      <Breadcrumb
        title="Organi Shop"
        pages={[{ label: "Home", href: "/" }, { label: "Shop" }]}
      />

      <section className="product spad">
        <div className="container">
          <div className="row">
            {/* Sidebar */}
            <div className="col-lg-3 col-md-5">
              <div className="sidebar">
                {/* Department */}
                <div className="sidebar__item">
                  <h4>Department</h4>
                  <ul>
                    {departments.map((dept) => (
                      <li key={dept}>
                        <a
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            setSelectedDepartment(selectedDepartment === dept ? "" : dept);
                            setCurrentPage(1);
                          }}
                          style={{
                            fontWeight: selectedDepartment === dept ? "700" : "normal",
                            color: selectedDepartment === dept ? "#7fad39" : undefined,
                          }}
                        >
                          {dept}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Price */}
                <div className="sidebar__item">
                  <h4>Price</h4>
                  <div className="price-range-wrap">
                    <div style={{ padding: "10px 0" }}>
                      <input
                        type="range"
                        min="0"
                        max="50"
                        value={priceRange[1]}
                        onChange={(e) => {
                          setPriceRange([priceRange[0], Number(e.target.value)]);
                          setCurrentPage(1);
                        }}
                        style={{ width: "100%" }}
                      />
                    </div>
                    <div className="range-slider">
                      <div className="price-input">
                        <p>Price: ${priceRange[0].toFixed(2)} - ${priceRange[1].toFixed(2)}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Category */}
                <div className="sidebar__item">
                  <h4>Category</h4>
                  <ul>
                    <li>
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          setSelectedCategory("");
                          setCurrentPage(1);
                        }}
                        style={{
                          fontWeight: !selectedCategory ? "700" : "normal",
                          color: !selectedCategory ? "#7fad39" : undefined,
                        }}
                      >
                        All
                      </a>
                    </li>
                    {categories.map((cat) => (
                      <li key={cat}>
                        <a
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            setSelectedCategory(selectedCategory === cat ? "" : cat);
                            setCurrentPage(1);
                          }}
                          style={{
                            fontWeight: selectedCategory === cat ? "700" : "normal",
                            color: selectedCategory === cat ? "#7fad39" : undefined,
                          }}
                        >
                          {cat}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Colors */}
                <div className="sidebar__item sidebar__item__color--option">
                  <h4>Colors</h4>
                  {colors.map((color) => (
                    <div
                      key={color}
                      className={`sidebar__item__color sidebar__item__color--${color}`}
                    >
                      <label htmlFor={`color-${color}`}>
                        {color.charAt(0).toUpperCase() + color.slice(1)}
                        <input
                          type="radio"
                          id={`color-${color}`}
                          name="color"
                          checked={selectedColor === color}
                          onChange={() => {
                            setSelectedColor(selectedColor === color ? "" : color);
                            setCurrentPage(1);
                          }}
                        />
                      </label>
                    </div>
                  ))}
                </div>

                {/* Size */}
                <div className="sidebar__item">
                  <h4>Popular Size</h4>
                  {sizes.map((size) => (
                    <div key={size} className="sidebar__item__size">
                      <label htmlFor={`size-${size}`}>
                        {size}
                        <input
                          type="radio"
                          id={`size-${size}`}
                          name="size"
                          checked={selectedSize === size}
                          onChange={() => {
                            setSelectedSize(selectedSize === size ? "" : size);
                            setCurrentPage(1);
                          }}
                        />
                      </label>
                    </div>
                  ))}
                </div>

                {/* Latest Products */}
                <div className="sidebar__item">
                  <div className="latest-product__text">
                    <h4>Latest Products</h4>
                    <div className="latest-prdouct__slider__item">
                      {latestProducts.map((product) => (
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
              </div>
            </div>

            {/* Main Content */}
            <div className="col-lg-9 col-md-7">
              {/* Sale Off */}
              <div className="product__discount">
                <div className="section-title product__discount__title">
                  <h2>Sale Off</h2>
                </div>
                <div className="row">
                  {discountProducts.map((product) => (
                    <div className="col-lg-4" key={product.id}>
                      <div className="product__discount__item">
                        <div
                          className="product__discount__item__pic set-bg"
                          style={{ backgroundImage: `url(${product.image})` }}
                        >
                          <div className="product__discount__percent">
                            -{product.discount}%
                          </div>
                          <ul className="product__item__pic__hover">
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
                        <div className="product__discount__item__text">
                          <span>{product.category}</span>
                          <h5>
                            <Link href={`/shop-details?id=${product.id}`}>
                              {product.name}
                            </Link>
                          </h5>
                          <div className="product__item__price">
                            ${product.price.toFixed(2)}{" "}
                            {product.oldPrice && (
                              <span>${product.oldPrice.toFixed(2)}</span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Filter Bar */}
              <div className="filter__item">
                <div className="row">
                  <div className="col-lg-4 col-md-5">
                    <div className="filter__sort">
                      <span>Sort By</span>
                      <select
                        value={sortBy}
                        onChange={(e) => {
                          setSortBy(e.target.value);
                          setCurrentPage(1);
                        }}
                      >
                        <option value="default">Default</option>
                        <option value="price-low">Price: Low to High</option>
                        <option value="price-high">Price: High to Low</option>
                        <option value="name-az">Name: A-Z</option>
                        <option value="rating">Top Rated</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4">
                    <div className="filter__found">
                      <h6>
                        <span>{filteredProducts.length}</span> Products found
                      </h6>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-3">
                    <div className="filter__option">
                      {(selectedCategory || selectedDepartment || selectedColor || selectedSize || searchQuery) && (
                        <a
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            clearFilters();
                          }}
                          style={{ fontSize: 14, color: "#7fad39" }}
                        >
                          Clear Filters
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Product Grid */}
              <div className="row">
                {paginatedProducts.length === 0 && (
                  <div className="col-lg-12 text-center" style={{ padding: "40px 0" }}>
                    <h5>No products found matching your criteria.</h5>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        clearFilters();
                      }}
                      style={{ color: "#7fad39" }}
                    >
                      Clear all filters
                    </a>
                  </div>
                )}
                {paginatedProducts.map((product) => (
                  <div className="col-lg-4 col-md-6 col-sm-6" key={product.id}>
                    <div className="product__item">
                      <div
                        className="product__item__pic set-bg"
                        style={{ backgroundImage: `url(${product.image})` }}
                      >
                        {product.discount > 0 && (
                          <div className="product__discount__percent">
                            -{product.discount}%
                          </div>
                        )}
                        <ul className="product__item__pic__hover">
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
                      <div className="product__item__text">
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

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="product__pagination">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <a
                      key={page}
                      href="#"
                      className={currentPage === page ? "active" : ""}
                      onClick={(e) => {
                        e.preventDefault();
                        setCurrentPage(page);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      style={
                        currentPage === page
                          ? { background: "#7fad39", color: "#fff", borderColor: "#7fad39" }
                          : {}
                      }
                    >
                      {page}
                    </a>
                  ))}
                  {currentPage < totalPages && (
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setCurrentPage((prev) => prev + 1);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                    >
                      <i className="fa fa-long-arrow-right"></i>
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
