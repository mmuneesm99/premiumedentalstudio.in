<template>
    <section class="max-w-screen-xl min-h-screen flex flex-col mt-12 mx-auto">
        <div>
            <h2 class="text-[#004443] font-bold text-center text-3xl mb-8">The Experts Behind Every Smile</h2>

            <div class="swiper-container mySwiperGallery py-10 relative overflow-hidden">
                <div class="swiper-wrapper h-full max-h-[600px]">
                    <div v-for="(doctor, index) in doctors" :key="index" data-aos="fade-left" class="swiper-slide flex justify-center">
                        <div class="bg-white shadow-md rounded-3xl flex flex-col items-center h-fit">
                            <img :src="getImageUrl(doctor.image)" :alt="doctor.name" class="rounded-3xl w-full max-w-[416px]" />
                        </div>
                    </div>
                </div>

                <div class="swiper-pagination custom-pagination flex justify-center space-x-2"></div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            baseUrl: 'https://mmuneesm99.github.io/premiumedentalstudio.in/',
            doctors: [
                { name: "Dr. SUHA SUNAYYA K.F", image: "gallery-image-1.jpg", specialty: "Specialist in Root Canal Treatment with over 10 years of experience." },
                { name: "Dr. SUHA SUNAYYA K.F", image: "gallery-image-1.jpg", specialty: "Specialist in Cosmetic Dentistry with over 8 years of experience." },
                { name: "Dr. SUHA SUNAYYA K.F", image: "gallery-image-1.jpg", specialty: "Expert in Pediatric Dentistry with over 5 years of experience." },
                { name: "Dr. SUHA SUNAYYA K.F", image: "gallery-image-1.jpg", specialty: "Specialist in Orthodontics with over 7 years of experience." },
                { name: "Dr. SUHA SUNAYYA K.F", image: "gallery-image-1.jpg", specialty: "Expert in Pediatric Dentistry with over 5 years of experience." },
                { name: "Dr. SUHA SUNAYYA K.F", image: "gallery-image-1.jpg", specialty: "Specialist in Orthodontics with over 7 years of experience." },
                { name: "Dr. SUHA SUNAYYA K.F", image: "gallery-image-1.jpg", specialty: "Expert in Pediatric Dentistry with over 5 years of experience." },
                { name: "Dr. SUHA SUNAYYA K.F", image: "gallery-image-1.jpg", specialty: "Specialist in Orthodontics with over 7 years of experience." },
                { name: "Dr. SUHA SUNAYYA K.F", image: "gallery-image-1.jpg", specialty: "Expert in Dental Implants with over 9 years of experience." }
            ],
        };
    },
    methods: {
        getImageUrl(imageName) {
            return `${this.baseUrl}src/assets/img/${imageName}`;
        },
    },
    mounted() {
        // Initialize Swiper when the component is mounted
        new Swiper('.mySwiperGallery', {
            grid: {
                rows: 2,
            },
            spaceBetween: 30,
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
                    slidesPerView: 3.2,
                },
            },
        });
    },
};
</script>

<style></style>
