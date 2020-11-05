<template>
  <div class="section">
    <h1 class="title">Welcome</h1>
    <br>
      <h1 class="subtitle">Click the button below to add to your yoga log.</h1>
      <router-link to="/addexercise" >
        <a class="bd-tw-button button" target="_blank">
        Add Exercise
        </a>
      </router-link> 
    </div>
  
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {

  },
};
</script>
