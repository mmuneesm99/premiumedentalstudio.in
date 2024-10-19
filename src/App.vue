<template>
    <Navbar />

  <Header />
  <AboutUS/>
  <Service/>
  <Team/>
  <Testimony/>
  <Gallery/>
  <Footer/>
</template>
<script>
import { nextTick } from 'vue';
import Header from './components/Header.vue';
import {
  initAccordions,
  initCarousels,
  initCollapses,
  initDials,
  initDismisses,
  initDrawers,
  initDropdowns,
  initModals,
  initPopovers,
  initTabs,
  initTooltips
} from 'flowbite';
import AboutUS from './components/AboutUS.vue';
import Navbar from './components/Navbar.vue';
import Service from './components/Service.vue';
import Team from './components/Team.vue';
import Testimony from './components/Testimony.vue';
import Gallery from './components/Gallery.vue';
import Footer from './components/Footer.vue';

export default {
  components: { Header, AboutUS, Navbar, Service, Team, Testimony, Gallery, Footer },
  mounted() {
    
    nextTick(() => {
      initAccordions();
      initCarousels();
      initCollapses();
      initDials();
      initDismisses();
      initDrawers();
      initDropdowns();
      initModals();
      initPopovers();
      initTabs();
      initTooltips();
    });
  },
}
</script>
