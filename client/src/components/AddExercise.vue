<template>
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
              <select v-model="yoga_items.yoga_type">
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
          <label class="label">Pose(s)</label>
          <div class="control">
            <input class="input" type="text" placeholder="Text input" v-model="yoga_items.yoga_pose"/>
          </div>
        </div>
        <div class="field">
          <label class="label">Duration (minutes)</label>
          <div class="control">
            <input class="input" type="text" placeholder="Text input" v-model="yoga_items.yoga_duration"/>
          </div>
        </div>
        <div class="field">
          <label class="label">Message</label>
          <div class="control">
            <textarea class="textarea" placeholder="Textarea" v-model="yoga_items.yoga_message"></textarea>
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
            <button value="Add" type="submit" @click="AddExercise" >Submit</button>
          </div>
          <h1>Scroll down to see your posts!</h1>
        </div>
      </div>
  </div>
  <br>
  <PersonalLog />
</template>

<script>
import {yoga_items} from "@/models/YogaItems"
export default {
  name: "AddExercise",
  data(){
        return {
            yoga_items
        }
    },
    methods:{
        AddExercise(){
            this.yoga_items.push({
                yoga_type:yoga_items.yoga_type,
                yoga_pose:yoga_items.yoga_pose,
                yoga_duration:yoga_items.yoga_duration,
                yoga_message:yoga_items.yoga_message,

            })
            this.yoga_items.yoga_type = "",
            this.yoga_items.yoga_pose = "",
            this.yoga_items.yoga_duration = "",
            this.yoga_items.yoga_message = "",
            alert("Workout added below!");
        }
    }

};
</script>