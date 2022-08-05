<template>
    <div>
        <div v-if="slots.length">
            <div v-for="sub in subs" :key="sub.id">
                <div>{{ getSlotById(sub.slot_id).start }} (lasts for {{getSlotById(sub.slot_id).duration}})</div>
                <div><img height="50" :src="getSlotById(sub.slot_id).pictureUrl"></div>
                <div><input type="text" v-model="sub.text"  @focusin="focusIn(sub, getSlotById(sub.slot_id))" @focusout="saveSub(sub)"></div>       
            </div>
        </div>
        
    </div>
</template>

<script>
import subService from '../services/subService';

export default {
    props: ['subs', 'slots', 'videoElement'],
    emits: ['inFocus'],
    mounted() {
        this.videoElement.addEventListener('loadedmetadata', () => {
            this.slots.forEach(this.getSlotThumb);
        });
    },
    methods:{
        getSlotById(id) {
            return this.slots.find(slot => slot.id === id);
        },
        saveSub(sub) {
            subService.save(sub).then(console.log);
        },
        focusIn(sub, slot) {
            this.$emit('inFocus', {sub, slot});
        },
        async getSlotThumb(slot) {
            let video = this.videoElement.cloneNode();
            return new Promise((resolve, reject) => {
    
                video.onseeked = function(e) {
                    var canvas = document.createElement('canvas');
                    canvas.height = video.videoHeight;
                    canvas.width = video.videoWidth;
                    var ctx = canvas.getContext('2d');
                    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
                    slot.pictureUrl = canvas.toDataURL();
                    video = null;
                    resolve();
                }
                video.currentTime = slot.start;
            });
        }
    }
}
</script>