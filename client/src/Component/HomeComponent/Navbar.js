import React from 'react';

const Navbar = () => {
  return (
<section>
  <nav class="navbar navbar-expand-lg navigation-wrap">
    <div class="container">
      <a class="navbar-brand" href="/">
        <img class="logo-img" src="img/logo.png" alt="logo" />
        <span id="hustler">Hustlers</span>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="fas fa-stream navbar-toggler-icon"></i>
      </button>
      <div class="collapse navbar-collapse justify-content-between" id="navbarText">
        <ul class="navbar-nav mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#Events">Events</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#Games">Games</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#About">About</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</section>

  );
};

export default Navbar;
