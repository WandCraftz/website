/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

function DarkFooter() {
  return (
    <footer className='footer ' data-background-color='black'>
      <Container>
        <div className=' text-center' id='copyright'>
          © {new Date().getFullYear()}, Designed byWandInfoTech .
        </div>
      </Container>
    </footer>
  );
}

export default DarkFooter;
