<template>
  <div>
    <router-link to="/UsersVuex">Vuex</router-link>
    <div class="row">
      <button class="addUser" v-on:click="fechedUser()">Add users</button>
      <h2>Getting a list of users using <span class="frame">VUE</span></h2>
      <button class="dellUser" v-on:click="dellAllUser">
        Dellete all users
      </button>
    </div>
    <hr />
    <userList
      v-if="users.length"
      v-bind:Myusers="users"
      v-on:remove-user="removeUser"
    />
    <!--v-bind передает массив users в компонент userList -->
    <p v-else>No users</p>
  </div>
</template>

<script>
import userList from "@/components/userList"; //@ всегда указывает на папку src
export default {
  name: "App",
  data() {
    return {
      users: []
    };
  },
  mounted() {
    fetch("https://api.github.com/users")
      .then(response => response.json())
      .then(json => {
        this.users = json;
      });
  },
  methods: {
    removeUser(id) {
      this.users = this.users.filter(i => i.id !== id);
    },

    dellAllUser() {
      this.users = [];
    },

    fechedUser() {
      fetch("https://api.github.com/users")
        .then(response => response.json())
        .then(json => {
          this.users = json;
        });
    }
  },
  components: {
    userList
  }
};
</script>

<style>
h2 {
  font-size: 30px;
  margin-bottom: 10px;
}

.frame {
  color: red;
}

p {
  font-size: 20px;
  letter-spacing: 8px;
}

.row {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.addUser,
.dellUser {
  height: 35px;
  width: 92px;
  border-radius: 5px;
  cursor: pointer;
  opacity: 0.5;
}

.addUser {
  background-color: darkcyan;
}

.addUser:hover {
  opacity: 1;
}

.dellUser {
  background-color: red;
}

.dellUser:hover {
  opacity: 1;
}
</style>
