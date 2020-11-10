<template>
  <div>
    <div class="wrapper" v-if="allUsers.length">
      <div class="itemsVuex" v-for="(user, index) in allUsers" :key="user.id">
        <button class="rem" v-on:click="delOneUser(user.id)">&times;</button>
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
import { mapActions, mapGetters, mapMutations } from "vuex"; // методы хелперы в библ.vuex
export default {
  computed: mapGetters(["allUsers"]), //получаем данные из store при помощи гетера mapGetters
  methods: {
    ...mapActions(["fetchUsers"]),
    ...mapMutations(["deleteOneUser"]),
    delOneUser(id){
      this.deleteOneUser(id)
    }
  }, 
  async mounted() {
    //this.$store.dispatch("fetchUsers")//1-й вар.вызываем action через dispatch
    this.fetchUsers(); //2-й вар. через метод mapActions, параметр для 2-го парам в http
  }
};
</script>

<style>
.rem {
  position: absolute;
  top: 5%;
  right: 5%;
  border-radius: 50%;
  border: none;
  background-color: red;
  width: 25px;
  font-size: 18px;
  visibility: hidden;
  cursor: pointer;
}

.itemsVuex:hover .rem {
  visibility: visible;
  top: 5%;
  right: 5%;
}
</style>