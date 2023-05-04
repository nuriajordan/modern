import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueSocketIO from 'vue-socket.io'
import SocketIO from 'socket.io-client'

const socketConnection = SocketIO('http://localhost:3000');

Vue.use(new VueSocketIO({
  debug: true,
  connection: socketConnection
})
);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
