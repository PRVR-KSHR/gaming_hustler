import React from "react";

const League = () => {
  return (
    <div className="body3">
      <div className="row row-cols-1 row-cols-md-3 py-3 px-3 text-light">
        <div className="col">
          <div className="card1 h-100 w-80 ">
            <img
              src="https://besthqwallpapers.com/Uploads/4-5-2020/131800/thumb2-league-of-legends-logo-poster-2020-games-lol-artwork.jpg"
              className="card-img-top"
              alt="..."
              loading="lazy"
            />
            <div className="card-body">
              <h5 className="card-title text-warning">League Of Legend</h5>
              <br />
              <div className="card-text-monospace">
                <div className="mod1 mb-2 ">
                  <div className="mid1">
                    <i className="bi bi-coin"> </i>Winning
                  </div>
                  <div className="mid1">
                    <i className="bi bi-star-fill"> </i>Type
                  </div>
                  <div className="mid1">
                    <i className="bi bi-star-fill"> </i>Mode
                  </div>
                </div>
                <div className="mod2 mb-3 text-monospace ">
                  <div className="mid2 ">10k</div>
                  <div className="mid2">Squad</div>
                  <div className="mid2">--</div>
                </div>
              </div>
              <a href="Playgames" className="btn btn-outline-primary">
                Join
              </a>
              <a
                href="https://youtu.be/aR-KAldshAE"
                target="_blank"
                className="btn btn-warning"
                rel="noreferrer"
              >
                watch
              </a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card1 h-100">
            <img
              src="https://besthqwallpapers.com/Uploads/4-5-2020/131800/thumb2-league-of-legends-logo-poster-2020-games-lol-artwork.jpg"
              className="card-img-top"
              alt="..."
              loading="lazy"
            />
            <div className="card-body">
              <h5 className="card-title text-warning">League Of Legend</h5>
              <br />
              <h6 className="card-text-monospace">
                <pre className="tab">
                  <i className="bi bi-coin"> </i>Winning{"         "}
                  <i className="bi bi-star-fill" />
                  Type{"           "}
                  <i className="bi bi-star-fill"> </i>MODE{" "}
                </pre>
              </h6>
              <p />
              <pre className="tab">
                {"   "}10K{"               "}Duo{"              "}--
              </pre>
              <p />
              <a href="Playgames" className="btn btn-outline-primary">
                Join
              </a>
              <a
                href="https://youtu.be/N-yEhErUIn0"
                target="_blank"
                className="btn btn-warning"
                rel="noreferrer"
              >
                watch
              </a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card1 h-100">
            <img
              src="https://besthqwallpapers.com/Uploads/4-5-2020/131800/thumb2-league-of-legends-logo-poster-2020-games-lol-artwork.jpg"
              className="card-img-top"
              alt="..."
              loading="lazy"
            />
            <div className="card-body">
              <h5 className="card-title text-warning">League Of Legend</h5>
              <br />
              <h6 className="card-text-monospace">
                <pre className="tab">
                  <i className="bi bi-coin"> </i>Winning{"         "}
                  <i className="bi bi-star-fill" />
                  Type{"           "}
                  <i className="bi bi-star-fill"> </i>MODE{" "}
                </pre>
              </h6>
              <p />
              <pre className="tab">
                {"   "}1K{"                "}TDM{"              "}--
              </pre>
              <p />
              <a href="Playgames" className="btn btn-outline-primary">
                Join
              </a>
              <a
                href="https://youtu.be/mDYqT0_9VR4"
                target="_blank"
                className="btn btn-warning "
                rel="noreferrer"
              >
                watch
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default League;
