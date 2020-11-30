<template>
  <h1 class="title">Personal Yoga Log</h1>
  <article class="media" v-for= " (yoga_item,i) in yoga_items" :key="i">
  <figure class="media-left">
    <p class="image is-64x64">
      <img src="https://bulma.io/images/placeholders/128x128.png">
    </p>
  </figure>
  <div class="media-content">
    <div class="content">
      <p>
        <strong class="title is-4" >Current User</strong> <small>@currentuser</small> <small>31m</small>
        <br />
          <strong>Yoga Type:</strong> {{yoga_item.yoga_type}} <br />
          <strong>Yoga Pose:</strong> {{yoga_item.yoga_pose}} <br />
          <strong>Duration:</strong> {{yoga_item.yoga_duration}} minutes <br />
          <strong>Message:</strong> {{yoga_item.yoga_message}}
        <br />
      </p>
    </div>
    <nav class="level is-mobile">
      <div class="level-left">
        <a class="level-item">
          <span class="icon is-small"><i class="fas fa-edit"></i>Edit</span>
        </a>
      </div>
    </nav>
  </div>
  <div class="media-right">
    <a class="has-text-danger" @click="deleteExercise(i)"><i class="fas fa-trash-alt" ></i></a>
  </div>
</article>
  
</template>

<script>
import {yoga_items} from "@/models/YogaItems";
export default {
    data(){
         return {
            yoga_items
         }
    },
    methods:{
        deleteExercise(i){
            this.yoga_items.splice(i , 1);
        }
    }  
};
</script>
