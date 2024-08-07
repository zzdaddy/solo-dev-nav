const home = [
    {
        path: "/home",
        name: "Home",
        component: () => import("~/pages/home/index.vue"),
        meta: {
            title: "Home",
        },
    }, {
        path: "/explore",
        name: "explore",
        component: () => import("~/pages/explore/index.vue"),
    }, {
        path: "/StoreTest",
        name: "StoreTest",
        component: () => import("~/pages/home/components/StoreTest.vue"),
    }];

export default home;
