const Home = {
    template : '<h1>Home</h1>',
    name:'Home'
}
const UserSettings = {
    template : '<h1>UserSettings</h1>',
    name:'UserSettings'
}
const WishList = {
    template : '<h1>WishList</h1>',
    name:'WishList'
}
const ShoppingCart = {
    template : '<h1>ShoppingCart</h1>',
    name:'ShoppingCart'
}

const router = new VueRouter({
    routes : [
        { path: '/', component: Home, name:'Home' },
        { path: '/user-settings', component: UserSettings, name:'UserSettings' },
        { path: '/wish-list', component: WishList, name:'WishList' },
        { path: '/shopping-cart', component: ShoppingCart, name:'ShoppingCart' },
    ]
})

const vue = new Vue({
    router
}).$mount('#app');