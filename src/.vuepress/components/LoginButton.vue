<template>
    <button @click="login()" type="button" class="action-button">Login</button>
</template>

<script>
import auth from "../auth";

export default {
    name: "LoginButton",
    props : ['client'],
    methods : {
        async login () {
            await auth.loginWithPopup(this.client);

            this.$emit('login-complete');
        }
    }
}
</script>

<style lang="stylus" scoped>
.action-button
    cursor pointer
    display inline-block
    font-size 1.2rem
    color #fff
    background-color $accentColor
    padding 0.8rem 1.6rem
    border-radius 4px
    transition background-color .1s ease
    box-sizing border-box
    border-bottom 1px solid darken($accentColor, 10%)
    &:hover
        background-color lighten($accentColor, 10%)
</style>