<template>
  <button class="dellUser" v-on:click="deleteUsers">Delete users</button>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  methods: {
    ...mapMutations(["deleteAllUsers"]), //передаем сюда массив со строками которые указывают на название мутации
    deleteUsers() {
      this.deleteAllUsers();
    }
  }
};
</script>
