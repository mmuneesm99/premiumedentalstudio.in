<template>
    <Header />
    <AboutUS />
    <Service />
    <Team />
    <Testimony />
    <Gallery />
</template>
<script>
import Header from '../components/Header.vue';
import AboutUS from '../components/AboutUS.vue';
import Service from '../components/Service.vue';
import Team from '../components/Team.vue';
import Testimony from '../components/Testimony.vue';
import Gallery from '../components/Gallery.vue';
import ContactUs from '../components/ContactUs.vue';

export default {
    components: { Header, AboutUS, Service, Team, Testimony, Gallery, ContactUs },
}
</script>