<template>
  <div class="container mt-5">
    <div class="success" v-if="savingSuccessful"> 
    Thanks for the message {{ name }}! 
</div>
    <form @submit.prevent="submit" v-if="!savingSuccessful">
      <div class="form-group">
        <label for="inputEmail">Email Address</label>
        <input
          type="email"
          id="inputEmail"
          class="form-control"
          placeholder="Enter Email"
          v-model="emailAddress"
        />
        <small
          id="emailHelp"
          class="form-text text-muted"
        >We'll never share your email with anyone else.</small>
      </div>
      <div class="form-group">
        <label for="inputPhone">Phone</label>
        <input class="form-control" type="tel" v-model="phone" id="inputPhone" />
      </div>
      <div class="form-group">
        <label for="inputName">Name</label>
        <input class="form-control" type="text" v-model="name" id="inputName" />
      </div>
      <div class="form-group">
        <label for="inputComments">Comments</label>
        <input class="form-control" type="text" id="inputComments" v-model="comments" />
      </div>
      <button type="button" class="btn btn-success mt-2" @click="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "contact-us-form",
  data: function() {
    return {
      emailAddress: "",
      name: "",
      phone: "",
      comments: "",
      savingSuccessful: false,
    };
  },
  components: {},
  methods: {
    submit: function() {
      axios
        .post("customerReqs/", {
          email: this.emailAddress,
          name: this.name,
          phone: this.phone,
          comments: this.comments
        })
        .then((response)=> {
          // clear fields
          this.savingSuccessful = true;
          console.log(response.data);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>