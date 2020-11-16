<template>
  <div id="yogaLog">
    <div>
      <h2 class="title">Personal Yoga Log</h2>
    </div>

    <table class="table">

      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Type</th>
          <th scope="col text-right">Pose</th>
          <th scope="col text-right">Duration</th>
          <th scope="col text-right">Details</th>
        </tr>
      </thead>

      <tbody>
      <tr v-for="(yoga_input, k) in yoga_inputs" :key="k">
        <td scope="row" class="trashIconContainer">
          <i class="fas fa-trash-alt" @click="deleteRow(k, yoga_input)"></i>
        </td>
        <td>
          <input class="form-control" type="text" v-model="yoga_input.yoga_type" />
        </td>
        <td>
          <input class="form-control" type="text" v-model="yoga_input.yoga_pose" />
        </td>
        <td>
          <input class="form-control text-right" type="number" min="0" step="1" v-model="yoga_input.yoga_duration" @change="calculateLineTotal(yoga_input)"
          />
        </td>
        <td>
          <input class="form-control" type="text" v-model="yoga_input.yoga_message" />
        </td>
      </tr>
      </tbody>
    </table>

    <button class="button is-success" @click="addNewRow">
      <i class="fas fa-plus-circle"></i>  
      Add
    </button>

  </div>
</template>

<script> 
  export default {
    name: "yogaLog",
    data: ()=> ({
      yoga_inputs: [{
        yoga_type: '',
        yoga_pose: '',
        yoga_duration: '',
        yoga_message: '',
      }]
    }),
    methods:{
      addNewRow() {
        this.yoga_inputs.push({
          yoga_type: '',
          yoga_pose: '',
          yoga_duration: '',
          yoga_message: '',
        })
      },
      deleteRow(index, yoga_input) {
        var idx = this.yoga_inputs.indexOf(yoga_input);
        console.log(idx, index);
        if (idx > -1) {
          this.yoga_inputs.splice(idx, 1);
        }
      },
    }
  }
</script>