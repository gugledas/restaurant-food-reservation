<template>
  <div id="app">
    <bloc-reservation msg="Welcome to our booking reservation" />
  </div>
</template>

<script>
import BlocReservation from "./components/BlocReservation.vue";

export default {
  name: "App",
  components: {
    BlocReservation,
  },
};
</script>

<style lang="scss">
body {
  background-color: rgb(255, 255, 255);
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  height: 100%;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  //justify-content: center;
  min-height: 100vh;
  width: 100%;
  flex-direction: column;
}
</style>
