<template>
  <div class="services-section">
    <div class="info d-flex align-items-center flex-column mb-5">
      <h2 class="text-color fw-bold">Services</h2>
      <div class="d-flex box-effect justify-content-between">
        <div></div>
        <h6 class="main-color position-relative line-effect">Quality</h6>
      </div>
    </div>
    <div
      class="service-box position-relative d-flex justify-content-between align-items-center p-3 mb-5"
      v-for="(service, index) in services"
      :key="index"
  :style="{ 
    animation: `slideInLeft 0.5s ease forwards`,
    animationDelay: `${index * 0.1}s`
  }"
    >
      <div
        class="service-name position-relative d-flex justify-content-between align-items-center"
      >
        <h2 class="index m-0 me-3 fw-bold main-color">0{{ index + 1 }}</h2>
        <h3 class="service-name m-0 text-color fw-bold">{{ service.name }}</h3>
      </div>
      <div class="service-description position-relative">
        <p class="m-0 text-color">
          Design and Create a special Typography for Your organization, Company
        </p>
      </div>
      <FontAwesome
        :icon="['fas', 'arrow-right']"
        class="main-color fw-bold arrow"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: "ServicesView",
  data() {
    return {
      services: [
        {
          name: "Typography Design",
          description:
            "Design and Create a special Typography for Your organization, Company",
        },
        {
          name: "Calligraphy Design",
          description:
            "Design and Create a special Typography for Your organization, Company",
        },
        {
          name: "Social Media",
          description:
            "Design and Create a special Typography for Your organization, Company",
        },
        {
          name: "Software Development",
          description:
            "Design and Create a special Typography for Your organization, Company",
        },
        {
          name: "Coding",
          description:
            "Design and Create a special Typography for Your organization, Company",
        },
      ],
    };
  },
};
</script>
<style scoped>
h6.line-effect::before {
  right: 70px;
}
.service-name {
  width: 450px;
}
.service-description,
.service-name,
svg.arrow {
  z-index: 123123;
}
.service-description p {
  font-size: 20px;
}
.service-box {
  border-bottom: 1px solid #202020;
  overflow: hidden;
  z-index: 2817361287;
  margin-bottom: 55px !important;
}
.service-box::before {
  content: "";
  position: absolute;
  background-color: var(--main-Color);
  width: 100%;
  height: 100%;
  left: 0;
  top: 500px;
  transition: 0.3s;
}
.service-box:hover::before {
  top: 0px;
}
.service-box:hover h2.index,
.service-box:hover svg.arrow {
  color: var(--main-font-Color);
}
.service-box:hover svg.arrow {
  transform: rotate(-36deg);
}
svg.arrow {
  font-size: 23px;
  transform: rotate(36deg);
}
@media (max-width: 768px) {
  .service-box {
    flex-direction: column;
    justify-content: center !important;
  }
  svg.arrow {
    display: none;
  }
  .service-name {
    width: auto;
  }
}
</style>
