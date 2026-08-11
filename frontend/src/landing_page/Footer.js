import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(250, 250, 250)" }}>
      <div className="container border-top mt-5">
        <div className="row mt-5">

          <div className="col">
            <img
              src="/media/logo.svg"
              alt="Zerodha Logo"
              style={{ width: "50%" }}
            />

            <p>
              &copy; 2010 - 2024, Not Zerodha Broking Ltd. All rights reserved.
            </p>
          </div>

          <div className="col">
            <p>Company</p>

            <Link to="/about">About</Link>
            <br />

            <Link to="/product">Products</Link>
            <br />

            <Link to="/pricing">Pricing</Link>
            <br />

            <Link to="/signup">Referral programme</Link>
            <br />

            <Link to="/about">Careers</Link>
            <br />

            <a
              href="https://zerodha.tech/"
              target="_blank"
              rel="noreferrer"
            >
              Zerodha.tech
            </a>
            <br />

            <a
              href="https://zerodha.com/media/"
              target="_blank"
              rel="noreferrer"
            >
              Press & media
            </a>
            <br />

            <a
              href="https://zerodha.com/about/csr/"
              target="_blank"
              rel="noreferrer"
            >
              Zerodha cares (CSR)
            </a>
            <br />
          </div>

          <div className="col">
            <p>Support</p>

            <Link to="/support">Contact</Link>
            <br />

            <a
              href="https://support.zerodha.com/"
              target="_blank"
              rel="noreferrer"
            >
              Support portal
            </a>
            <br />

            <a
              href="https://zerodha.com/z-connect/"
              target="_blank"
              rel="noreferrer"
            >
              Z-Connect blog
            </a>
            <br />

            <a
              href="https://zerodha.com/charges/"
              target="_blank"
              rel="noreferrer"
            >
              List of charges
            </a>
            <br />

            <a
              href="https://zerodha.com/resources/"
              target="_blank"
              rel="noreferrer"
            >
              Downloads & resources
            </a>
            <br />
          </div>

          <div className="col">
            <p>Account</p>

            <Link to="/signup">Open an account</Link>
            <br />

            <a
              href="https://zerodha.com/fund-transfer/"
              target="_blank"
              rel="noreferrer"
            >
              Fund transfer
            </a>
            <br />

            <a
              href="https://zerodha.com/60-day-challenge/"
              target="_blank"
              rel="noreferrer"
            >
              60 day challenge
            </a>
            <br />
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;