"use client";

import { useState } from "react";
import Link from "next/link";
import HeroNormal from "@/components/HeroNormal";
import Breadcrumb from "@/components/Breadcrumb";
import blogs, { blogCategories, getRecentBlogs } from "../../data/blogs";

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const recentBlogs = getRecentBlogs(3);

  const filteredBlogs = blogs.filter((blog) => {
    const matchesCategory =
      selectedCategory === "All" || blog.category === selectedCategory;
    const matchesSearch =
      !searchQuery ||
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const handleSearch = (e) => {
    e.preventDefault();
  };

  const handleTagClick = (tag) => {
    setSearchQuery(tag);
    setSelectedCategory("All");
  };

  return (
    <>
      <HeroNormal />
      <Breadcrumb
        title="Blog"
        pages={[{ label: "Home", href: "/" }, { label: "Blog" }]}
      />

      <section className="blog spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-5">
              <div className="blog__sidebar">
                <div className="blog__sidebar__search">
                  <form onSubmit={handleSearch}>
                    <input
                      type="text"
                      placeholder="Search..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button type="submit">
                      <span className="icon_search"></span>
                    </button>
                  </form>
                </div>
                <div className="blog__sidebar__item">
                  <h4>Categories</h4>
                  <ul>
                    {blogCategories.map((cat) => (
                      <li key={cat}>
                        <a
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            setSelectedCategory(cat);
                            setSearchQuery("");
                          }}
                          style={{
                            fontWeight: selectedCategory === cat ? "700" : "normal",
                            color: selectedCategory === cat ? "#7fad39" : undefined,
                          }}
                        >
                          {cat}
                          {cat !== "All" && (
                            <span> ({blogs.filter((b) => b.category === cat).length})</span>
                          )}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="blog__sidebar__item">
                  <h4>Recent News</h4>
                  <div className="blog__sidebar__recent">
                    {recentBlogs.map((blog) => (
                      <Link
                        href={`/blog-details?id=${blog.id}`}
                        className="blog__sidebar__recent__item"
                        key={blog.id}
                      >
                        <div className="blog__sidebar__recent__item__pic">
                          <img src={`/img/blog/sidebar/sr-${((blog.id - 1) % 3) + 1}.jpg`} alt={blog.title} />
                        </div>
                        <div className="blog__sidebar__recent__item__text">
                          <h6>{blog.title}</h6>
                          <span>{blog.date}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="blog__sidebar__item">
                  <h4>Search By</h4>
                  <div className="blog__sidebar__item__tags">
                    {["Cooking", "Healthy Food", "Life Style", "Organic", "Travel", "Recipes"].map((tag) => (
                      <a
                        key={tag}
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          handleTagClick(tag);
                        }}
                        style={
                          searchQuery === tag
                            ? { background: "#7fad39", color: "#fff", borderColor: "#7fad39" }
                            : {}
                        }
                      >
                        {tag}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-md-7">
              <div className="row">
                {filteredBlogs.length === 0 && (
                  <div className="col-lg-12 text-center" style={{ padding: "40px 0" }}>
                    <h5>No blog posts found.</h5>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setSelectedCategory("All");
                        setSearchQuery("");
                      }}
                      style={{ color: "#7fad39" }}
                    >
                      Clear filters
                    </a>
                  </div>
                )}
                {filteredBlogs.map((blog) => (
                  <div className="col-lg-6 col-md-6 col-sm-6" key={blog.id}>
                    <div className="blog__item">
                      <div className="blog__item__pic">
                        <img src={blog.image} alt={blog.title} />
                      </div>
                      <div className="blog__item__text">
                        <ul>
                          <li>
                            <i className="fa fa-calendar-o"></i> {blog.date}
                          </li>
                          <li>
                            <i className="fa fa-comment-o"></i> {blog.comments}
                          </li>
                        </ul>
                        <h5>
                          <Link href={`/blog-details?id=${blog.id}`}>
                            {blog.title}
                          </Link>
                        </h5>
                        <p>{blog.excerpt.substring(0, 80)}...</p>
                        <Link href={`/blog-details?id=${blog.id}`} className="blog__btn">
                          READ MORE <span className="arrow_right"></span>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
