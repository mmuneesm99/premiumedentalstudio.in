<template>
    <Header />
    <AboutUS />
    <Service />
    <Team />
    <Testimony />
    <Clients />
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
import Clients from '../components/Clients.vue'


export default {
    components: { Header, AboutUS, Service, Team, Testimony, Gallery, ContactUs, Clients },
}
</script>