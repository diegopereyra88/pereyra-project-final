import React from "react";
import Footer from "./piepagina";
import BarNav from "./barnav";

function Layouts(props) {
  const children = props.children;
  return (
    <React.Fragment>
      <BarNav />
      {children}
      <Footer />
    </React.Fragment>
  );
}
export default Layouts;
