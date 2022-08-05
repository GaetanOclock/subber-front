<template>
    <header>
        <div @click="navigateToHome()">Subber</div>
        <div><a v-if="isUserAuthenticated" href="javascript:void(0)" @click="callSignOut">Sign out</a></div>
        <div><RouterLink class="round-button" v-if="showPlusButton" :to="{name: 'create-video'}"><img src="../../assets/icons/plus.svg"></RouterLink></div>
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