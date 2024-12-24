<template>
  <div id="app">
    <HeaderComponent :theme="currentTheme"/>
    <router-view/>
    <FooterComponent/>
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import HomeViews from '@/views/HomeViews.vue';

export default {
  components: {FooterComponent, HomeViews, HeaderComponent},
  data() {
    return {
      currentTheme: 'light'
    };
  },
  watch: {
    '$route'(to) {
      if (to.name === 'courses') {
        this.currentTheme = 'dark';
      } else {
        this.currentTheme = 'light';
      }
    }
  }
}
</script>

<style lang="scss"></style>
