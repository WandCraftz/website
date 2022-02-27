/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

function TransparentFooter() {
  return (
    <footer className="footer">
      <Container>
        <div className=" text-center" id="copyright">
          © {new Date().getFullYear()}, Designed by WandCraft . Coded by Naveen
          Kumar .
        </div>
      </Container>
    </footer>
  );
}

export default TransparentFooter;
