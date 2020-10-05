<template>
    <ul>
      <user
        v-for="(item, i) of Myusers"
        :key="item.id"
        v-bind:myUser="item"
        v-bind:index="i"
        v-on:remove-user="removeUser"
      />
    </ul>
</template>

<script>
import user from "@/components/user";

export default {
  props: ["Myusers"],
  components: {
    user
  },
  methods: {
    removeUser(id) {
      this.$emit("remove-user", id);
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0 10px;
}
</style>
