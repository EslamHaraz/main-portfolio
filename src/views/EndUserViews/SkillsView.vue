<template>
  <div class="skills-section">
    <div class="info d-flex align-items-center flex-column mb-5">
      <h2 class="text-color fw-bold">Skills</h2>
      <div class="d-flex box-effect justify-content-between">
        <div></div>
        <h6 class="main-color position-relative line-effect">Perfect</h6>
      </div>
    </div>
    <div class="skills-parent">
      <div v-for="(skill, index) in skills" :key="index">
        <div class="skill-box text-center  animate__animated animate__fadeInUp"  :style="{ animationDelay: `${index * 0.1}s` }">
          <img :src="skill.url" class="img-fluid mb-3" />
          <h2 class="rate fw-bold text-center main-color">{{ skill.rate }}</h2>
        </div>
        <h4 class="skill-name text-center mt-3 main-color">{{ skill.name }}</h4>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "SkillsView",
  data() {
    return {
      skills: [
        {
          name: "Bootstrab",
          rate: "70%",
          url: require("@/assets/images/bootstrab.png"),
        },
        {
          name: "Figma",
          rate: "50%",
          url: require("@/assets/images/figma.png"),
        },
        {
          name: "Java Script",
          rate: "70%",
          url: require("@/assets/images/javascript.png"),
        },
        {
          name: "Sketch",
          rate: "60%",
          url: require("@/assets/images/sketch.png"),
        },
        {
          name: "Gitlap",
          rate: "55%",
          url: require("@/assets/images/gitlap.png"),
        },
        {
          name: "Illustrator",
          rate: "50%",
          url: require("@/assets/images/Illustrator .png"),
        },
        {
          name: "Html",
          rate: "90%",
          url: require("@/assets/images/html.png"),
        },
        {
          name: "Photoshop",
          rate: "80%",
          url: require("@/assets/images/photoshop.png"),
        },
        {
          name: "Laravel",
          rate: "75%",
          url: require("@/assets/images/laravel.png"),
        },
        {
          name: "Docker",
          rate: "85%",
          url: require("@/assets/images/docker.png"),
        },
      ],
    };
  },
};
</script>
<style scoped>
.skills-parent {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 45px;
}
.skill-box {
  background-color: var(--secondary-Color);
  padding: 20px;
  border-radius: 5px;
  filter: grayscale(1);
  transition: 0.3s linear;
  height: 250px;
}
.skill-box img {
  width: 150px;
}
.skill-box:hover {
  filter: grayscale(0);
}
</style>
