<template>
  <header id="home"  class=" h-auto  relative">
    <div  class="max-w-screen-xl flex flex-col mt-[150px] items-center justify-center mx-auto px-4 md:px-0">
      <div class="mb-10 sm:mb-0 sm:pr-8 text-center">
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
        <a href="#contact-us" class="border border-black rounded-full pl-5 pr-1 py-2 flex items-center">Get in touch<i class="bx ml-2 bg-[#004443] rounded-full px-2 py-2 text-[#FFF9F2] bx-phone"></i></a>
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