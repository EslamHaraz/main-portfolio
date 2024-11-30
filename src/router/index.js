import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/EndUserViews/HomeView.vue";
import EndUserLayout from '@/layout/EndUserLayout.vue'
import DashboardLayout from '@/layout/DashboardLayout.vue'
import AboutView from "@/views/EndUserViews/AboutView.vue"
import ServicesView from "@/views/EndUserViews/ServicesView.vue"
import SkillsView from "@/views/EndUserViews/SkillsView.vue"
import WorksView from "@/views/EndUserViews/WorksView.vue"
import ContactusView from "@/views/EndUserViews/ContactusView.vue"
import SingleProductView from "@/views/EndUserViews/SingleProductView.vue"
import DashboardStaticsView from "@/views/DashboardViews/DashboardStaticsView.vue"
import DashboardServicesView from "@/views/DashboardViews/DashboardServicesView.vue"
import DashboardWorksView from "@/views/DashboardViews/DashboardWorksView.vue"
import DashboardExprienceView from "@/views/DashboardViews/DashboardExprienceView.vue"
import DashboardEducationView from "@/views/DashboardViews/DashboardEducationView.vue"
import DashboardSkillsView from "@/views/DashboardViews/DashboardSkillsView.vue"
import DashboardPersonalDataView from "@/views/DashboardViews/DashboardPersonalDataView.vue"
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "EndUserLayout",
    component: EndUserLayout,
    children: [
      {
        path: "home",
        name: "HomeView",
        component: HomeView,
      },
      {
        path: "About",
        name: "AboutView",
        component: AboutView,
      },
      {
        path: "Services",
        name: "ServicesView",
        component: ServicesView,
      },
      {
        path: "Skills",
        name: "SkillsView",
        component: SkillsView,
      },
      {
        path: "Works",
        name: "WorksView",
        component: WorksView,
      },
      {
        path: "Contactus",
        name: "ContactusView",
        component: ContactusView,
      },
      {
        path: "SingleProduct",
        name: "SingleProductView",
        component: SingleProductView,
      },
    ]
  },
  {
    path: "/dashboard",
    name: "DashboardLayout",
    component: DashboardLayout,
    children: [
      {
        path: "/Statics",
        name: "DashboardStaticsView",
        component: DashboardStaticsView,
      },
      {
        path: "/DashboardServices",
        name: "DashboardServicesView",
        component: DashboardServicesView,
      },
      {
        path: "/DashboardWorks",
        name: "DashboardWorksView",
        component: DashboardWorksView,
      },
      {
        path: "/DashboardExprience",
        name: "DashboardExprienceView",
        component: DashboardExprienceView,
      },
      {
        path: "/DashboardEducation",
        name: "DashboardEducationView",
        component: DashboardEducationView,
      },
      {
        path: "/DashboardSkills",
        name: "DashboardSkillsView",
        component: DashboardSkillsView,
      },
      {
        path: "/DashboardPersonal",
        name: "DashboardPersonalDataView",
        component: DashboardPersonalDataView,
      }
    ]
  }

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
