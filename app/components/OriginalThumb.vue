<template>
    <div class="original-thumb">
        <img :src="'/thumbs/' + original.thumb">
        {{ original.name }}
    </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
export default {
    props: ['original']
}
</script>