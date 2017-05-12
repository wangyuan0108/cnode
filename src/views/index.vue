<template>
    <div class="index">
        <img class="index" src="../assets/images/index.png">
    </div>
</template>
<script>
// require('../assets/scss/CV.scss');

export default {
    mounted() {
        setTimeout(() => {
            this.$router.push({
                name: 'list'
            });
        }, 2000);
    }
};
</script>
<style lang="scss">
@import '../assets/scss/common/reset.scss';
// @import '../assets/scss/common/common.scss';
.index {
    width: 100%;
    background-color: #000;
    margin-top: 40%;
}
</style>
