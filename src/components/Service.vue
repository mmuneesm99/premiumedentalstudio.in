<template>
    <section id="services" class="max-w-screen-xl h-auto flex flex-col py-6 mx-auto">
        <div class="">
            <!-- Section Title -->
            <h2 class="text-[#004443] font-bold text-3xl px-4 md:px-0  mb-6">How We Care for Your Smile</h2>

            <!-- Swiper Container -->
            <div class="swiper-container mySwiper py-10 relative overflow-hidden">
                <div class="swiper-wrapper">
                    <!-- Slide 1 -->
                    <div class="swiper-slide flex justify-start">
                        <div class="bg-white rounded-3xl shadow-md flex flex-col items-start w-[300px]">
                            <img src="../assets/img/rootcanal.jpg" alt="Root Canal Treatment" class="rounded-t-lg mb-4" />
                            <h3 class="text-[#00AEAA] font-semibold px-3 pb-4 text-lg">Root Canal<br/>Treatment</h3>
                        </div>
                    </div>

                    <!-- Slide 2 -->
                    <div class="swiper-slide flex justify-start">
                        <div class="bg-white rounded-3xl shadow-md flex flex-col items-start w-[300px]">
                            <img src="../assets/img/rootcanal.jpg" alt="Clear Aligner" class="rounded-t-lg mb-4" />
                            <h3 class="text-[#00AEAA] font-semibold px-3 pb-4 text-lg">Clear<br/>Aligner</h3>
                        </div>
                    </div>

                    <!-- Slide 3 -->
                    <div class="swiper-slide flex justify-start">
                        <div class="bg-white rounded-3xl shadow-md flex flex-col items-start w-[300px]">
                            <img src="../assets/img/rootcanal.jpg" alt="Sports Dentistry" class="rounded-t-lg mb-4" />
                            <h3 class="text-[#00AEAA] font-semibold px-3 pb-4 text-lg">Sports<br/>Dentistry</h3>
                        </div>
                    </div>

                    <!-- Slide 4 -->
                    <div class="swiper-slide flex justify-start">
                        <div class="bg-white rounded-3xl shadow-md flex flex-col items-start w-[300px]">
                            <img src="../assets/img/rootcanal.jpg" alt="Teeth Whitening" class="rounded-t-lg mb-4" />
                            <h3 class="text-[#00AEAA] font-semibold px-3 pb-4 text-lg">Teeth<br/>Whitening</h3>
                        </div>
                    </div>

                    <!-- Slide 5 -->
                    <div class="swiper-slide flex justify-start">
                        <div class="bg-white rounded-3xl shadow-md flex flex-col items-start w-[300px]">
                            <img src="../assets/img/rootcanal.jpg" alt="Dental Implants" class="rounded-t-lg mb-4" />
                            <h3 class="text-[#00AEAA] font-semibold px-3 pb-4 text-lg">Dental<br/>Implants</h3>
                        </div>
                    </div>
                </div>

                <!-- Custom Pagination -->
                <div class="swiper-pagination custom-pagination  flex justify-center space-x-2"></div>
            </div>
        </div>
    </section>
</template>

<script>

export default {
    mounted() {
        // Initialize Swiper when the component is mounted
        new Swiper('.mySwiper', {
            slidesPerView: 'auto',
            centeredSlides: false,
            spaceBetween: -50,
            loop: true,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },
            speed: 1000,
            pagination: {
                el: '.custom-pagination',
                clickable: true,
            },
            breakpoints: {
                640: {
                    slidesPerView: 1.6,
                    spaceBetween: -50,

                },
                768: {
                    slidesPerView: 2.2,
                    spaceBetween: 16,
                },
                1024: {
                    slidesPerView: 3.2,
                    spaceBetween: 16,
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
</style>
