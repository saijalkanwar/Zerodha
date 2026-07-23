import React from "react";

function Universe() {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="fw-semibold">The Zerodha Universe</h1>
        <p className="text-muted">
          Extend your trading and investment experience even further with our
          partner platforms.
        </p>
      </div>

      <div className="row text-center">

        <div className="col-lg-4 col-md-6 mb-5">
          <img
            src="media/zerodhaFundhouse.png"
            alt="Zerodha Fund House"
            className="img-fluid"
            style={{ maxWidth: "220px", height: "60px", objectFit: "contain" }}
          />
          <p className="text-muted small mt-3">
            Our asset management venture creating simple and transparent index
            funds.
          </p>
        </div>

        <div className="col-lg-4 col-md-6 mb-5">
          <img
            src="media/sensibullLogo.svg"
            alt="Sensibull"
            className="img-fluid"
            style={{ maxWidth: "170px", height: "60px", objectFit: "contain" }}
          />
          <p className="text-muted small mt-3">
            Options trading platform that lets you create, analyze and execute
            strategies.
          </p>
        </div>

        <div className="col-lg-4 col-md-6 mb-5">
          <img
            src="media/streakLogo.png"
            alt="Streak"
            className="img-fluid"
            style={{ maxWidth: "170px", height: "60px", objectFit: "contain" }}
          />
          <p className="text-muted small mt-3">
            Systematic trading platform that allows you to create and backtest
            strategies.
          </p>
        </div>

        <div className="col-lg-4 col-md-6 mb-5">
          <img
            src="media/smallcaseLogo.png"
            alt="Smallcase"
            className="img-fluid"
            style={{ maxWidth: "170px", height: "60px", objectFit: "contain" }}
          />
          <p className="text-muted small mt-3">
            Thematic investing platform that helps you invest in diversified
            portfolios.
          </p>
        </div>

        <div className="col-lg-4 col-md-6 mb-5">
          <img
            src="media/tickertapeLogo.png"
            alt="Tickertape"
            className="img-fluid"
            style={{ maxWidth: "170px", height: "60px", objectFit: "contain" }}
          />
          <p className="text-muted small mt-3">
            Investment research platform with fundamental analysis and market
            insights.
          </p>
        </div>

        <div className="col-lg-4 col-md-6 mb-5">
          <img
            src="media/dittoLogo.png"
            alt="Ditto"
            className="img-fluid"
            style={{ maxWidth: "170px", height: "60px", objectFit: "contain" }}
          />
          <p className="text-muted small mt-3">
            Personalized advice on life and health insurance.
          </p>
        </div>

      </div>

      <div className="text-center mt-4">
        <button className="btn btn-primary px-5 py-2 fs-5">
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default Universe;