import * as React from "react";
import { posts } from "../api";
/* ADD IMPORTS FROM TODO ON THE NEXT LINE */

/**
 * The About function defines the component that makes up the About page
 * This component is attached to the /about path in router.jsx
 */

export default function Home() {
  /* DECLARE STYLE AND TRIGGER FOR WIGGLE EFFECT FROM TODO ON NEXT LINE */
  const [post, setPost] = React.useState([]);

  React.useEffect(() => {
    fetch(posts)
      .then(response => response.json())
      .then(data => setPost(data.posts));
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
        はじめに
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
        {post.map(item => (
          <Card item={item} key={item.ID} />
        ))}
      </div>
    </>
  );
}

const Card = ({ item }) => {
  console.log(item);
  return (
    <div style={{ display: "flex", flexDirection: "row", margin: '0.5em' }}>
      <div
        style={{
          borderTop: "2px solid #f9f9f9",
          borderLeft: "2px solid #f9f9f9",
          borderBottom: "2px solid #f9f9f9",
          padding: "1em"
        }}
      >
        <h3 style={{ color: "#ffffff", fontWeight: 900 }}>{item.title}</h3>
      </div>
      <img
        src={item.post_thumbnail.URL}
        alt={item.modified}
        style={{ border: "2px solid #f9f9f9", width: "200px" }}
      />
    </div>
  );
};
