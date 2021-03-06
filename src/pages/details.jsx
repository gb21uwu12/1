import * as React from "react";
import { Link } from "wouter";
import { posts } from "../api";
/* ADD IMPORTS FROM TODO ON THE NEXT LINE */

/**
 * The About function defines the component that makes up the About page
 * This component is attached to the /about path in router.jsx
 */

export default function Details(params) {
  /* DECLARE STYLE AND TRIGGER FOR WIGGLE EFFECT FROM TODO ON NEXT LINE */
  const [post, setPost] = React.useState([]);

  React.useEffect(() => {
    fetch(`https://public-api.wordpress.com/rest/v1.2/sites/gb21uwu12.wordpress.com/posts?tag=${params.slug}`)
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
        {params.slug}
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
          <Link key={item.ID} href={`/post/${item.slug}`}>
            <a>
              <Card item={item} />
            </a>
          </Link>
        ))}
      </div>
    </>
  );
}

const Card = ({ item }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        margin: "0.5em",
        maxWidth: "300px",
        width: "300px"
      }}
    >
      <img
        src={item.post_thumbnail.URL}
        alt={item.modified}
        style={{ border: "2px solid #f9f9f9", height: "250px" }}
      />
      <div
        style={{
          borderTop: "2px solid #f9f9f9",
          borderRight: "2px solid #f9f9f9",
          borderBottom: "2px solid #f9f9f9",
          padding: "1em",
          flex: 1
        }}
      >
        <h3 style={{ color: "#ffffff", fontWeight: 900, textAlign: 'end', fontSize: '1.2rem' }}>{item.title}</h3>
      </div>
    </div>
  );
};
