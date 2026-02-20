"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

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

export default function HeroNormal() {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/shop?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <section className="hero hero-normal">
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
                    <Link href={`/shop?department=${encodeURIComponent(dept)}`}>
                      {dept}
                    </Link>
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
          </div>
        </div>
      </div>
    </section>
  );
}
