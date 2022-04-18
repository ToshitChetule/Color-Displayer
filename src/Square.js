import React from "react";

const Square = ({ colorValue }) => {
  return (
    <>
      <h1 style={{ fontSize: "larger" }}>Color-Displayer</h1>
      <br />
      <section className="Square" style={{ backgroundColor: colorValue }}>
        <p>{colorValue ? colorValue : "Empty Value"}</p>
      </section>
    </>
  );
};

Square.defaultProps = {
  colorValue: "Empty Value",
};

export default Square;
