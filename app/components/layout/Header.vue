<template>
    <header class="header">
        <div @click="navigateToHome()"><img class="logo" src="../../assets/images/logo.svg"></div>
        <div><a v-if="isUserAuthenticated" href="javascript:void(0)" @click="callSignOut">Sign out</a></div>
        <RouterLink class="create-video-button round-button" v-if="showPlusButton" :to="{name: 'create-video'}"><img src="../../assets/icons/plus.svg"></RouterLink>
    </header>
</template>

<script>
import userService from '../../services/userService';

export default {
    methods: {
        callSignOut() {
            userService.signOut().then(() => {
                this.$router.push({name: 'login'});
            });
        },
        navigateToHome() {
            this.$router.push({name: 'home'});
        }
    },
    computed: {
        isUserAuthenticated() {
            return this.$store.state.isUserAuthenticated;
        },
        showPlusButton() {
            return this.isUserAuthenticated && this.$route.name === 'home';
        }
    }
}
</script>