import React from "react";
import "./Blog.css";
import DarkThemeImage from "../images/blogs/DarkTheme.png";
import LangaugeImage from "../images/blogs/Langauge.png";
import MphasisImage from "../images/blogs/Mphasis.png";

const blogPosts = [
  {
    id: 1,
    title: "Why Programmers Prefer Dark Mode: A Computer Science Perspective",
    // date: 'Apr 8, 2022',
    readTime: "5min read",
    image: DarkThemeImage,
    link: "https://www.geeksforgeeks.org/connect/post/93801",
  },
  {
    id: 2,
    title:
      "My Interview Experience at Mphasis – From Preparation to That Final Announcement",
    // date: 'Mar 15, 2022',
    readTime: "10min read",
    image: MphasisImage,
    link: "https://www.geeksforgeeks.org/connect/post/89728",
  },
  {
    id: 3,
    title: "Why Developers Love Loosely Typed Languages… But Trust Strict Ones",
    // date: 'Feb 20, 2022',
    readTime: "8min read",
    image: LangaugeImage,
    link: "https://www.geeksforgeeks.org/connect/post/97634",
  },
];

const Blog = () => {
  return (
    <section className="blog-section" id="blog">
      <h2 className="section-title">
        RANDOM <br />
        <span className="stroke-text">THOUGHTS</span>
      </h2>

      <div className="blog-list">
        {blogPosts.map((post) => (
          <div className="blog-post" key={post.id}>
            <img src={post.image} alt={post.title} className="post-image" />
            <div className="post-content">
              <h3 className="post-title">{post.title}</h3>
              <div className="post-meta">
                <span>{post.date}</span>
                <span className="dot-separator">•</span>
                <span>{post.readTime}</span>
              </div>
            </div>
            <a
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="post-arrow-btn"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
