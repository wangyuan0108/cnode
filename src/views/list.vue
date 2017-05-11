<template>
    <div class="list">
        <nv-head :page-type="getTitleStr(searchKey.tab)" :fix-head="true" ref="head" :need-add="true"></nv-head>
    </div>
</template>

<script>
// import $ from 'webpack-zepto';
import nvHead from '../components/header.vue';
export default {
    data() {
        return {
            scroll: true,
            topics: [],
            index: {},
            searchKey: {
                page: 1,
                limit: 20,
                tab: 'all',
                mdrender: true
            },
            searchDataStr: ''
        };
    },
    components: {
        nvHead
    },
    methods: {
        // 获取title文字
        getTitleStr(tab) {
            let str = '';
            switch (tab) {
                case 'share':
                    str = '分享';
                    break;
                case 'ask':
                    str = '问答';
                    break;
                case 'job':
                    str = '招聘';
                    break;
                case 'good':
                    str = '精华';
                    break;
                default:
                    str = '全部';
                    break;
            }
            return str;
        }
    }
};
</script>

<style lang="scss">

</style>
