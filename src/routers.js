// require.ensure 是 Webpack 的特殊语法，用来设置 code-split point
const Home = resolve => {
    require.ensure(['./views/index.vue'], () => {
        resolve(require('./views/index.vue'));
    });
};
const List = resolve => {
    require.ensure(['./views/list.vue'], () => {
        resolve(require('./views/list.vue'));
    });
};

const routers = [{
    path: '/',
    name: 'home',
    component: Home
}, {
    path: '/list',
    name: 'list',
    component: List
}, {
    path: '/message',
    name: 'message',
    component: List
}, {
    path: '/about',
    name: 'about',
    component: List
}, {
    path: '*',
    component: Home
}];

export default routers;
