require("./bootstrap");

Vue.component("countries", require("./components/Countries.vue").default);
Vue.component("navbar", require("./components/Navbar.vue").default);

const app = new Vue({
    el: "#app",
});
