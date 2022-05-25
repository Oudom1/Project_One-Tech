import { createWebHistory, createRouter } from "vue-router";
import AppVue from "@/pages/HomePage.vue";
import LoginPageVue from "@/components/LoginPage.vue";
import RegisterPageVue from "@/components/RegisterPage.vue";
import HearderVue from "@/components/HearderApp.vue";
import CartVue from "@/components/CartApp.vue";
import NextVue from "@/components/NextApp.vue";
import PaymentVue from "@/components/PaymentApp.vue";

const routes = [{
    path: "/",
    name: "Home",
    component: AppVue,
},
{
    path: "/login",
    name: "Login",
    component: LoginPageVue,
    // meta: { requiresAuth: true }
},
{
    path: "/register",
    name: "Register",
    component: RegisterPageVue,
    //meta: { requiresAuth: true }
},
{
    path: "/hearder",
    name: "Hearder",
    component: HearderVue
},

{
    path: "/cart",
    name: "cart",
    component: CartVue,
},
{
    path: "/cart/next",
    name: "next",
    component: NextVue,
},
{
    path: "/cart/next/payment",
    name: "payment",
    component: PaymentVue,
},

]

const router = createRouter({
history: createWebHistory(),
routes,
});

export default router
// router.beforeEach((to, from, next) => {
// const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
// const isAuthenticated = firebase.auth().currentUser;
// console.log("isauthenticated", isAuthenticated);
// if (requiresAuth && !isAuthenticated) {
//     next("/login");
// } else {
//     next();
// }
// });