import Vue from "vue";
import Router from "vue-router";

import home from "@/views/Home"
import login from "@/views/Login"
import signup from "@/views/Signup"

Vue.use(Router);

export default new Router({
    routes:[ 
        {path: "/",name:"home",component: home},
        {path: "/login",name: "login",component: login},
        {path: "/signup",name: "signup",component: signup}
    ]
})