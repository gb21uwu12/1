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
      <h1>はじめに</h1>
      {post.map(item => (
        <Card item={item} key={item.ID} />
      ))}
    </>
  );
}

const Card = ({ item }) => {
  console.log(item);
  return (
    <div>
      <p>{item.title}</p>
      <img src={item.attachments[25].thumbnails.thumbnail} alt={item.modified} />
    </div>
  );
};
