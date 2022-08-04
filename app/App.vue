<template>
  <Header></Header>
  <RouterView v-slot="{ Component }">
    <transition name="fade">
      <component :is="Component" />
    </transition>
  </RouterView>
  <Footer></Footer>
</template>

<script>

import Header from './components/layout/Header.vue';
import Footer from './components/layout/Footer.vue';

export default {
  data() {
    return {
      name: "Vue",
    };
  },
  components: {
    Header,
    Footer
  }
};
</script>