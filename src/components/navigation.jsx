import * as React from "react";
import { Link } from "wouter";

export default () => (
  <div
    style={{
      position: "fixed",
      bottom: 0,
      width: "100vw",
      height: "64px",
      borderTop: "2px solid #f9f9f9",
      backgroundColor: "#36454F"
    }}
  >
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"
      }}
    >
      <Link href="/">
        <a style={{ color: "#ffffff" }}>はじめに</a>
      </Link>
      <Link href="/idol">
        <a style={{ color: "#ffffff" }}>女の子</a>
      </Link>
      <Link href="/tags">
        <a style={{ color: "#ffffff" }}>本来</a>
      </Link>
    </div>
  </div>
);
