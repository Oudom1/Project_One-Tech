import Vue from 'vue'
import VueRouter from 'vue-router'
import AboutUsVue from '../views/AboutUs.vue'
import HomeView from '../views/HomePage.vue'
import LoginPage from '../views/LoginPage.vue'
import RegisterPage from '../views/SignUpPage.vue'
import HotDeal from '@/views/HotDealApp.vue'
import Blog from '@/views/BlogApp.vue'
import ModalVue from '@/views/ModalVue.vue'
import Product from '@/views/ProductApp.vue'
import AdminDashboardApp from '@/views/AdminDashboardApp.vue'
import BrandnameApp from '@/views/BrandnameApp.vue'
import CategoryApp from '@/views/CategoryApp.vue'
import SubCategoryApp from '@/views/SubCategoryApp.vue'
import ProductAdminApp from '@/views/ProductAdminApp.vue'


Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutUsVue
    },
    {
      path: '/login',
      name: "Login",
      component: LoginPage
    },
    {
      path: '/register',
      name: "Register",
      component: RegisterPage
    },
    {
      path: '/hotdeal',
      name: "HotDeal",
      component: HotDeal
    },
    {
      path: '/blog',
      name: "Blog",
      component: Blog
    },
    {
      path: '/modal',
      name: "ModalVue",
      component: ModalVue
    },
    {
      path: '/product',
      name: "Product",
      component: Product
    },
    {
      path: '/adminDashboard',
      name: "AdminDashboardApp",
      component: AdminDashboardApp,
      children:[
        {  
      path: '/adminDashboard/brandname',
      name: "BrandnameApp",
      component: BrandnameApp
        },
        {  
          path: '/adminDashboard/category',
          name: "CategoryApp",
          component: CategoryApp
            },
            {  
              path: '/adminDashboard/subcategory',
              name: "SubCategoryApp",
              component: SubCategoryApp
                },
                {  
                  path: '/adminDashboard/productadmin',
                  name: "ProductAdminApp",
                  component: ProductAdminApp
                    }
      ]
    },
    // {
    //   path: '/adminDashboard/brandname',
    //   name: "BrandnameApp",
    //   component: BrandnameApp
    // },
  ]
})

export default router
