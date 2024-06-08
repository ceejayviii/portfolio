import { createApp } from 'vue'
import './style.css'
import App from './App.vue';
// import router
import router from './router';
// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";
/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
// Import all solid icons
import { fas } from '@fortawesome/free-solid-svg-icons';
// Import all brand icons
import { fab } from '@fortawesome/free-brands-svg-icons';
// Add all icons to the library
library.add(fas, fab);



createApp(App)
.use(router)
.component("font-awesome-icon", FontAwesomeIcon)
.mount('#app');
