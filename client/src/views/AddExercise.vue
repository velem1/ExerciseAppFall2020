<template>
<div class="section">
  <div class="container">
      <h1 class="title">
        <i class="fas fa-plus-square"></i>
        Add To Your Yoga Log
      </h1>
      <div class="notification has-background-link-light">
        <h3 class="subtitle">Submission Form</h3>
        <div class="field">
          <label class="label">Yoga Type</label>
          <div class="control">
            <div class="select">
              <select>
                <option>Vinyasa Yoga</option>
                <option>Kundalini Yoga</option>
                <option>Power Yoga</option>
                <option>Restorative Yoga</option>
                <option>General Yoga</option>
              </select>
            </div>
          </div>
        </div>
        <div class="field">
          <label class="label">Yoga Difficulty</label>
          <div class="control">
            <div class="select">
              <select>
                <option>Beginner</option>
                <option>Beginner-Intermediate</option>
                <option>Intermediate</option>
                <option>Intermediate-Advanced</option>
                <option>Advanced</option>
                <option>Instructor</option>
              </select>
            </div>
          </div>
        </div>
        <div class="field">
          <label class="label">Pose(s)</label>
          <div class="control">
            <input class="input" type="text" placeholder="Text input" />
          </div>
        </div>
        <div class="field">
          <label class="label">Duration of Pose (minutes)</label>
          <div class="control">
            <input class="input" type="text" placeholder="Text input" />
          </div>
        </div>
        <div class="field">
          <label class="label">Message</label>
          <div class="control">
            <textarea class="textarea" placeholder="Textarea"></textarea>
          </div>
        </div>
        <div class="field">
          <div class="control">
            <label class="checkbox">
              <input type="checkbox" />
              Public
            </label>
          </div>
        </div>
        <div class="field">
          <div class="control">
            <button class="button is-link">Submit</button>
          </div>
        </div>
      </div>
    </div>
      <PersonalLog />
    </div>
</template>

<script>

import PersonalLog from "../components/PersonalLog"
export default {
  name: "AddExercise",
  components: {
    PersonalLog
  },
};
</script>