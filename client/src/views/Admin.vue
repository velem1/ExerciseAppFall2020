<template>
<section>
        <div class="select">
  <select>
    <option>USERS</option>
    <option>Ariana Grande</option>
    <option>AOC Congresswoman</option>
    <option>Melissa Vele</option>
    <option>Tom Hanks</option>
  </select>
</div>
        <p class="content"><b>Selected:</b> {{ selected }}</p>
        <b-field label="Find a JS framework">
            <b-autocomplete
                rounded
                v-model="name"
                :data="filteredDataArray"
                placeholder="e.g. jQuery"
                icon="magnify"
                clearable
                @select="option => selected = option">
                <!--<template slot="empty">No results found</template>-->
            </b-autocomplete>
        </b-field>
    </section>
  <div class="container is-fluid">

    <section class="section">
      <div class="container">
        <h1 class="title">Admin View</h1>
        <h2 class="subtitle">
          Below is a list of current users and their secured information.
        </h2>
        <div class="notification has-background-grey">
          <h1 class="title"><strong>Users</strong></h1>

          <div class="title">
          <button class="button"><i class="fas fa-user-plus"></i>Add User</button>
          </div>

          <div class="notification has-background-grey-lighter">
            <p>
              User ID: #1 <br />
              Name: Super Nova <br />
              Email: supernova@gmail.com <br />
              Password: #fdns23q2rnhr43
            </p>
            
            <small><a class="has-text-info"><i class="fas fa-edit"></i>Edit</a> · <a class="has-text-danger"><i class="fas fa-trash-alt"></i>Delete</a> </small>
          </div>
          <div class="notification has-background-grey-lighter">
            <p>
              User ID: #2 <br />
              Name: Galaxy Meteor <br />
              Email: galaxymeteor@gmail.com <br />
              Password: #adns32awrghr2dv
            </p>
            <small><a class="has-text-info"><i class="fas fa-edit"></i>Edit</a> · <a class="has-text-danger"><i class="fas fa-trash-alt"></i>Delete</a> </small>
          </div>
          <div class="notification has-background-grey-lighter">
            <p>
              User ID: #3 <br />
              Name: Pluto Mars <br />
              Email: plutomars@gmail.com <br />
              Password: #plcs32sd3sm59
            </p>
            <small><a class="has-text-info"><i class="fas fa-edit"></i>Edit</a> · <a class="has-text-danger"><i class="fas fa-trash-alt"></i>Delete</a> </small>
          </div>
          <div class="notification has-background-grey-lighter">
            <p>
              User ID: #4 <br />
              Name: Saturn Stars <br />
              Email: saturnstars@gmail.com <br />
              Password: #sdc43uui7aef6
            </p>
            <small><a class="has-text-info"><i class="fas fa-edit"></i>Edit</a> · <a class="has-text-danger"><i class="fas fa-trash-alt"></i>Delete</a> </small>
          </div>
          <div class="notification has-background-grey-lighter">
            <p>
              User ID: #5 <br />
              Name: Ocean Mercury <br />
              Email: oceanmercury@gmail.com <br />
              Password: #vbe3se56vsb431vse
            </p>
            <small><a class="has-text-info"><i class="fas fa-edit"></i>Edit</a> · <a class="has-text-danger"><i class="fas fa-trash-alt"></i>Delete</a> </small>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
//const data = require('@/data/sample.json')
import * as api from "@/controller/api";
export default {
    //data() {
    //    return {
    //        data,
    //        keepFirst: false,
    //        openOnFocus: false,
    //        name: '',
    //        selected: null,
    //        clearable: false
    //    }
    //},
    data(){
      return {
        //this variable is what the user types into the search box
        searchtext : '',
    }
    },
    //method that allows for the grabbing data and displaying of the searched text
    computed: {
        filteredDataObj() {
            return this.data.filter(option => {
                return (
                    option.user.first_name
                        .toString()
                        .toLowerCase()
                        .indexOf(this.name.toLowerCase()) >= 0
                )
            })
        }
    }
}
</script>