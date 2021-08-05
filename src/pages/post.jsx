import * as React from "react";
import { posts } from "../api";
import { Link } from "wouter";
/* ADD IMPORTS FROM TODO ON THE NEXT LINE */

/**
 * The About function defines the component that makes up the About page
 * This component is attached to the /about path in router.jsx
 */

export default function Post(params) {
  /* DECLARE STYLE AND TRIGGER FOR WIGGLE EFFECT FROM TODO ON NEXT LINE */
  const [post, setPost] = React.useState([]);

  React.useEffect(() => {
    fetch(
      `https://public-api.wordpress.com/rest/v1.1/sites/gb21uwu12.wordpress.com/posts/slug:${params.id}`
    )
      .then(response => response.json())
      .then(data => setPost(data));
    console.log(post);
  }, []);

  return (
    <>
      <h1
        style={{
          color: "#ffffff",
          fontWeight: 900,
          alignSelf: "start",
          marginBottom: "1em"
        }}
      >
        {post.title}
      </h1>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "start"
        }}
      >
        <div
          dangerouslySetInnerHTML={{ __html: post.content }}
          style={{ margin: 0, padding: 0 }}
        />
      </div>
    </>
  );
}
