<template>
    <section id="doctors" class="max-w-screen-xl h-auto flex flex-col py-6 mx-auto">
        <div>
            <h2 class="text-[#004443] font-bold text-center text-3xl px-4 mb-16">The Experts Behind Every Smile</h2>
            <div
                class="bg-[#00AEAA] p-5 mx-1 md:mx-0 grid grid-cols-1 lg:grid-cols-3 space-x-0 md:space-x-6 space-y-4 md:space-y-0 mb-5 md:mb-0 md:rounded-3xl rounded-3xl">
                <img loading="lazy" src="../assets/img/drkasim.avif"
                    class="object-cover md:rounded-3xl rounded-3xl mx-auto w-full  h-[470px]"
                    alt="Dr. Sayyid Kasim V" />
                <div class="col-span-2 flex flex-col justify-center space-y-5 text-[#FFF9F2]">
                    <h3 class="text-2xl md:text-4xl">Dr. Sayyid Kasim V</h3>
                    <hr>
                    <p class="font-semibold text-lg md:text-xl">Founder, Premium Dental Studio</p>
                    <p class="text-base md:text-xl max-w-lg">BDS, FMC(GER), DIMP Chief Dental Surgeon | Facial
                        Cosmetologist | Sports Dentistry Specialist</p>
                    <button class="border rounded-full px-5 w-fit py-2 border-[#014441]">About Dr. Sayyid Kasim</button>
                    <p class="text-base md:text-xl">Dr. Sayyid Kasim V., founder of Premium Dental Studio, is a highly
                        skilled Chief Dental Surgeon with expertise in facial cosmetology and sports dentistry. With
                        advanced qualifications in dental care, Dr. Kasim is dedicated to providing personalized
                        treatments that prioritize patient health and create beautiful, lasting smiles.</p>
                </div>
            </div>

            <div class="swiper-container mySwiperTeam py-10 pl-4 md:pl-0 relative overflow-hidden">
                <div class="swiper-wrapper h-[380px] py-2">
                    <div v-for="(doctor, index) in doctors" :key="index" class="swiper-slide flex justify-start"
                        @click="toggleFlip(index)">
                        <div class=""
                            :class="['flip-card', isFlipped[index] ? 'flipped ' : '', 'bg-transparent', 'flex', 'flex-col', 'items-start', 'w-[300px]']">
                            <div class="flip-card-inner md:rounded-3xl rounded-2xl">
                                <div class="flip-card-front bg-white p-2 shadow-md relative overflow-hidden">
                                    <img loading="lazy" :src="getImageUrl(doctor.image)" :alt="doctor.name+' '+doctor.specialty"
                                        class="md:rounded-3xl rounded-2xl mb-4" />
                                    <h3 class="text-[#00AEAA] font-semibold text-center px-3 text-lg">{{ doctor.name }}
                                    </h3>
                                </div>
                                <div class="flip-card-back bg-[#00AEAA] text-white p-8 md:rounded-3xl rounded-2xl">
                                    <h3 class="font-semibold text-xl mb-2">{{ doctor.qualification }}</h3>
                                    <p class="py-3">{{ doctor.specialty }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
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
export default {
    data() {
        return {
            isFlipped: [],
            baseUrl: 'https://mmuneesm99.github.io/imagecloude/',
            doctors: [
                { name: "Dr. SUHA SUNAYYA K.F", image: "doctor1.avif", qualification: "BDS", specialty: "[RESIDENT DENTAL SURGEON], AESTHETIC DENTIST" },
                { name: "Dr. SIJI CHIRAMEL", image: "doctor2.avif", qualification: "BDS, MDS, MFDRCS(IRELAND), FIBOI(USA)", specialty: "[CONSULTANT & MAXILLOFACIAL SURGEON & ORAL IMPLANTOLAGIST]  Prof. and H. O. D Dept. of DENTISTRY AND  MAXILLOFACIAL SURGERY. AMALA INSTITUTE OF  MEDICAL SCIENCE" },
                { name: "Dr. MOHAMMED ASLIF", image: "doctor3.avif", qualification: "BDS, MDS", specialty: "[CONSULTANT ORAL AND MAXILLOFACIAL SURGEON, IMPLANTOLOGIST]" },
                { name: "Dr. SHAHANA VP", image: "doctor4.avif", qualification: "BDS, MDS", specialty: "[CONSULTANT ORTHODONTIST AND DENTOFACIAL ORTHOPEDICIAN ]  Asst. Prof. MES Dental college" },
                { name: "Dr. SALAHUDHEEN N", image: "doctor7.avif", qualification: "BDS, MDS", specialty: "[CONSULTANT ENDODONTIST]" },
                { name: "Dr. SHAHNA N", image: "doctor6.avif", qualification: "BDS, MDS", specialty: "[CONSULTANT PERIODONICS] Asst. Prof. EDUCARE INSTITUTE OF DENTAL SCIENCES" },
                { name: "Dr. MOHAMED LABEEB K.P", image: "doctor5.avif", qualification: "BDS, MDS", specialty: "[CONSULTANT PEDODONTIST] Asst Prof. PK-DAS INSTITUTE OF MEDICAL SCIENCES" },
                { name: "Dr. NITHIN PV ", image: "doctor8.avif", qualification: "BDS, MDS", specialty: "[CONSULTANT ENDODONTIST] Asst. Prof. EDUCARE INSTITUTE OF DENTAL SCIENCES" },
            ],
            currentIndex: 0, // Index of the currently flipped card
            interval: null, // Interval ID for clearing later
        };
    },
    mounted() {
        // Initialize isFlipped based on the length of the doctors array
        this.isFlipped = Array(this.doctors.length).fill(false);
        // this.startAutoFlip(); 

        // Initialize Swiper when the component is mounted
        new Swiper('.mySwiperTeam', {
            slidesPerView: 1.2,
            centeredSlides: false,
            slidesPerGroup: 1,
            loop: true,
            spaceBetween: 20,
            // autoplay: {
            //     delay: 6000,
            //     disableOnInteraction: false,
            // },
            autoplay: false,
            speed: 200,
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
                    spaceBetween: 20,
                    slidesPerGroup: 1,
                    speed: 500,
                },
                768: {
                    slidesPerView: 2.2,
                    spaceBetween: 16,
                    slidesPerGroup: 2,
                    speed: 2000,
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 16,
                    slidesPerGroup: 4,
                    speed: 2000,
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
            return this.baseUrl + `/doctors/` + imageName;
        },
        startAutoFlip() {
            this.interval = setInterval(() => {
                // Reset all flips
                this.isFlipped.fill(false);

                // Toggle the flip for the current index
                this.isFlipped[this.currentIndex] = true;

                // Move to the next index
                this.currentIndex = (this.currentIndex + 1) % this.doctors.length;
            }, 7000); // Change every 5 seconds
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
