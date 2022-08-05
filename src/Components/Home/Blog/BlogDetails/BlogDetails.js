import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import BlogComments from "./BlogComments/BlogComments";
import "./BlogDetails.css";
import FeaturedEvent from "./FeaturedEvent/FeaturedEvent";
const BlogDetails = () => {
  const [blog, setBlog] = useState([]);
  const { blogId } = useParams();
  useEffect(() => {
    fetch(`http://localhost:5000/blogsdetail/${blogId}`)
      .then((res) => res.json())
      .then((data) => setBlog(data));
  }, [blogId]);
  console.log(blog);
  return (
    <div className="route">
      <div className="banner-background">
        <div className="flex justify-center items-center py-20">
          <div className="text-center">
            <h1 className="breadcrumb-section font-bold">BLOG SINGLE</h1>
            <h1 className="big-title">
              Eventy
              <br />
              <strong className="text-[#ffbe30]">BLOG DETAILS</strong>
            </h1>
            <div className="mt-3">
              <Link
                to="/"
                className="text-[16px] font-bold hover:text-[#ffbe30] text-white border-r-4 pr-3"
              >
                Home
              </Link>
              <Link
                to="/"
                className="text-[16px] font-bold hover:text-[#ffbe30] text-white border-r-4 pl-3 pr-3"
              >
                Blogs
              </Link>
              <p className="text-[16px] font-bold text-white inline-block  pl-2">
                Blog Details
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <FeaturedEvent blog={blog}></FeaturedEvent>
        <BlogComments />
      </div>
    </div>
  );
};

export default BlogDetails;
