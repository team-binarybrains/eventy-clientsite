import React from "react";
import useRefetch from "../../../../Hooks/useRefetch";
import WriteAComment from "../../WriteAComment/WriteAComment";
import Loading from "../../../../Share/Loading/Loading";
import "./BlogComment.s.css";
import Comment from "./Comment";

const BlogComments = ({ blogId }) => {
  const [comments, loading, refetch] = useRefetch(
    `https://eventy-serversite-production.up.railway.app/comment/${blogId}`,
    []
  );

  return (
    <section className="max-w-7xl mx-auto px-5  ">
      {comments?.length ? (
        <h1
          className="text-[36px] "
          data-aos="fade-right"
          data-aos-duration="2500"
        >
          Blog <strong>Comments</strong>
        </h1>
      ) : (
        ""
      )}
      {loading && <Loading />}
      <div className="max-w-3xl">
        {[...comments]
          .reverse()
          .slice(0, 4)
          .map((comment) => (
            <Comment comment={comment}></Comment>
          ))}
      </div>
      <WriteAComment refetch={refetch} blogId={blogId}></WriteAComment>
    </section>
  );
};

export default BlogComments;
