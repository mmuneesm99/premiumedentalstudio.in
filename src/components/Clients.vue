<template>
    <section id="clients" class="max-w-screen-xl h-auto flex flex-col py-6 mx-auto">
        <div>
            <h2 class="text-[#004443] font-bold text-center md:text-left text-3xl mb-16">See the Difference</h2>

            <div class="swiper-container mySwiperClients pb-10 pl-4 md:pl-0 relative overflow-hidden">
                <div class="swiper-wrapper h-[270px]">
                    <div v-for="(client, index) in clients" :key="index" class="swiper-slide flex justify-start" @click="toggleFlip(index)">
                        <div class="" :class="['flip-card', isFlipped[index] ? 'flipped ' : '', 'bg-transparent', 'flex', 'flex-col', 'items-start', 'w-[300px]']">
                            <div class="flip-card-inner md:rounded-3xl rounded-2xl">
                                <div class="flip-card-front bg-white shadow-md relative overflow-hidden">
                                    <img loading="lazy" :src="getImageUrl(client.before)" :alt="'premium dental studio'+client.before" class="md:rounded-3xl rounded-2xl mb-4" />
                                    <h3 class="text-[#00AEAA] font-semibold text-center px-3 text-lg">Tap to see the result</h3>
                                </div>
                                <div class="flip-card-back bg-[#00AEAA] shadow-md relative overflow-hidden">
                                    <img loading="lazy" :src="getImageUrl(client.after)" :alt="'premium dental studio'+client.after" class="md:rounded-3xl rounded-2xl mb-4" />
                                    <h3 class="text-white font-semibold text-center px-3 text-lg">Tap to see the Before</h3>

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
            baseUrl: 'https://mmuneesm99.github.io/imagecloude/',
            clients:[
                {before:"client1b.avif",after:"client1a.avif"},
                {before:"client2b.avif",after:"client2a.avif"},
                {before:"client3b.avif",after:"client3a.avif"},
                {before:"client4b.avif",after:"client4a.avif"},
                {before:"client5b.avif",after:"client5a.avif"},
            ],
            currentIndex: 0, // Index of the currently flipped card
            interval: null, // Interval ID for clearing later
        };
    },
    mounted() {
        // Initialize isFlipped based on the length of the doctors array
        this.isFlipped = Array(this.clients.length).fill(false);
        this.startAutoFlip(); // Start automatic flipping

        // Initialize Swiper when the component is mounted
        new Swiper('.mySwiperClients', {
            slidesPerView: 'auto',
            centeredSlides: false,
            cssMode: true,
            spaceBetween: -50,
            loop: true,
            autoplay: {
                delay: 7500,
                disableOnInteraction: false,
            },
            speed: 3000,
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
                    slidesPerView: 4,
                    spaceBetween: 16,
                    slidesPerGroup: 4
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
            return this.baseUrl+`/clients/`+imageName;
        },
        startAutoFlip() {
            this.interval = setInterval(() => {
                // Reset all flips
                this.isFlipped.fill(false);
                
                // Toggle the flip for the current index
                this.isFlipped[this.currentIndex] = true;
                
                // Move to the next index
                this.currentIndex = (this.currentIndex + 1) % this.clients.length;
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
