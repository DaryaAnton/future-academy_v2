<template>
  <div id="app">
    <router-view/>
    <FooterComponent/>
  </div>
</template>

<script>
import FooterComponent from '@/components/FooterComponent.vue';
import HomeViews from '@/views/HomeViews.vue';

export default {
  components: {FooterComponent, HomeViews}
}
</script>

<style lang="scss"></style>
