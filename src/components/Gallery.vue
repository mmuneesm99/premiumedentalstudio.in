<template>
    <section id="gallery" class="max-w-screen-xl h-auto py-6 px-0 md:px-4 mx-auto">
        <h2 class="text-[#004443] font-bold text-center text-3xl mb-8">Our gallery</h2>

            <div class="swiper-container mySwiperGallery pl-4 md:pl-0 py-10 relative overflow-hidden">
                <div class="swiper-wrapper h-full max-h-[600px]">
                    <div v-for="(image, index) in gallery" :key="index" data-aos="fade-left" class="swiper-slide flex justify-center">
                        <div class="bg-white shadow-md rounded-3xl flex flex-col items-center h-fit">
                            <img loading="lazy" :src="getImageUrl(image)" alt="Premium dental studio gallery" class="rounded-3xl w-full max-w-[416px]" />
                        </div>
                    </div>
                </div>

                <div class="swiper-pagination custom-pagination flex justify-center space-x-2"></div>
            </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            baseUrl: 'https://mmuneesm99.github.io/imagecloude/',
            gallery: [
              'img1.avif','img2.avif','img3.avif','img4.avif','img5.avif','img6.avif'  
            ],
        };
    },
    methods: {
        getImageUrl(imageName) {
            return this.baseUrl+'gallery/'+imageName;
        },
    },
    mounted() {
        // Initialize Swiper when the component is mounted
        new Swiper('.mySwiperGallery', {
            grid: {
                rows: 2,
            },
            spaceBetween: 20,
            slidesPerView: 1.2,
            pagination: {
                el: '.custom-pagination',
                clickable: true,
            },
            breakpoints: {
                640: {
                    slidesPerView: 1.2,
                },
                768: {
                    slidesPerView: 2.2,
                },
                1024: {
                    slidesPerView: 3,
                },
            },
        });
    },
};
</script>

<style></style>
