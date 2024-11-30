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
  </aside>
</template>
<script>
export default {
  name: "AsideComponent",
  data() {
    return {
           menuItems: [
        { name: "Home", path: "/Statics" },
        { name: "Services", path: "/DashboardServices" },
        { name: "Works", path: "/DashboardWorks" },
        { name: "Exprience", path: "/DashboardExprience" },
        { name: "Education", path: "/DashboardEducation" },
        { name: "Skills", path: "/DashboardSkills" },
        { name: "Personal Data", path: "/DashboardPersonal" },
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
