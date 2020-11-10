<template>
  <div id="app">
    <h1>*** Fetching users list from GIT ***</h1>
    <router-view />
  </div>
</template>

<style>

#app {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  min-height: 100vh;
  position: relative;
  width: 1100px;
  margin: 0 auto;
}

h1 {
  font-size: 40px;
  letter-spacing: 8px;
}

a {
  text-decoration: none;
  cursor: pointer;
  border: 1px solid black;
  border-radius: 5px;
  padding: 5px;
  margin-right: 5px;
  background-color: silver;
}

a:hover {
  box-shadow: 0 0 20px rgba(107, 120, 156, 0.9);
}
</style>
