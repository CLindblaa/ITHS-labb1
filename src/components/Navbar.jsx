import React from "react";

export function Navbar() {
  return (
    <nav class="navbar bg-dark navbar-expand-lg navbar-dark bg-body-tertiary">
      <div class="container-fluid">
        <img src="favicon.ico" className="my-1 mx-4"></img>
        <button
          data-mdb-collapse-init
          class="navbar-toggler"
          type="button"
          data-mdb-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="fas fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-link active me-2" aria-current="page" href="#">
              My shoppinglist
            </a>
            <a class="nav-link me-2" href="#">
              Features
            </a>
            <a class="nav-link" href="#">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
