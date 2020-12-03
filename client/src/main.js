import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "../node_modules/bulma/css/bulma.css";
import Buefy from 'buefy';

import 'buefy/dist/buefy.css'

createApp(App)
  .use(router)
  .mount("#app")
  .use(Buefy);

