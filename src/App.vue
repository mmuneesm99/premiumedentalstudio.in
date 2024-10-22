<template>
  <div id="app">
    <!-- This is where the navigation will be rendered -->
    <!-- <header>
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/services">Services</router-link>
      </nav>
    </header> -->
    <Navbar />

    <main>
      <router-view />
    </main>
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
export default {
  components: { Navbar, Footer },
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
