import * as React from "react";
import { category } from "../api";
/* ADD IMPORTS FROM TODO ON THE NEXT LINE */

/**
 * The About function defines the component that makes up the About page
 * This component is attached to the /about path in router.jsx
 */

export default function Tags() {
  /* DECLARE STYLE AND TRIGGER FOR WIGGLE EFFECT FROM TODO ON NEXT LINE */
  const [categories, setCategory] = React.useState([]);

  React.useEffect(() => {
    fetch(category)
      .then(response => response.json())
      .then(data => setCategory(data.categories));
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
        本来
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
        {categories.map(item => (
          <Card item={item} key={item.name}/>
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
        maxWidth: "125px",
        width: "125px"
      }}
    >
      <img
        src={item.description}
        alt={item.name}
        style={{ border: "2px solid #f9f9f9", height: "75px" }}
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
        <h3
          style={{
            color: "#ffffff",
            fontWeight: 900,
            textAlign: "end",
            fontSize: "1.2rem"
          }}
        >
          {item.name}
        </h3>
      </div>
    </div>
  );
};
