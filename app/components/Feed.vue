<template>
    <div>
        <VideoThumb v-for="video in videos" :key="video.id" :video="video"></VideoThumb>
    </div>
</template>

<script>
import videoService from '../services/videoService';
import VideoThumb from './VideoThumb.vue';

export default {
    data() {
        return {
            videos: []
        };
    },
    beforeMount() {
        videoService.getAll().then(response => {
            this.videos = response.data;
        });
    },
    components: { VideoThumb }
}
</script>