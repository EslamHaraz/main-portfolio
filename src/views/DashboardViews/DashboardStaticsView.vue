<template>
  <div class="statics-section">
    <div class="info d-flex align-items-center flex-column mb-5">
      <h2 class="text-color fw-bold">HOME</h2>
      <div class="d-flex box-effect justify-content-between">
        <div></div>
        <h6 class="main-color position-relative line-effect">Statics</h6>
      </div>
    </div>
    <div class="statics-box">
      <div
        class="box d-flex justify-content-evenly align-items-center flex-wrap p-5 mb-3"
      >
        <vue-circle
          :progress="50"
          :size="100"
          :reverse="false"
          :fill="fill"
          empty-fill="#202020"
          :animation-start-value="0.0"
          :start-angle="5"
          insert-mode="append"
          :thickness="12"
          :show-percent="true"
        >
          <!-- <p>Slot!</p> -->
        </vue-circle>
        <div class="static-info text-center">
          <FontAwesome
            :icon="['fas', 'briefcase']"
            class="main-color icon mb-2"
          />
          <h4 class="text-color">Works</h4>
        </div>
      </div>
      <div
        class="box d-flex justify-content-evenly align-items-center flex-wrap p-5 mb-3"
      >
        <vue-circle
          :progress="60"
          :size="100"
          :reverse="false"
          :fill="fill"
          empty-fill="#202020"
          :animation-start-value="0.0"
          :start-angle="5"
          insert-mode="append"
          :thickness="12"
          :show-percent="true"
        >
          <!-- <p>Slot!</p> -->
        </vue-circle>
        <div class="static-info text-center">
          <FontAwesome :icon="['fas', 'list']" class="main-color icon mb-2" />
          <h4 class="text-color">Services</h4>
        </div>
      </div>
      <div
        class="box d-flex justify-content-evenly align-items-center flex-wrap p-5 mb-3"
      >
        <vue-circle
          :progress="70"
          :size="100"
          :reverse="false"
          :fill="fill"
          empty-fill="#202020"
          :animation-start-value="0.0"
          :start-angle="5"
          insert-mode="append"
          :thickness="12"
          :show-percent="true"
        >
          <!-- <p>Slot!</p> -->
        </vue-circle>
        <div class="static-info text-center">
          <FontAwesome :icon="['fab', 'python']" class="main-color icon mb-2" />
          <h4 class="text-color">Skills</h4>
        </div>
      </div>
      <div
        class="box d-flex justify-content-evenly align-items-center flex-wrap p-5 mb-3"
      >
        <vue-circle
          :progress="75"
          :size="100"
          :reverse="false"
          :fill="fill"
          empty-fill="#202020"
          :animation-start-value="0.0"
          :start-angle="5"
          insert-mode="append"
          :thickness="12"
          :show-percent="true"
        >
          <!-- <p>Slot!</p> -->
        </vue-circle>
        <div class="static-info text-center">
          <FontAwesome :icon="['fas', 'star']" class="main-color icon mb-2" />
          <h4 class="text-color">Exprience</h4>
        </div>
      </div>
      <div
        class="box d-flex justify-content-evenly align-items-center flex-wrap p-5 mb-3"
      >
        <vue-circle
          :progress="90"
          :size="100"
          :reverse="false"
          :fill="fill"
          empty-fill="#202020"
          :animation-start-value="0.0"
          :start-angle="5"
          insert-mode="append"
          :thickness="12"
          :show-percent="true"
        >
          <!-- <p>Slot!</p> -->
        </vue-circle>
        <div class="static-info text-center">
          <FontAwesome
            :icon="['fas', 'chalkboard-user']"
            class="main-color icon mb-2"
          />
          <h4 class="text-color">Education</h4>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import VueCircle from "vue2-circle-progress";
export default {
  name: "DashboardStaticsView",
  components: {
    VueCircle,
  },
  data() {
    return {
      fill: { gradient: ["#f6727f", "#f6483b", "#d93f32"] },
    };
  },
};
</script>
<style scoped>
.statics-box {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 45px;
}
.box {
  background-color: #0a0a0a;
  border-radius: 5px;
}
svg.icon {
  font-size: 27px;
}
::v-deep span {
  color: var(--main-font-Color); /* اختر اللون الذي تريده للنسبة المئوية */
}
::v-deep canvas {
  width: 120px;
}

.static-info {
      width: 170px;
}
</style>
