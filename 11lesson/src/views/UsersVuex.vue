<template>
  <div>
    <router-link to="/">Vue</router-link>
    / Vuex
    <div class="row">
      <addUsers />
      <h2>Getting a list of users using <span class="frame">VUEX</span></h2>
      <deleteUsers />
    </div>
    <hr />
    <usersListX />
  </div>
</template>

<script>
import usersListX from '../components/usersListX'
import deleteUsers from '../components/deleteUsers'
import addUsers from '../components/addUsers'

export default {
  name: "App",
  /* computed: {
    getUsers() {//функция которая получает из сторы (userx) функцию allUsers и получаем ее как геттер
      return this.$store.getters.allUsers; //получение напрямую из стора
    }
  },*/
  
  components: {usersListX, addUsers, deleteUsers},
  
};
</script>

<style>
h2 {
  font-size: 30px;
  margin-bottom: 10px;
}

.wrapper {
  display: flex;
  flex-wrap: wrap;
}

.itemsVuex {
  position: relative;
  border: 2px solid black;
  border-radius: 5px;
  margin: 7px;
  background-color: burlywood;
}

.itemsVuex:hover {
  transform: translateY(-10px);
}

.itemsVuexSpan {
  position: absolute;
  top: 5%;
  left: 5%;
  border-radius: 50%;
  background-color: sandybrown;
  width: 25px;
}

.img {
  width: 200px;
  height: 200px;
}

.img img {
  width: auto;
  max-width: 100%;
}
</style>
