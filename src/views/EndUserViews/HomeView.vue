<template>
  <div class="home">
    <h1>I'm Eslam Haraz</h1>
  </div>
</template>

<script>
export default {
  name: "HomeView",
};
</script>

<style scoped>
.home {
  position: relative;
  display: flex;
  justify-content: center;
}

.home h1 {
  font-size: 11rem;
  font-weight: bold;
  background-image: url(@/assets/images/banner_text_bg.jpg);
  background-size: cover;
  background-position: center;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}



</style>
