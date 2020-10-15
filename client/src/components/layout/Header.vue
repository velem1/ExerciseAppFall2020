<template>
  <nav class="navbar has-background-danger-light">
    <div class="navbar-brand">
      <div
        class="navbar-burger burger"
        data-target="navbarExampleTransparentExample"
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div id="navbarExampleTransparentExample" class="navbar-menu">
      <div class="navbar-start">
        <div class="navbar-item">
          <i class="fas fa-balance-scale"></i>
          <h1 class="has-text-weight-bold">The Yoga Tracker</h1>
        </div>
        <router-link to="/" class="navbar-item">Home</router-link>
        <router-link to="/feed" class="navbar-item">Feed</router-link>
        <router-link to="/about" class="navbar-item">About</router-link>
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">
            More
          </a>
          <div class="navbar-dropdown is-boxed">
            <a class="navbar-item">
              <router-link to="/contact">Contact Creator</router-link>
            </a>
            <a class="navbar-item">
              Feedback
            </a>
            <hr class="navbar-divider" />
            <a class="navbar-item">
              <router-link to="/admin">Admin</router-link>
            </a>
          </div>
        </div>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="field is-grouped">
            <p class="control">
              <a class="bd-tw-button button" target="_blank">
                <span class="icon">
                  <i class="fas fa-sign-in-alt"></i>
                </span>
                <span>
                  <router-link to="/login">Log In</router-link>
                </span>
              </a>
            </p>
            <p class="control">
              <a class="bd-tw-button button" target="_blank">
                <span class="icon">
                  <i class="fas fa-user-plus"></i>
                </span>
                <span>
                  <router-link to="/signup">Sign Up</router-link>
                </span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Header",
};
</script>
