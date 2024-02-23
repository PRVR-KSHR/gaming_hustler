import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faYoutube,
  faInstagram,
  faPlaystation,
  faSteam,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    
    <footer id="footer">
      <div className="footer py-5 mt-1">
        <div className="container">
          <div className="row">
          <div className="col-md-12 text-center">
      <button
        className="footer-link"
        onClick={() => (window.location.href = "#")}
      >
        Home
      </button>
      <button
        className="footer-link"
        onClick={() => (window.location.href = "#Reviews")}
      >
        Reviews
      </button>
      <button
        className="footer-link"
        onClick={() => (window.location.href = "#Developers")}
      >
        Developers
      </button>
      <button
        className="footer-link"
        onClick={() => (window.location.href = "#FAQ")}
      >
        FAQ
      </button>

      <div className="footer-social pt-4 text-center">
        <a href="#">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faYoutube} />
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faPlaystation} />
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faSteam} />
        </a>
      </div>
    </div>
            <div className="col-sm-12">
              <div className="footer-copy">
                <div className="copy-right text-center">
                  <p className="text-light">
                    Copyright © 2022. All Rights Reserved By{" "}
                    <span className="text-danger bg-light">
                      @GamingHustlers
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
