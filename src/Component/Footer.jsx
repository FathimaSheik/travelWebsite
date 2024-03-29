import React, { useEffect } from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <footer
        id="footer_container"
        className="text-center text-lg-start bg-body-tertiary text-muted"
      >
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span>Social Networks</span>
          </div>
          <div>
            <Link href className="me-4 text-reset">
              <i className="bi bi-facebook" />
            </Link>
            <Link href className="me-4 text-reset">
              <i className="bi bi-twitter-x" />
            </Link>
            <Link href className="me-4 text-reset">
              <i className="bi bi-google" />
            </Link>
            <Link href className="me-4 text-reset">
              <i className="bi bi-instagram" />
            </Link>
          </div>
        </section>
        <section className>
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3" />
                  About Our Website
                </h6>
                <p>
                <Link href="#!" className="text-reset">
                   Our story
                  </Link> 
                </p>
                <p>
                <Link href="#!" className="text-reset">
                    Media centre
                    </Link>
                </p>
                <p>
                <Link href="#!" className="text-reset">
                    Business as a force for good
                    </Link>
                </p>
                <p>
                <Link href="#!" className="text-reset">
                    Annual reports
                    </Link>
                </p>
                <p>
                <Link href="#!" className="text-reset">
                    Careers
                    </Link>
                </p>
              </div>
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Support</h6>
                <p>
                  <Link href="#!" className="text-reset">
                    Help and Contact
                  </Link>
                </p>
                <p>
                  <Link href="#!" className="text-reset">
                    Baggage
                  </Link>
                </p>
                <p>
                  <Link href="#!" className="text-reset">
                    Special Assistance
                  </Link>
                </p>
                <p>
                  <Link href="#!" className="text-reset">
                    Flight disruption
                  </Link>
                </p>
                <p>
                  <Link href="#!" className="text-reset">
                    Flying Club help
                  </Link>
                </p>
              </div>
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Policies</h6>
                <p>
                  <Link href="#!" className="text-reset">
                    Modern Slavery statement
                  </Link>
                </p>
                <p>
                  <Link href="#!" className="text-reset">
                    Conditions of Carriage
                  </Link>
                </p>
                <p>
                  <Link href="#!" className="text-reset">
                    Termac delay plan
                  </Link>
                </p>
                <p>
                  <Link href="#!" className="text-reset">
                    Customer commitment
                  </Link>
                </p>
                <p>
                  <Link href="#!" className="text-reset">
                    Website security guidance
                  </Link>
                </p>
                <p>
                  <Link href="#!" className="text-reset">
                    Key terms
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
        <div
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          © 2024 Fathima Atlantic Travellings Ltd. All rights reserved.<br/>
          <Link className="text-reset fw-bold">Fathima Atlantic</Link>
        </div>
      </footer>
    </>
  );
};

export default Footer;