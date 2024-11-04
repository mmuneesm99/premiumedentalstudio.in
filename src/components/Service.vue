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

                <!-- Custom Pagination with Previous and Next buttons -->
                <div class="swiper-pagination custom-pagination flex justify-center items-center space-x-2">
                    <!-- Previous Button -->
                    <div class="swiper-button-prev"></div>

                    <!-- Pagination -->
                    <div class="pagination-dots flex space-x-2"></div>

                    <!-- Next Button -->
                    <div class="swiper-button-next"></div>
                </div>
            </div>

        </div>
    </section>
</template>

<script>
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
    }, created() {
        this.services = departmentsData.departments;
        console.log(this.services);


    },
    mounted() {

        // Initialize Swiper when the component is mounted
        new Swiper('.mySwiper', {
            slidesPerView: 'auto',
            centeredSlides: false,
            slidesPerGroup: 1,
            spaceBetween: -50,
            loop: true,
            autoplay: {
                delay: 6000,
                disableOnInteraction: false,
            },
            speed: 4000,
            pagination: {
                el: '.custom-pagination',
                clickable: true,
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

<style scoped>
/* Custom styles for pagination bullets */
.swiper-container .swiper-pagination-bullet {
    width: 12px;
    height: 12px;
    background-color: #c4c4c4;
    border-radius: 50%;
    margin: 0 4px;
    opacity: 0.6;
    transition: all 0.3s;
}

.swiper-pagination-bullet-active {
    opacity: var(--swiper-pagination-bullet-opacity, 1);
    background: var(--swiper-pagination-color, var(--swiper-theme-color));

}

/* Add hover effect */
.swiper-container .swiper-pagination-bullet:hover {
    background-color: #000000;
    transform: scale(1.1);
    opacity: 1;
}

.custom-prev-btn,
.custom-next-btn {
    background-color: #004443;
    color: #ffffff;
    padding: 8px;
    border-radius: 50%;
    cursor: pointer;
}

.custom-prev-btn:hover,
.custom-next-btn:hover {
    background-color: #00AEAA;
}
</style>
