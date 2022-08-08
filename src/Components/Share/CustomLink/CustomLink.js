import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

function CustomLink({ children, to, ...props }) {
let resolved = useResolvedPath(to);
let match = useMatch({ path: resolved.pathname, end: true });
return (
   <div id="active">
      <Link
      style={{
         color: match ? "#147DFC" : "#fff",
         fontWeight:"normal"
      }}
      to={to}
      {...props}
      >
      {children}
      </Link>
      {/* {match && " (active)"} */}
   </div>
);
}

export default CustomLink;