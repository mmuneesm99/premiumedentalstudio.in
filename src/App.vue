<template>
  <div id="app">
    <Navbar />
    <main class="mx-auto">
      <router-view  />
    </main>
    <ContactUs />
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
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
import ContactUs from './components/ContactUs.vue';
export default {
  components: { Navbar, Footer,ContactUs },
  name: 'App',
  mounted() {
    // Re-initialize AOS after the component is mounted
    this.$nextTick(() => {  // AOS refresh to ensure animations work after route changes
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
  }
};
</script>
