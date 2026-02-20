"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "../context/CartContext";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const { cartCount, cartTotal, wishlist } = useCart();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Shop", href: "/shop" },
    {
      label: "Pages",
      href: "#",
      dropdown: [
        { label: "Shop Details", href: "/shop-details" },
        { label: "Shopping Cart", href: "/cart" },
        { label: "Check Out", href: "/checkout" },
        { label: "Blog Details", href: "/blog-details?id=1" },
      ],
    },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ];

  function getActiveMenu() {
    if (pathname === "/") return "Home";
    if (pathname === "/shop") return "Shop";
    if (pathname === "/blog") return "Blog";
    if (pathname === "/contact") return "Contact";
    if (["/shop-details", "/cart", "/checkout", "/blog-details"].includes(pathname))
      return "Pages";
    return "";
  }

  const activeMenu = getActiveMenu();

  return (
    <>
      {/* Humberger Begin */}
      <div
        className={`humberger__menu__overlay${menuOpen ? " active" : ""}`}
        onClick={() => setMenuOpen(false)}
      ></div>
      <div
        className={`humberger__menu__wrapper${
          menuOpen ? " show__humberger__menu__wrapper" : ""
        }`}
      >
        <div className="humberger__menu__logo">
          <Link href="/">
            <img src="/img/logo.png" alt="Ogani" />
          </Link>
        </div>
        <div className="humberger__menu__cart">
          <ul>
            <li>
              <Link href="/shop">
                <i className="fa fa-heart"></i> <span>{wishlist.length}</span>
              </Link>
            </li>
            <li>
              <Link href="/cart">
                <i className="fa fa-shopping-bag"></i> <span>{cartCount}</span>
              </Link>
            </li>
          </ul>
          <div className="header__cart__price">
            item: <span>${cartTotal.toFixed(2)}</span>
          </div>
        </div>
        <div className="humberger__menu__widget">
          <div className="header__top__right__language">
            <img src="/img/language.png" alt="" />
            <div>English</div>
            <span className="arrow_carrot-down"></span>
            <ul>
              <li>
                <a href="#">English</a>
              </li>
            </ul>
          </div>
          <div className="header__top__right__auth">
            <a href="#">
              <i className="fa fa-user"></i> Login
            </a>
          </div>
        </div>
        <nav className="humberger__menu__nav mobile-menu">
          <ul>
            {navItems.map((item) => (
              <li
                key={item.label}
                className={activeMenu === item.label ? "active" : ""}
              >
                <Link href={item.href} onClick={() => setMenuOpen(false)}>
                  {item.label}
                </Link>
                {item.dropdown && (
                  <ul className="header__menu__dropdown">
                    {item.dropdown.map((sub) => (
                      <li key={sub.label}>
                        <Link href={sub.href} onClick={() => setMenuOpen(false)}>
                          {sub.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <div id="mobile-menu-wrap"></div>
        <div className="header__top__right__social">
          <a href="#"><i className="fa fa-facebook"></i></a>
          <a href="#"><i className="fa fa-twitter"></i></a>
          <a href="#"><i className="fa fa-linkedin"></i></a>
          <a href="#"><i className="fa fa-pinterest-p"></i></a>
        </div>
        <div className="humberger__menu__contact">
          <ul>
            <li><i className="fa fa-envelope"></i> hello@colorlib.com</li>
            <li>Free Shipping for all Order of $99</li>
          </ul>
        </div>
      </div>
      {/* Humberger End */}

      {/* Header Section Begin */}
      <header className="header">
        <div className="header__top">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div className="header__top__left">
                  <ul>
                    <li><i className="fa fa-envelope"></i> hello@colorlib.com</li>
                    <li>Free Shipping for all Order of $99</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="header__top__right">
                  <div className="header__top__right__social">
                    <a href="#"><i className="fa fa-facebook"></i></a>
                    <a href="#"><i className="fa fa-twitter"></i></a>
                    <a href="#"><i className="fa fa-linkedin"></i></a>
                    <a href="#"><i className="fa fa-pinterest-p"></i></a>
                  </div>
                  <div className="header__top__right__language">
                    <img src="/img/language.png" alt="" />
                    <div>English</div>
                    <span className="arrow_carrot-down"></span>
                    <ul>
                      <li><a href="#">English</a></li>
                    </ul>
                  </div>
                  <div className="header__top__right__auth">
                    <a href="#">
                      <i className="fa fa-user"></i> Login
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="header__logo">
                <Link href="/">
                  <img src="/img/logo.png" alt="Ogani" />
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <nav className="header__menu">
                <ul>
                  {navItems.map((item) => (
                    <li
                      key={item.label}
                      className={activeMenu === item.label ? "active" : ""}
                    >
                      <Link href={item.href}>{item.label}</Link>
                      {item.dropdown && (
                        <ul className="header__menu__dropdown">
                          {item.dropdown.map((sub) => (
                            <li key={sub.label}>
                              <Link href={sub.href}>{sub.label}</Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            <div className="col-lg-3">
              <div className="header__cart">
                <ul>
                  <li>
                    <Link href="/shop">
                      <i className="fa fa-heart"></i> <span>{wishlist.length}</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/cart">
                      <i className="fa fa-shopping-bag"></i> <span>{cartCount}</span>
                    </Link>
                  </li>
                </ul>
                <div className="header__cart__price">
                  item: <span>${cartTotal.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="humberger__open" onClick={() => setMenuOpen(true)}>
            <i className="fa fa-bars"></i>
          </div>
        </div>
      </header>
      {/* Header Section End */}
    </>
  );
}
