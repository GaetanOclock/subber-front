<template>
    <div>
        <div  v-for="sub in subs" :key="sub.id">
            <div>{{ getSlotById(sub.slot_id).start }} (lasts for {{getSlotById(sub.slot_id).duration}})</div>
            <div><input type="text" v-model="sub.text" @focusout="saveSub(sub)"></div>       
        </div>
    </div>
</template>

<script>
import subService from '../services/subService';

export default {
    props: ['subs', 'slots'],
    methods:{
        getSlotById(id) {
            return this.slots.find(slot => slot.id === id);
        },
        saveSub(sub) {
            subService.save(sub).then(console.log);
        }
    }
}
</script>