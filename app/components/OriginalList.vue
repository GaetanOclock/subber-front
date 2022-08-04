<template>
    <div>
        <OriginalThumb 
            @click="onSelectOriginal(original.id)"
            v-for="original in originals"
            :key="original.id"
            :original="original"
        >
        </OriginalThumb>
    </div>
</template>

<script>
import originalService from '../services/originalService';
import videoService from '../services/videoService';
import OriginalThumb from './OriginalThumb.vue';

export default {
    data() {
        return {
            originals: []
        };
    },
    methods: {
        onSelectOriginal(originalId) {
            videoService.create(originalId).then(response => {
                this.$router.push({name: 'edit-video', params: {id: response.data.id}});
            });
        }
    },
    beforeMount() {
        originalService.getAll().then(response => {
            this.originals = response.data;
        });
    },
    components: { OriginalThumb }
}
</script>