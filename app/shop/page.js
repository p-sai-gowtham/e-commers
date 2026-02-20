import HeroNormal from "@/components/HeroNormal";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";

export default function ShopPage() {
  const departments = [
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
  ];

  const colors = [
    { name: "White", id: "white", modifier: "--white" },
    { name: "Gray", id: "gray", modifier: "--gray" },
    { name: "Red", id: "red", modifier: "--red" },
    { name: "Black", id: "black", modifier: "--black" },
    { name: "Blue", id: "blue", modifier: "--blue" },
    { name: "Green", id: "green", modifier: "--green" },
  ];

  const sizes = [
    { name: "Large", id: "large" },
    { name: "Medium", id: "medium" },
    { name: "Small", id: "small" },
    { name: "Tiny", id: "tiny" },
  ];

  const latestProducts = [
    { img: "/img/latest-product/lp-1.jpg", name: "Crab Pool Security", price: "$30.00" },
    { img: "/img/latest-product/lp-2.jpg", name: "Crab Pool Security", price: "$30.00" },
    { img: "/img/latest-product/lp-3.jpg", name: "Crab Pool Security", price: "$30.00" },
  ];

  const discountProducts = [
    {
      img: "/img/product/discount/pd-1.jpg",
      category: "Dried Fruit",
      name: "Raisin'n'nuts",
      price: "$30.00",
      oldPrice: "$36.00",
      discount: "-20%",
    },
    {
      img: "/img/product/discount/pd-2.jpg",
      category: "Vegetables",
      name: "Vegetables'package",
      price: "$30.00",
      oldPrice: "$36.00",
      discount: "-20%",
    },
    {
      img: "/img/product/discount/pd-3.jpg",
      category: "Dried Fruit",
      name: "Mixed Fruitss",
      price: "$30.00",
      oldPrice: "$36.00",
      discount: "-20%",
    },
  ];

  const products = Array.from({ length: 12 }, (_, i) => ({
    img: `/img/product/product-${i + 1}.jpg`,
    name: "Crab Pool Security",
    price: "$30.00",
  }));

  return (
    <>
      <HeroNormal />
      <Breadcrumb
        title="Organi Shop"
        pages={[{ label: "Home", href: "/" }, { label: "Shop" }]}
      />

      {/* Product Section Begin */}
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
                        <a href="#">{dept}</a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Price */}
                <div className="sidebar__item">
                  <h4>Price</h4>
                  <div className="price-range-wrap">
                    <div
                      className="price-range ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"
                      data-min="10"
                      data-max="540"
                    >
                      <div className="ui-slider-range ui-corner-all ui-widget-header"></div>
                      <span
                        tabIndex="0"
                        className="ui-slider-handle ui-corner-all ui-state-default"
                      ></span>
                      <span
                        tabIndex="0"
                        className="ui-slider-handle ui-corner-all ui-state-default"
                      ></span>
                    </div>
                    <div className="range-slider">
                      <div className="price-input">
                        <input type="text" id="minamount" />
                        <input type="text" id="maxamount" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Colors */}
                <div className="sidebar__item sidebar__item__color--option">
                  <h4>Colors</h4>
                  {colors.map((color) => (
                    <div
                      key={color.id}
                      className={`sidebar__item__color sidebar__item__color${color.modifier}`}
                    >
                      <label htmlFor={color.id}>
                        {color.name}
                        <input type="radio" id={color.id} name="color" />
                      </label>
                    </div>
                  ))}
                </div>

                {/* Popular Size */}
                <div className="sidebar__item">
                  <h4>Popular Size</h4>
                  {sizes.map((size) => (
                    <div key={size.id} className="sidebar__item__size">
                      <label htmlFor={size.id}>
                        {size.name}
                        <input type="radio" id={size.id} name="size" />
                      </label>
                    </div>
                  ))}
                </div>

                {/* Latest Products */}
                <div className="sidebar__item">
                  <div className="latest-product__text">
                    <h4>Latest Products</h4>
                    <div className="latest-prdouct__slider__item">
                      {latestProducts.map((product, index) => (
                        <a href="#" className="latest-product__item" key={index}>
                          <div className="latest-product__item__pic">
                            <img src={product.img} alt="" />
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
              </div>
            </div>

            {/* Main Content */}
            <div className="col-lg-9 col-md-7">
              {/* Sale Off / Discount Products */}
              <div className="product__discount">
                <div className="section-title product__discount__title">
                  <h2>Sale Off</h2>
                </div>
                <div className="row">
                  {discountProducts.map((product, index) => (
                    <div className="col-lg-4" key={index}>
                      <div className="product__discount__item">
                        <div
                          className="product__discount__item__pic set-bg"
                          style={{ backgroundImage: `url(${product.img})` }}
                        >
                          <div className="product__discount__percent">
                            {product.discount}
                          </div>
                          <ul className="product__item__pic__hover">
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
                        <div className="product__discount__item__text">
                          <span>{product.category}</span>
                          <h5>
                            <a href="#">{product.name}</a>
                          </h5>
                          <div className="product__item__price">
                            {product.price} <span>{product.oldPrice}</span>
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
                      <select>
                        <option value="0">Default</option>
                        <option value="0">Default</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4">
                    <div className="filter__found">
                      <h6>
                        <span>16</span> Products found
                      </h6>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-3">
                    <div className="filter__option">
                      <span className="icon_grid-2x2"></span>
                      <span className="icon_ul"></span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Product Grid */}
              <div className="row">
                {products.map((product, index) => (
                  <div className="col-lg-4 col-md-6 col-sm-6" key={index}>
                    <div className="product__item">
                      <div
                        className="product__item__pic set-bg"
                        style={{ backgroundImage: `url(${product.img})` }}
                      >
                        <ul className="product__item__pic__hover">
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
                      <div className="product__item__text">
                        <h6>
                          <a href="#">{product.name}</a>
                        </h6>
                        <h5>{product.price}</h5>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <div className="product__pagination">
                <a href="#">1</a>
                <a href="#">2</a>
                <a href="#">3</a>
                <a href="#">
                  <i className="fa fa-long-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Product Section End */}
    </>
  );
}
