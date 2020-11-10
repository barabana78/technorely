<template>
  <button class="addUser" v-on:click="addUsers">Add users</button>
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions(["fetchUsers"]),
    addUsers() {
      this.fetchUsers();
    }
  }
};
</script>
