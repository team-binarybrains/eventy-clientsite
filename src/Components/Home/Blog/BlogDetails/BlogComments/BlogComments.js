import React, { useEffect, useState } from "react";
import { AiTwotoneStar } from "react-icons/ai";
import { GiSelfLove } from "react-icons/gi";
import { FaShareSquare, FaReplyAll } from "react-icons/fa";
import WriteAComment from "../../WriteAComment/WriteAComment";
import "./BlogComment.s.css";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../../../Firebase/firebase.init";
import Comment from "./Comment";
const BlogComments = () => {
  const [comments, setComment] = useState([]);
  const [color,setColor]=useState(true);
  const [user] = useAuthState(auth);

 
  
  console.log(user);
  useEffect(() => {
    fetch("http://localhost:5000/comment")
      .then((res) => res.json())
      .then((data) => setComment(data));
  }, []);

  


  return (
    <div className="max-w-7xl mx-auto px-5  ">
      <h1 className="text-[36px] ">
        Blog <strong>Comments</strong>
      </h1>
      <div className="  gap-6 mt-16 ">
      {[...comments]
            .reverse()
            .slice(0, 4)
            .map((comment) => <Comment comment={comment}></Comment>)}
      </div>
      <WriteAComment></WriteAComment>
    </div>
  );
};

export default BlogComments;
