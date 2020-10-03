import React from "react";

export default function Header() {
  return (
    <div style={headerContainerStyle}>
      <h1>Nouraiz To-Do App</h1>
    </div>
  );
}

const headerContainerStyle = {
  display: "flex",
  justifyContent: "center",
  backgroundColor: "black",
  color: 'white',
  padding: "15px",
  borderBottom: "1.5px solid black",
  boxShadow: "0px 0px 10px 2px grey",
};
