<template>
  <nav class="bg-white fixed top-0 w-screen z-50 border-gray-200">
    <div class="max-w-screen-xl border-b border-black flex flex-wrap items-center justify-between mx-auto p-4">
      <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img loading="lazy" src="../assets/img/logo.svg" class="h-10 md:h-16" alt="Flowbite Logo" />
        <!-- <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Premiumdentalstudio</span> -->
      </a>
      <button data-collapse-toggle="navbar-multi-level" type="button"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-multi-level" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15" />
        </svg>
      </button>
      <div class="hidden w-full md:block md:w-auto" id="navbar-multi-level">
        <ul
          class="flex  flex-col space-x-0 md:space-x-5 font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li v-for="(item, index) in links" :key="index">
            <a :href="item.href"
            :class="[
                'block transition-all duration-500 py-2 px-5 rounded-full',
                activeSection === item.id
                  ? 'bg-[#00AEAA] text-white border border-[#004443]'
                  : 'bg-transparent text-[#004443] hover:bg-[#00AEAA] hover:text-white hover:border hover:border-[#004443]'
              ]">{{
              item.name }}</a>
          </li>
          <!-- <li>
            <a href="#about-us"
              class="block transition-all border-o bg-transparent duration-500 py-2  text-[#004443] hover:text-white hover:bg-[#00AEAA] px-5 hover:border hover:border-[#004443]  rounded-full">About us</a>
          </li>
          <li>
            <a href="#services"
              class="block transition-all border-o bg-transparent duration-500 py-2  text-[#004443] hover:text-white hover:bg-[#00AEAA] px-5 hover:border hover:border-[#004443]  rounded-full">Services</a>
          </li>
          <li>
            <a href="#doctors"
              class="block transition-all border-o bg-transparent duration-500 py-2  text-[#004443] hover:text-white hover:bg-[#00AEAA] px-5 hover:border hover:border-[#004443]  rounded-full">Doctors</a>
          </li>
          <li>
            <a href="#testimonial"
              class="block transition-all border-o bg-transparent duration-500 py-2  text-[#004443] hover:text-white hover:bg-[#00AEAA] px-5 hover:border hover:border-[#004443]  rounded-full">Reviews</a>
          </li> -->
        </ul>
      </div>
      <div class="hidden md:block">
        <a href="#contact-us" class="border border-black rounded-full pl-5 pr-1 py-1 flex items-center">Contact Us <i class="bx ml-2 bg-[#004443] rounded-full px-1 py-1 text-[#FFF9F2] bx-phone"></i></a>
      </div>
    </div>
  </nav>

</template>
<script>
export default {
  data() {
    return {
      activeSection: 'home',
      links: [
        { id: 'home', name: 'Home', href: '#home' },
        { id: 'about-us', name: 'About Us', href: '#about-us' },
        { id: 'services', name: 'Services', href: '#services' },
        { id: 'doctors', name: 'Doctors', href: '#doctors' },
        { id: 'testimonial', name: 'Reviews', href: '#testimonial' }
      ]
    }
  },
 methods: {
    handleScroll() {
      // Find the first section with a valid ID and check if it's in view
      const section = this.links
        .filter(link => link.href !== '#')
        .map((link) => document.querySelector(link.href))
        .find((section) => {
          if (section) {
            const rect = section.getBoundingClientRect();
            return rect.top <= 100 && rect.bottom >= 100;
          }
          return false;
        });

      // Set the active section based on the found element
      this.activeSection = section ? section.id : 'home';
    }
  },

  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    this.handleScroll(); // Call it once to set the initial state
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  }
}
</script>
