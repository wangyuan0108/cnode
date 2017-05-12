<template>
    <div class="user-info">
        <!--未登录-->
        <ul class="login-no" v-if="!userInfo.loginname">
            <li class="login" @click="goEnter">
                <a>登录</a>
            </li>
        </ul>
        <!--已登录-->
        <div class="login-yes" v-if="userInfo.longinname" @click="goUser">
            <div class="avertar">
                <img v-if="userInfo.avatar_url" :src="userInfo.avatar_url">
            </div>
            <div class="info">
                <p v-if="userInfo.loginname" v-text="userInfo.loginname"></p>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    export default {
        replace: true,
        computed: {
            ...mapGetters({
                userInfo: 'getUserInfo'
            })
        },
        methods: {
            goEnter() {
                this.$router.push({
                    name: 'login',
                    query: {
                        redirect: encodeURIComponent(this.$route.path)
                    }
                });
            },
            goUser() {
                this.$router.push({
                    name: 'user',
                    params: {
                        loginname: this.userInfo.loginname
                    }
                });
            }
        },
        data() {
            return {
            };
        }
};
</script>

<style lang="scss">
@import '../assets/scss/common/common.scss';
/*侧边栏用户信息区域*/

.user-info {
    padding: 15px;
    font-size: 15px;
    color: #313131;
}



/*未登录*/

.login-no {
    overflow: hidden;
    margin: 8px 9px;
    &>li {
        float: right;
        height: 24px;
        line-height: 24px;
        padding-left: 34px;
        position: relative;
        &:before {
            width: 24px;
            height: 24px;
            content: '';
            position: absolute;
            left: 0;
            top: 0;
        }
    }
    .login {
        float: left;
        &:before {
            background: url("../assets/images/components/login_icon.png") no-repeat left center;
            background-size: 24px 24px;
        }
    }
}



/*已登录*/

.login-yes {
    height: 100%;
    background: url("../assets/images/components/go_next_icon.png") no-repeat right center;
    background-size: 6px 10px;
    overflow: hidden;
    position: relative;
    .avertar {
        width: 40px;
        height: 40px;
        background: url("../assets/images/components/user.png") no-repeat center center;
        background-size: 40px 40px;
        border-radius: 20px;
        overflow: hidden;
        float: left;
        &>img {
            width: 40px;
            height: 40px;
            display: block;
        }
    }
    .info {
        margin-left: 10px;
        overflow: hidden;
        float: left;
    }
    p {
        width: 85px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-size: 12px;
        line-height: 12px;
        line-height: 40px;
        &.lh20 {
            line-height: 20px;
        }
    }
    &:after {
        display: block;
        background: url("../assets/images/components/go_icon.png") no-repeat center right;
        background-size: 7px 7px;
    }
}

.userinfo {
    margin-top: $gap*9;
    width: 100%;
    background-color: $colore7;
    text-align: center;
    height: 180px;
    .u-img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        margin-top: $gap*3;
        display: inline-block;
    }
    .u-name {
        color: #000;
    }
    .u-bottom {
        background-color: $colore7;
        width: 100%;
        margin-top: 20px;
        .u-time {
            width: 50%;
            float: left;
            padding-left: $gap*2;
        }
        .u-score {
            width: 50%;
            float: left;
            text-align: right;
            padding-right: $gap*2;
            color: $color80;
        }
    }
}

.message {
    background-color: #fff;
    padding: $gap;
    border-bottom: solid 1px $colord4;
}

.user-tabs {
    width: 100%;
    height: $gap*8.2;
    list-style: none;
    border-bottom: solid 1px $colord4;
    position: relative;
    .item {
        width: 50%;
        padding: $gap*2.5 0;
        float: left;
        font-size: 16;
        text-align: center;
        font-weight: bold;
    }
    .read {
        font-size: $gap*5;
        color: $color80;
        position: absolute;
        right: $gap*1;
        top: $gap*1.5;
        font-weight: bold;
    }
    .br {
        border-right: solid 1px $colord4;
    }
    .selected {
        color: $red;
        border-bottom: solid 2px $red;
    }
}

.icon-empty {
    font-size: $gap*25;
    color: $colord4;
    display: block;
}
</style>
