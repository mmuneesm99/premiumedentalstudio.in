<template>
    <section class="max-w-screen-xl min-h-screen flex flex-col mt-12 mx-auto">
        <div>
            <h2 class="text-[#004443] font-bold text-center text-3xl mb-8">The Experts Behind Every Smile</h2>
            <div class="bg-[#00AEAA] p-5 grid grid-cols-1 lg:grid-cols-3 gap-6 rounded-3xl">
                <img src="../assets/img/drkasim.jpg" class="object-cover rounded-3xl w-full lg:max-w-sm h-[470px]" alt="Dr. Sayyid Kasim V" />
                <div class="col-span-2 flex flex-col justify-center space-y-5 text-[#FFF9F2]">
                    <h3 class="text-4xl">Dr. Sayyid Kasim V</h3>
                    <hr>
                    <p class="font-semibold text-xl">Founder, Premium Dental Studio</p>
                    <p class="text-xl max-w-lg">BDS, FMC(GER), DIMP Chief Dental Surgeon | Facial Cosmetologist | Sports Dentistry Specialist</p>
                    <button class="border rounded-full px-5 w-fit py-2 border-[#014441]">About Dr. Sayyid Kasim</button>
                    <p class="text-xl">Dr. Sayyid Kasim V., founder of Premium Dental Studio, is a highly skilled Chief Dental Surgeon with expertise in facial cosmetology and sports dentistry. With advanced qualifications in dental care, Dr. Kasim is dedicated to providing personalized treatments that prioritize patient health and create beautiful, lasting smiles.</p>
                </div>
            </div>

            <div class="swiper-container mySwiperTeam py-10 relative overflow-hidden">
                <div class="swiper-wrapper h-[400px]">
                    <div v-for="(doctor, index) in doctors" :key="index" class="swiper-slide flex justify-start" @click="toggleFlip(index)">
                        <div class="" :class="['flip-card', isFlipped[index] ? 'flipped ' : '', 'bg-transparent', 'flex', 'flex-col', 'items-start', 'w-[300px]']">
                            <div class="flip-card-inner rounded-3xl">
                                <div class="flip-card-front bg-white  shadow-md relative overflow-hidden">
                                    <img :src="getImageUrl(doctor.image)" :alt="doctor.name" class="rounded-3xl mb-4" />
                                    <h3 class="text-[#00AEAA] font-semibold px-3 pb-4 text-lg">{{ doctor.name }}</h3>
                                </div>
                                <div class="flip-card-back bg-[#00AEAA] text-white p-4 rounded-3xl">
                                    <h3 class="font-semibold mb-2">{{ doctor.name }}</h3>
                                    <p>{{ doctor.specialty }}</p>
                                </div>
                            </div>
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
            isFlipped: [],
            baseUrl: 'https://mmuneesm99.github.io/premiumedentalstudio.in/',
            doctors: [
                { name: "Dr. SUHA SUNAYYA K.F", image: "doctor1.jpg", specialty: "Specialist in Root Canal Treatment with over 10 years of experience." },
                { name: "Dr. SUHA SUNAYYA K.F", image: "doctor1.jpg", specialty: "Specialist in Cosmetic Dentistry with over 8 years of experience." },
                { name: "Dr. SUHA SUNAYYA K.F", image: "doctor1.jpg", specialty: "Expert in Pediatric Dentistry with over 5 years of experience." },
                { name: "Dr. SUHA SUNAYYA K.F", image: "doctor1.jpg", specialty: "Specialist in Orthodontics with over 7 years of experience." },
                { name: "Dr. SUHA SUNAYYA K.F", image: "doctor1.jpg", specialty: "Expert in Dental Implants with over 9 years of experience." }
            ],
            currentIndex: 0, // Index of the currently flipped card
            interval: null, // Interval ID for clearing later
        };
    },
    mounted() {
        // Initialize isFlipped based on the length of the doctors array
        this.isFlipped = Array(this.doctors.length).fill(false);
        this.startAutoFlip(); // Start automatic flipping

        // Initialize Swiper when the component is mounted
        new Swiper('.mySwiperTeam', {
            slidesPerView: 'auto',
            centeredSlides: false,
            spaceBetween: -50,
            loop: true,
            autoplay: {
                delay: 7000,
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
    beforeDestroy() {
        clearInterval(this.interval); // Clear the interval when the component is destroyed
    },
    methods: {
        toggleFlip(index) {
            console.log(`Toggling card at index: ${index}`);
            // Toggle the clicked card
            this.isFlipped[index] = !this.isFlipped[index]; // Toggle the specific card
            console.log(this.isFlipped); // Log current state of isFlipped
        },
        getImageUrl(imageName) {
            return `${this.baseUrl}src/assets/img/${imageName}`;
        },
        startAutoFlip() {
            this.interval = setInterval(() => {
                // Reset all flips
                this.isFlipped.fill(false);
                
                // Toggle the flip for the current index
                this.isFlipped[this.currentIndex] = true;
                
                // Move to the next index
                this.currentIndex = (this.currentIndex + 1) % this.doctors.length;
            }, 5000); // Change every 5 seconds
        }
    },
};
</script>

<style scoped>
.flip-card {
    perspective: 1000px;
    transition: transform 2s;
    transform-style: preserve-3d;
}

.flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: transform 2s;
}

.flip-card-front,
.flip-card-back {
    backface-visibility: hidden;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
}

.flip-card-front {
    z-index: 2;
    transform: rotateY(0deg);
}

.flip-card-back {
    transform: rotateY(180deg);
    z-index: 1;
    border-radius: 30px;
}

.flipped .flip-card-inner {
    transform: rotateY(180deg);
}
</style>
