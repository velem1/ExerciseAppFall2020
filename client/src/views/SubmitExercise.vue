<template>
<div class="section">
  <div class="container">
    <AddExercise/>    
  </div>
    <PersonalLog />
  </div>
</template>

<script>
import AddExercise from "../components/AddExercise"
import PersonalLog from "../components/PersonalLog"
export default {
  name: "SubmitExercise",
  components: {
    AddExercise,
    PersonalLog
  },
};
</script>