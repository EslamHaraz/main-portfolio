import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import JwPagination from "jw-vue-pagination";
import Vuelidate from "vuelidate";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import { VueEditor } from "vue2-editor";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "normalize.css";
import "./App.css";
import 'animate.css';
import CircleProgressbar from '@lastsecond/vue2-circle-progressbar';
import '@lastsecond/vue2-circle-progressbar/style.css';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import "../firebase.js";

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.use(CircleProgressbar);

Vue.config.productionTip = false;
Vue.use(Vuelidate, "jw-pagination", JwPagination,);
Vue.use(Toast, {
  transition: "Vue-Toastification__bounce",
  maxToasts: 2,
  newestOnTop: true,
  position: "top-right",
  timeout: 2400,
  closeOnClick: true,
  pauseOnFocusLoss: false,
  draggable: true,
  draggablePercent: 0.6,
  showCloseButtonOnHover: false,
  hideProgressBar: false,
  closeButton: "button",
  icon: true,
  rtl: false,
});
library.add(fas, far, fab);
Vue.component(
  "FontAwesome",
  FontAwesomeIcon,
  "jw-pagination",
  JwPagination,
  VueEditor
);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
