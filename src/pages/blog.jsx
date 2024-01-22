import React from "react";
import BigCard from "../components/BigCard/BigCard";
import BlogCard from "../components/BlogCard/BlogCard";

function Blog() {
  return (
    <div>
      <h2 className="title-second">Recent blog posts</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <BigCard />
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          marginTop: 12,
        }}
      >
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          marginTop: 24,
        }}
      >
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  );
}

export default Blog;
