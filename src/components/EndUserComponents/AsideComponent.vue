<template>
  <aside class="router-links text-center">
    <div class="logo">
      <img src="@/assets/images/logo.png" class="img-fluid logo" />
    </div>
    <ul class="links mt-5 mb-5">
      <li
        v-for="item in menuItems"
        :key="item.name"
        class="item"
        :class="{ active: isActiveRoute(item.path) }"
      >
        <router-link class="link text-color" :to="item.path">{{
          item.name
        }}</router-link>
      </li>
    </ul>
    <div class="resume d-flex justify-content-center align-items-center">
      <h6 class="text-color m-0">Resume</h6>
      <a href="#">
        <FontAwesome :icon="['fas', 'download']" class="text-color ms-2" />
      </a>
    </div>
  </aside>
</template>
<script>
export default {
  name: "AsideComponent",
  data() {
    return {
      menuItems: [
        { name: "Home", path: "/Home" },
        { name: "About", path: "/About" },
        { name: "Services", path: "/Services" },
        { name: "Skills", path: "/Skills" },
        { name: "Works", path: "/Works" },
        { name: "Contact Us", path: "/Contactus" },
        // إضافة عناصر أخرى إذا لزم الأمر
      ],
    };
  },
  methods: {
    isActiveRoute(route) {
      return this.$route.path === route;
    },
  },
};
</script>
<style scoped>
img.logo {
  width: 80px;
}
ul.links {
  padding: 0;
}
li.item {
  border-bottom: 1px solid #202020;
  padding: 10px;
  font-weight: 500;
}
li.item.active {
  background-color: var(--secondary-Color);
  border-right: 3px solid var(--main-Color);
}
li.item.active a {
  color: var(--main-Color);
}
li.item:hover {
  background-color: var(--secondary-Color);
  border-right: 3px solid var(--main-Color);
}
li.item:hover a {
  color: var(--main-Color);
}
.resume {
  width: 150px;
  border: 1px solid #202020;
  margin: auto;
  padding: 10px;
}
.resume h6 {
  font-weight: 500;
}
</style>
