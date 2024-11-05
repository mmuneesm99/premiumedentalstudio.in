<template>
    <section id="services" class="max-w-screen-xl h-auto flex flex-col py-6 mx-auto">
        <div class="">
            <h2 class="text-[#004443] font-bold  text-center md:text-left text-3xl px-4 md:px-0  mb-6">How We Care for
                Your Smile</h2>

            <div class="swiper-container mySwiper pl-4 md:pl-0 py-10 relative overflow-hidden">
                <div class="swiper-wrapper">
                    <router-link :to="`/department/${service.name}`" class="swiper-slide flex justify-start"
                        v-for="(service, index) in services" :key="index">
                        <div
                            class="bg-white border border-[#00444385] overflow-hidden relative rounded-3xl flex flex-col items-start w-[300px]">
                            <img :src="getImageUrl(service.imageUrl)" alt="Root Canal Treatment" loading="lazy"
                                class="rounded-t-lg mb-4" />
                            <h3 class="text-[#00AEAA] font-semibold px-3 pb-4 text-lg">{{ service.name }}</h3>
                        </div>
                    </router-link>
                </div>

                <div class="custome-pagination flex items-center w-fit mx-auto gap-2 mt-5">
                    <!-- Custom Previous Button -->
                    <div class="custom-prev-btn hidden md:flex">&#10094;</div>
                    
                    <!-- Pagination Dots -->
                    <div class="pagination-dots flex space-x-2"></div>
                    
                    <!-- Custom Next Button -->
                    <div class="custom-next-btn hidden md:flex">&#10095;</div>
                </div>
            </div>

        </div>
    </section>
</template>

<script>
import { Autoplay } from 'swiper/modules';
import departmentsData from '../assets/js/departments.json'
export default {
    data() {
        return {
            services: [],
            baseUrl: 'https://mmuneesm99.github.io/imagecloude/',
        }
    },
    methods: {
        getImageUrl(imageName) {
            return `${this.baseUrl}${imageName}`;
        },
    }, 
    created() {
        this.services = departmentsData.departments;
        console.log(this.services);
    },
    mounted() {
        // Initialize Swiper with navigation settings
        new Swiper('.mySwiper', {
            slidesPerView: 'auto',
            centeredSlides: false,
            slidesPerGroup: 1,
            spaceBetween: -50,
            loop: true,
            // autoplay: {
            //     delay: 6000,
            //     disableOnInteraction: false,
            // },
            autoplay:false,
            speed: 2000,
            pagination: {
                el: '.pagination-dots',
                clickable: true,
            },
            navigation: {
                nextEl: '.custom-next-btn', // Custom Next Button
                prevEl: '.custom-prev-btn', // Custom Prev Button
            },
            breakpoints: {
                640: {
                    slidesPerView: 1.6,
                    spaceBetween: -50,
                    slidesPerGroup: 1
                },
                768: {
                    slidesPerView: 2.2,
                    spaceBetween: 16,
                    slidesPerGroup: 2
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 16,
                    slidesPerGroup: 4
                },
            },
        });
    },
};
</script>

<style>



.custom-prev-btn,
.custom-next-btn {
    background-color: #004443;
    color: #ffffff;
    padding: 8px;
    border-radius: 20%;
    cursor: pointer;
    align-items: center;
    justify-content: center;
}

.custom-prev-btn:hover,
.custom-next-btn:hover {
    background-color: #00AEAA;
}
</style>
