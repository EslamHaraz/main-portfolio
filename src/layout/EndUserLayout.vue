<template>
  <div class="enduser-layout">
    <div class="container-fluid p-0">
      <div class="row position-relative">
        <div class="p-0 col-lg-2 aside pt-5" :class="{ active: sidebarStatus }">
          <AsideComponentVue />
        </div>
        <div class="col-lg-10 col-md-12 p-0 main-content p-5">
          <div class="toggle-menu d-flex justify-content-end d-xl-none">
            <FontAwesome @click="toggleSideBar()" :icon="['fas', 'bars']" />
          </div>
          <div class="parent">
            <transition :name="transitionName" mode="out-in">
              <router-view />
            </transition>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AsideComponentVue from "@/components/EndUserComponents/AsideComponent.vue";
export default {
  name: "EndUserLayout",
  data() {
    return {
      sidebarStatus: false,
    };
  },
  methods: {
    toggleSideBar() {
      this.sidebarStatus == false
        ? (this.sidebarStatus = true)
        : (this.sidebarStatus = false);
    },
  },
  components: { AsideComponentVue },
  computed: {
    transitionName() {
      if (this.$route.path === "/About") {
        return "slide-up";
      } else if (this.$route.path === "/Home") {
        return "slide-left";
      } else if (this.$route.path === "/Services") {
        return "slide-right";
      } else if (this.$route.path === "/Skills") {
        return "slide-down";
      } else if (this.$route.path === "/Works") {
        return "slide-left";
      } else if (this.$route.path === "/Contactus") {
        return "slide-down";
      } else if (this.$route.path === "/SingleProduct") {
        return "slide-right";
      }
    },
  },
};
</script>
<style scoped>
.enduser-layout {
  height: 100vh;
  overflow: hidden;
}
.row {
  min-height: 100vh;
}
.main-content {
  overflow-y: auto;
  height: 100vh;
  background-image: url(@/assets/images/black-bg.jpg);
  background-size: cover;
  width: 87.333333%;
}
.aside {
  background-color: var(--body-Color);
  height: 100vh;
  width: 12.666667%;
}
.parent {
  background-color: var(--body-Color);
  border-radius: 2px;
  padding: 20px;
  height: 100%;
  overflow: auto;
}
@media (max-width: 1200px) {
  .main-content {
    width: 100%;
    padding: 0px !important;
  }
  .aside {
    position: absolute;
    left: -100%;
    width: 300px;
    z-index: 21321323;
  }
}
.aside.active {
  left: 0%;
}
.toggle-menu {
  background-color: var(--secondary-Color);
  padding: 30px;
}
.toggle-menu svg {
  font-size: 30px;
  color: var(--main-Color);
  cursor: pointer;
}
</style>
