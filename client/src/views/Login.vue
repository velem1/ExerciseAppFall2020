<template>
  <div class="login">
    <div class="field">
      <p class="control has-icons-left has-icons-right">
        <input v-model="email" class="input" type="email" placeholder="Email" />
        <span class="icon is-small is-left">
          <i class="fas fa-envelope"></i>
        </span>
        <span class="icon is-small is-right">
          <i class="fas fa-check"></i>
        </span>
      </p>
    </div>
    <div class="field">
      <p class="control has-icons-left">
        <input v-model="password" class="input" type="password" placeholder="Password" />
        <span class="icon is-small is-left">
          <i class="fas fa-lock"></i>
        </span>
      </p>
    </div>
    <div class="field">
      <p class="control">
        <button @click="loginSubmit" class="button has-background-link-light">
          Login
        </button>
      </p>
    </div>
  </div>
</template>

<script>
import * as api from "@/controller/api";

export default {
  data(){
    return {
    password : '',
    email : ''
    }
  },
  methods: {
    loginSubmit: function () {
      api.login(this.email, this.password).then(function (response) {
        //return response;
        if (response) {
          alert("logged in");
        } else {
          alert("user not found");
        }
      });
    },
  }
}
</script>
