import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';

export default function AppFooter() {
    const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
      window.addEventListener("scroll", () => {
          if (window.scrollY > 400) {
              setShowTopBtn(true);
          } else {
              setShowTopBtn(false);
          }
      });
  }, []);

  function goTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

    return(
        <div>
            {
                showTopBtn && (
                <div className="go-top" onClick={goTop}></div>
                )
            }
            <Container fluid>
            <div className="copyright">&copy; 2024 Zahrin Savana. All Right Reserved.</div>
            </Container>
        </div>
    )
}