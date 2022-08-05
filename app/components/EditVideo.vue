<template>
    <div>
        <video :src="'/videos/' + original.file"></video>
        <SubsList :subs="subs" :slots="slots"></SubsList>
    </div>
</template>

<script>
import videoService from '../services/videoService';
import SubsList from './SubsList.vue';

export default {
    data() {
        return {
            video: { id: 0},
            subs: [],
            slots: [],
            original: {file: ""}
        };
    },
    beforeCreate() {
        videoService.getById(this.$route.params.id).then(response => {
            this.video = response.data.video;
            this.subs = response.data.video.Subs;
            this.slots = response.data.original.Slots;
            this.original = response.data.original;
        });
    },
    components: { SubsList }
}
</script>