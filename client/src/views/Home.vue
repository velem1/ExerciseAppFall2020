<template>
  <div class="section">
    <h1 class="title">Welcome to The Yoga Tracker</h1>
    <br>

    <!-- <div class="image is-5by3">
      <img src="../assets/balance.png" alt="Calming Ocean and Rocks">
    </div> -->

    <h1 class="subtitle">Click the <strong>button</strong> below to add to your yoga log.</h1>
    <router-link to="/SubmitExercise">
      <a class="bd-tw-button button" target="_blank">
        Add Exercise
      </a>
    </router-link> 
  </div>
  
</template>

<script>
export default {
  name: "Home",
  components: {

  },
};
</script>
