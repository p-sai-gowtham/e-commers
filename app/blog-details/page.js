"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import HeroNormal from "@/components/HeroNormal";
import blogs, { blogCategories, getBlogById, getRelatedBlogs, getRecentBlogs } from "../../data/blogs";

export default function BlogDetailsPage() {
  return (
    <Suspense fallback={<div></div>}>
      <BlogDetailsContent />
    </Suspense>
  );
}

function BlogDetailsContent() {
  const searchParams = useSearchParams();
  const blogId = searchParams.get("id");
  const blog = getBlogById(blogId) || blogs[0];
  const relatedBlogs = getRelatedBlogs(blog.id, 3);
  const recentBlogs = getRecentBlogs(3);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <HeroNormal />

      {/* Blog Details Hero Begin */}
      <section
        className="blog-details-hero set-bg"
        style={{ backgroundImage: `url(${blog.heroImage})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="blog__details__hero__text">
                <h2>{blog.title}</h2>
                <ul>
                  <li>By {blog.author}</li>
                  <li>{blog.date}</li>
                  <li>{blog.comments} Comments</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Blog Details Hero End */}

      {/* Blog Details Section Begin */}
      <section className="blog-details spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-5 order-md-1 order-2">
              <div className="blog__sidebar">
                <div className="blog__sidebar__search">
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                    }}
                  >
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
                        <Link
                          href={cat === "All" ? "/blog" : `/blog?category=${encodeURIComponent(cat)}`}
                          style={{
                            fontWeight: blog.category === cat ? "700" : "normal",
                            color: blog.category === cat ? "#7fad39" : undefined,
                          }}
                        >
                          {cat}
                          {cat !== "All" && (
                            <span> ({blogs.filter((b) => b.category === cat).length})</span>
                          )}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="blog__sidebar__item">
                  <h4>Recent News</h4>
                  <div className="blog__sidebar__recent">
                    {recentBlogs.map((rb) => (
                      <Link
                        href={`/blog-details?id=${rb.id}`}
                        className="blog__sidebar__recent__item"
                        key={rb.id}
                      >
                        <div className="blog__sidebar__recent__item__pic">
                          <img src={`/img/blog/sidebar/sr-${((rb.id - 1) % 3) + 1}.jpg`} alt={rb.title} />
                        </div>
                        <div className="blog__sidebar__recent__item__text">
                          <h6>{rb.title}</h6>
                          <span>{rb.date}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="blog__sidebar__item">
                  <h4>Search By</h4>
                  <div className="blog__sidebar__item__tags">
                    {["Cooking", "Healthy Food", "Life Style", "Organic", "Travel", "Recipes"].map((tag) => (
                      <Link key={tag} href={`/blog?search=${encodeURIComponent(tag)}`}>
                        {tag}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-md-7 order-md-1 order-1">
              <div className="blog__details__text">
                <img src={blog.contentImage} alt={blog.title} />
                <div dangerouslySetInnerHTML={{ __html: blog.content }} />
              </div>
              <div className="blog__details__content">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="blog__details__author">
                      <div className="blog__details__author__pic">
                        <img src={blog.authorImage} alt={blog.author} />
                      </div>
                      <div className="blog__details__author__text">
                        <h6>{blog.author}</h6>
                        <span>{blog.authorRole}</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="blog__details__widget">
                      <ul>
                        <li>
                          <span>Categories:</span> {blog.category}
                        </li>
                        <li>
                          <span>Tags:</span> {blog.tags.join(", ")}
                        </li>
                      </ul>
                      <div className="blog__details__social">
                        <a href="#"><i className="fa fa-facebook"></i></a>
                        <a href="#"><i className="fa fa-twitter"></i></a>
                        <a href="#"><i className="fa fa-google-plus"></i></a>
                        <a href="#"><i className="fa fa-linkedin"></i></a>
                        <a href="#"><i className="fa fa-envelope"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Blog Details Section End */}

      {/* Related Blog Section Begin */}
      <section className="related-blog spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title related-blog-title">
                <h2>Post You May Like</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {relatedBlogs.map((rb) => (
              <div className="col-lg-4 col-md-4 col-sm-6" key={rb.id}>
                <div className="blog__item">
                  <div className="blog__item__pic">
                    <img src={rb.image} alt={rb.title} />
                  </div>
                  <div className="blog__item__text">
                    <ul>
                      <li>
                        <i className="fa fa-calendar-o"></i> {rb.date}
                      </li>
                      <li>
                        <i className="fa fa-comment-o"></i> {rb.comments}
                      </li>
                    </ul>
                    <h5>
                      <Link href={`/blog-details?id=${rb.id}`}>{rb.title}</Link>
                    </h5>
                    <p>{rb.excerpt.substring(0, 80)}...</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Related Blog Section End */}
    </>
  );
}
