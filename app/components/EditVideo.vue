<template>
    <div>
        <video ref="videoElement" :src="'/videos/' + original.file"></video>
        <div>{{ currentSub.text }}</div>
        <div class="round-button" @click="togglePlayPause">p</div>
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
            original: {file: ""},
            currentSub: {text: ""}
        };
    },
    methods: {
        subFocused(data) {
            this.$refs.videoElement.currentTime = data.slot.start;
        },
        togglePlayPause() {
            const video = this.$refs.videoElement;
            if(video.paused) {
                video.play();
            } else {
                video.pause();
            }
        },
        onVideoTimeUpdate() {
            this.findCurrentSub();
            if (this.currentSub.slot_id) {
                const slot = this.getSlotById(this.currentSub.slot_id); 
                if (this.$refs.videoElement.currentTime >= slot.start + slot.duration) {
                    this.currentSub = {text: ""};
                }
            }
        },
        findCurrentSub() {
            const slot = this.slots.find(slot => slot.start === Math.floor(this.$refs.videoElement.currentTime));
            if (slot) {
                const sub = this.subs.find(sub => sub.slot_id === slot.id);
                if (this.currentSub.id != sub.id) {
                    this.currentSub = sub;
                }
            }
        },
        getSlotById(id) {
            return this.slots.find(slot => slot.id === id);
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
    mounted() {
        this.$refs.videoElement.addEventListener('timeupdate', this.onVideoTimeUpdate);
    },
    components: { SubsList }
}
</script>