<template>
    <div>
        <video ref="videoElement" :src="'/videos/' + original.file"></video>
        <SubsList v-if="slots.length" @inFocus="subFocused" :subs="subs" :slots="slots" :videoElement="$refs.videoElement"></SubsList>
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
    methods: {
        subFocused(data) {
            this.$refs.videoElement.currentTime = data.slot.start;
        }
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