import * as React from "react";

export default () => (
  <div
    style={{
      position: "fixed",
      bottom: 0,
      width: "100vw",
        height: '64px',
      borderTop: "2px solid #f9f9f9"
    }}
  >
    <div
      style={{
        width: "100%",
        height: '100%',
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"
      }}
    >
      <div>家</div>
      <div>女の子</div>
      <div>Settings</div>
    </div>
  </div>
);
