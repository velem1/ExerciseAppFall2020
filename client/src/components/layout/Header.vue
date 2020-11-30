<template>
  <nav class="navbar has-background-danger-light">
    <div class="navbar-brand">
      <a role="button" class="navbar-burger burger" :class="{ 'is-active': isActive }" @click="isActive = !isActive" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarExampleTransparentExample" class="navbar-menu"  :class="{ 'is-active': isActive }">
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
            <!-- <router-link to="/contact" >
              <a class="navbar-item">Contact Creator</a>
            </router-link> -->
            <router-link to="/feedback" >
              <a class="navbar-item">Feedback</a>
            </router-link>
            <hr class="navbar-divider" />
            <router-link to="/admin" >
              <a class="navbar-item">Admin</a>
            </router-link>
          </div>
        </div>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="field is-grouped">
            <p class="control">
              <router-link to="/login">
              <a class="bd-tw-button button" target="_blank">
                <span class="icon">
                  <i class="fas fa-sign-in-alt"></i>
                </span>
                <span>
                  Log In
                </span>
              </a>
              </router-link>
            </p>
            <p class="control">
              <router-link to="/signup">
              <a class="bd-tw-button button" target="_blank">
                <span class="icon">
                  <i class="fas fa-user-plus"></i>
                </span>
                <span>
                  Sign Up
                </span>
              </a>
              </router-link>
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
  data: ()=> ({
      isActive: false
  }),
};
</script>
