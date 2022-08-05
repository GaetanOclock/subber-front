<template>
    <div class="video-thumb" v-if="video.Original">
        <img :src="'/thumbs/' + video.Original.thumb">
        <div class="label">{{ video.name }}</div>
    </div>
</template>

<script>
export default {
    props: ['video']
}
</script>