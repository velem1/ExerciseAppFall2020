<template>
  <div>
    <div class="field">
      <p class="control has-icons-left">
        <input v-model="firstName" class="input" type="firstName" placeholder="First Name" />
        <span class="icon is-small is-left">
          <i class="fas fa-pencil-alt"></i>
        </span>
      </p>
    </div>
    <div class="field">
      <p class="control has-icons-left">
        <input v-model="lastName" class="input" type="lastName" placeholder="Last Name" />
        <span class="icon is-small is-left">
          <i class="fas fa-pencil-alt"></i>
        </span>
      </p>
    </div>
    <div class="field">
      <p class="control has-icons-left">
        <input v-model="dob" class="input" type="dob" placeholder="Date Of Birth" />
        <span class="icon is-small is-left">
          <i class="fas fa-pencil-alt"></i>
        </span>
      </p>
    </div>
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
    <div class="control">
      <button @click="signupSubmit" class="button has-background-link-light">Submit</button>
    </div>
  </div>
</template>

<script>
import * as api from "@/controller/api";

export default {
  data(){
    return {
    firstName : '',
    lastName : '',
    dob: '',
    password : '',
    email : '',
    }
  },
  methods: {
    signupSubmit: function () {
      api.signup(this.firstName, this.LastName, this.dob, this.email, this.password).then(function (response) {
        //return response;
        if (response.data) {
          alert("sign up success");
        } else {
          alert("sign up fail");
        }
      });
    },
  }
}
</script>
