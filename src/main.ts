import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App.vue";

import "bootstrap-vue/dist/bootstrap-vue.css";
import "bootstrap/dist/css/bootstrap.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCoffee, faSpinner, faWrench, faAmbulance, faEdit, faCircle, faCheck, faChessQueen,
  faPlus, faEquals, faArrowRight, faPencilAlt, faComment, faHeadphones, faSquare,
  faCalendar, faCertificate, faEnvelope, faTimes, faBookmark, faHeart, faPlay,
  faSun, faMoon, faCocktail, faGlassMartini, faBeer, faStar
} from "@fortawesome/free-solid-svg-icons";
import { faJs, faVuejs, faJava, faPhp, faPython, faCss3, faHtml5, faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from "@fortawesome/vue-fontawesome";

library.add(faCoffee, faSpinner, faWrench, faAmbulance, faEdit, faCircle, faCheck, faChessQueen,
  faPlus, faEquals, faArrowRight, faPencilAlt, faComment, faHeadphones, faSquare,
  faCalendar, faCertificate, faEnvelope, faTimes, faBookmark, faHeart, faPlay,
  faSun, faMoon, faCocktail, faGlassMartini, faBeer, faStar, faJs, faVuejs, faJava, faPhp,
  faPython, faCss3, faHtml5, faFacebookF);

Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.component("font-awesome-layers", FontAwesomeLayers);
Vue.component("font-awesome-layers-text", FontAwesomeLayersText);

Vue.use(BootstrapVue);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
