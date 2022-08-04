<template>
    <header>
        <div>Subber</div>
        <div><a v-if="isUserAuthenticated" href="javascript:void(0)" @click="callSignOut">Sign out</a></div>
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
        }
    },
    computed: {
        isUserAuthenticated() {
            return this.$store.state.isUserAuthenticated;
        }
    }
}
</script>