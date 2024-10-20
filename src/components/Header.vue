<template>
  <header id="home"  class=" h-auto  relative">
    <div  class="max-w-screen-xl flex flex-col mt-[150px] items-center justify-center mx-auto px-4">
      <div class="mb-10 sm:mb-0 sm:pr-8 text-center">
        <h1 class="text-balance text-4xl font-normal tracking-tight text-[#004443] lg:text-6xl 2xl:text-7xl">
          Your Journey to a Healthier,
        </h1>
        <h1  class="text-balance text-4xl font-semibold tracking-tight text-[#004443] lg:text-6xl 2xl:text-7xl">
          Brighter Smile Starts Here
        </h1>
      </div>
      <div class="mt-14">
        <img class="min-h-[250px] object-cover rounded-3xl" src="../assets/img/drkasim.jpg" alt="">
      </div>
      <div class="block md:hidden pt-5">
        <a href="#contact-us" class="border border-black rounded-full pl-5 pr-1 py-1 flex items-center">Get in touch<i class="bx ml-2 bg-[#004443] rounded-full px-1 py-1 text-[#FFF9F2] bx-phone"></i></a>
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