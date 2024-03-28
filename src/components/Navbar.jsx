import React from "react";

export function Navbar() {
  return (
    <nav class="navbar bg-dark navbar-expand-lg navbar-dark bg-body-tertiary">
      <div class="container-fluid">
        <img src="favicon.ico" alt="" className="my-1 mx-4"></img>
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
          <div class="navbar-nav mt-2">
            <p class="nav-link active me-2 fs-5" aria-current="page">
              My shoppinglist
            </p>
            <p class="nav-link me-2 fs-5">Features</p>
            <p class="nav-link fs-5">Contact</p>
          </div>
        </div>
      </div>
    </nav>
  );
}
