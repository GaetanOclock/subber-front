<template>
    <div>
        <video :src="'/videos/' + video.Original.file"></video>
    </div>
</template>

<script>
import videoService from '../services/videoService';

export default {
    data() {
        return {
            video: {id: 0, Original: {file: ""}}
        };
    },
    beforeCreate() {
        videoService.getById(this.$route.params.id).then(response => {
            this.video = response.data;
        });
    }
}
</script>