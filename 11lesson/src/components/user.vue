<template>
  <li>
    <div class="items">
      <span>{{ index + 1 }}</span>
      <div class="spacer">
        <img v-bind:src="myUser.avatar_url" alt="avatar" />
      </div>

      {{ myUser.login }}
    </div>
    <button class="rm" v-on:click="$emit('remove-user', myUser.id)">
      &times;
    </button>
  </li>
</template>

<script>
export default {
  props: {
    myUser: {},
    index: Number
  }
};
</script>

<style scoped>
li {
  border: 2px solid grey;
  background-color: slategray;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 4px;
  padding: 5px;
  margin-bottom: 10px;
}

.items {
  display: flex;
  align-items: center;
}

.spacer {
  height: 40px;
  width: 40px;
  position: relative;
  margin: 0 5px;
}

img {
  width: 40px;
  border-radius: 50%;
  cursor: pointer;
}

img:hover {
  width: 80px;
  border-radius: 50%;
  position: absolute;
  top: -20px;
  left: 0;
}

.rm {
  background-color: red;
  border-radius: 50%;
  cursor: pointer;
  width: 30px;
  height: 30px;
  opacity: 0.5;
  margin-right: 5px;
}

.rm:hover {
  opacity: 1;
  width: 60px;
  height: 60px;
  position: absolute;
  right: 0%;
  font-size: 50px;
}
</style>
