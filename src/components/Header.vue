<template>
  <header id="home"  class=" h-auto  relative">
    <div  class="max-w-screen-xl flex flex-col mt-32 md:mt-[150px] items-center justify-center mx-auto px-4 md:px-0">
      <div class="mb-6 sm:mb-0  text-center">
        <h1 class="text-balance text-4xl font-normal tracking-tight text-[#004443] lg:text-6xl 2xl:text-7xl">
          Your Journey to a Healthier,
        </h1>
        <h1  class="text-balance text-4xl font-semibold tracking-tight text-[#004443] lg:text-6xl 2xl:text-7xl">
          Brighter Smile Starts Here
        </h1>
      </div>
      <div class="mt-8 md:mt-14">
        <img loading="lazy"  class="min-h-[200px] object-cover rounded-3xl" src="../assets/img/banner.avif" alt="Premium Dental Studio">
      </div>
      <div class="block md:hidden pt-8">
        <router-link :to="{ hash: '#contact-us' }" class="border border-black rounded-full pl-5 flex items-center">Get in touch<i class="bx ml-2 bg-[#004443] rounded-full px-3 py-3 text-[#FFF9F2] bxs-phone"></i></router-link>
      </div>
    </div>
  </header>
</template>



<script>
import Navbar from './Navbar.vue'
export default {
  components: { Navbar },

}
</script>