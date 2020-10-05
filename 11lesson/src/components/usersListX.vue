<template>
  <div>
    <div class="wrapper" v-if="allUsers.length">
      <div class="itemsVuex" v-for="(user, index) in allUsers" :key="user.id">
        <span class="itemsVuexSpan">{{ index + 1 }}</span>
        <div class="img">
          <img v-bind:src="user.avatar_url" alt="avatar" />
        </div>
        {{ user.login }}
      </div>
    </div>
    <p v-else>No users</p>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex"; // методы хелперы в библ.vuex
export default {
  computed: mapGetters(["allUsers"]), //получаем данные из store при помощи гетера mapGetters
  methods: mapActions(["fetchUsers"]),
  async mounted() {
    //this.$store.dispatch("fetchUsers")//1-й вар.вызываем action через dispatch
    this.fetchUsers(); //2-й вар. через метод mapActions, параметр для 2-го парам в http
  }
};
</script>
