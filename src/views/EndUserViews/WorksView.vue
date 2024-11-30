<template>
  <div class="works">
    <div class="info d-flex align-items-center flex-column mb-5">
      <h2 class="text-color fw-bold">Works</h2>
      <div class="d-flex box-effect justify-content-between">
        <div></div>
        <h6 class="main-color position-relative line-effect">Best Skill</h6>
      </div>
    </div>
    <div class="works-parent">
      <router-link :to="{name:'SingleProductView'}" class="work-box position-relative">
        <div class="img-parent">
          <img src="@/assets/images/portfolio-1.webp" class="img-fluid" />
        </div>
        <div
          class="work-info d-flex justify-content-between align-items-center"
        >
          <div>
            <h5 class="work-title text-color">Bigger Bolder And Better</h5>
            <h6 class="work-description text-color">
              I have developed an e-commerce store using modern
            </h6>
          </div>
          <FontAwesome
            :icon="['fas', 'arrow-right']"
            class="text-color fw-bold arrow"
            beat
          />
        </div>
      </router-link>
      <router-link :to="{name:'SingleProductView'}" class="work-box position-relative">
        <div class="img-parent">
          <img src="@/assets/images/portfolio-2.webp" class="img-fluid" />
        </div>
        <div
          class="work-info d-flex justify-content-between align-items-center"
        >
          <div>
            <h5 class="work-title text-color">Bigger Bolder And Better</h5>
            <h6 class="work-description text-color">
              I have developed an e-commerce store using modern
            </h6>
          </div>
          <FontAwesome
            :icon="['fas', 'arrow-right']"
            class="text-color fw-bold arrow"
            beat
          />
        </div>
      </router-link>
      <router-link :to="{name:'SingleProductView'}" class="work-box position-relative">
        <div class="img-parent">
          <img src="@/assets/images/portfolio-3.webp" class="img-fluid" />
        </div>
        <div
          class="work-info d-flex justify-content-between align-items-center"
        >
          <div>
            <h5 class="work-title text-color">Bigger Bolder And Better</h5>
            <h6 class="work-description text-color">
              I have developed an e-commerce store using modern
            </h6>
          </div>
          <FontAwesome
            :icon="['fas', 'arrow-right']"
            class="text-color fw-bold arrow"
            beat
          />
        </div>
      </router-link>
      <router-link :to="{name:'SingleProductView'}" class="work-box position-relative">
        <div class="img-parent">
          <img src="@/assets/images/portfolio-4.webp" class="img-fluid" />
        </div>
        <div
          class="work-info d-flex justify-content-between align-items-center"
        >
          <div>
            <h5 class="work-title text-color">Bigger Bolder And Better</h5>
            <h6 class="work-description text-color">
              I have developed an e-commerce store using modern
            </h6>
          </div>
          <FontAwesome
            :icon="['fas', 'arrow-right']"
            class="text-color fw-bold arrow"
            beat
          />
        </div>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "WorksView",
};
</script>
<style scoped>
.works-parent {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
  gap: 40px;
}
.work-box {
  padding: 20px;
  background-color: var(--secondary-Color);
  border-radius: 5px;
  overflow: hidden;
}
.work-info {
  background-color: var(--main-Color);
  padding: 20px;
  border-radius: 20px;
  position: absolute;
  width: 100%;
  left: -100%;
  bottom: 0;
  transition: 0.3s linear;
}
.work-box:hover .work-info {
  left: 0%;
}
h3.work-title {
}
svg.arrow {
  font-size: 25px;
}
</style>
