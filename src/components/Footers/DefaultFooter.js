/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function DefaultFooter() {
  return (
    <>
      <footer className="footer footer-default">
        <Container>
          <div className=" text-center" id="copyright">
            © {new Date().getFullYear()}, Designed by WandCraft . Coded by
            Naveen Kumar .
          </div>
        </Container>
      </footer>
    </>
  );
}

export default DefaultFooter;
