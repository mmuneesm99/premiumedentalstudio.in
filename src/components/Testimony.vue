<template>
    <section id="testimonial" class="max-w-screen-xl h-auto my-12 px-4 md:px-0 mx-auto">
        <div>
            <h2 class="text-[#004443] font-bold text-3xl mb-16 text-center md:text-left">Smiles That Speak</h2>
            <div class="grid  grid-cols-1 md:grid-cols-3 gap-5">
                <div class="md:col-span-2 col-span-1 md:rounded-[32px] rounded-2xl relative overflow-hidden">
                    <img loading="lazy" src="../assets/img/testimony.avif"
                        class="max-h-[305px] object-cover h-full w-full" alt="Dr. Sayyid Kasim V" />

                </div>
                <div v-for="(reviews, i) in googleReviews " :key="i"
                    class="bg-[#00AEAA] p-5 grid grid-rows-2 md:rounded-[32px] rounded-2xl">
                    <div class="w-fill flex justify-end">
                        <img loading="lazy" :src="reviews.profile_photo_url" class="h-24 mr-5"
                            alt="Dr. Sayyid Kasim V" />
                    </div>
                    <div class="flex-col justify-center space-y-5 text-[#FFF9F2]">
                        <h3 class="md:text-xl text-lg">{{ reviews.author_name }}</h3>
                        <p class="md:text-lg text-base italic max-w-lg">"{{ reviews.text }}"</p>
                    </div>
                </div>
                <!-- <div class="bg-[#004443] p-5 grid grid-rows-2 md:rounded-[32px] rounded-2xl">
                    <div class="w-fill flex justify-end">
                        <img loading="lazy" src="../assets/img/avatar.svg" class="h-20 mr-5" alt="Dr. Sayyid Kasim V" />
                    </div>
                    <div class="flex-col justify-center space-y-5 text-[#FFF9F2]">
                        <h3 class="md:text-xl text-lg">Mustafa</h3>
                        <p class="md:text-lg italic text-base max-w-lg">"The care and attention I received were
                            outstanding. I trust Premium Dental Studio with all my dental needs."</p>
                    </div>
                </div>
                <div class="bg-[#00AEAA] p-5 grid grid-rows-2 md:rounded-[32px] rounded-2xl">
                    <div class="w-fill flex justify-end">
                        <img loading="lazy" src="../assets/img/avatar.svg" class="h-24 mr-5" alt="Dr. Sayyid Kasim V" />
                    </div>
                    <div class="flex-col justify-center space-y-5 text-[#FFF9F2]">
                        <h3 class="md:text-xl text-lg">Sahad</h3>
                        <p class="md:text-lg text-base max-w-lg italic">"From booking the appointment to the treatment,
                            everything was smooth and professional. Highly recommend!""</p>
                    </div>
                </div>
                <div class="bg-[#004443] p-5 grid grid-rows-2 md:rounded-[32px] rounded-2xl">
                    <div class="w-fill flex justify-end">
                        <img loading="lazy" src="../assets/img/avatar.svg" class="h-24 mr-5" alt="Dr. Sayyid Kasim V" />
                    </div>
                    <div class="flex-col justify-center space-y-5 text-[#FFF9F2]">
                        <h3 class="md:text-xl text-lg">Munees</h3>
                        <p class="md:text-lg text-base max-w-lg italic">"The care and attention I received were
                            outstanding. I trust Premium Dental Studio with all my dental needs."</p>
                    </div>
                </div> -->
            </div>
        </div>
    </section>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            baseUrl: 'https://mmuneesm99.github.io/imagecloude/',
            googleReviews: []
        };
    },
    mounted() {
        this.fetchRealEstateData()
    },
    methods: {
        getImageUrl(imageName) {
            return `${this.baseUrl}${imageName}`;
        },
        async fetchRealEstateData() {
            this.loading = true;
            const apiKey = "AIzaSyCgdjx0OEvWhV2hqZ1N5aSzFw35t_mJTSY"; // Your API key
            try {
                // Specify the location based on the selected country
                const response = await axios.get(
                    "/api/maps/api/place/details/json",
                    {
                        params: {
                            place_id: "ChIJSZ64hZ23pzsR2YK-1Ag6wmU",
                            key: apiKey,
                            fields: 'reviews'
                        },
                    }
                );
                if (response.data.result && response.data.result.reviews) {
                    // Filter out reviews without text
                    this.googleReviews = response.data.result.reviews.filter(review => review.text && review.text.trim() !== '');

                    // Function to shuffle the reviews array
                    const shuffleArray = (array) => {
                        for (let i = array.length - 1; i > 0; i--) {
                            const j = Math.floor(Math.random() * (i + 1));
                            [array[i], array[j]] = [array[j], array[i]]; // Swap elements
                        }
                        return array;
                    };

                    // Shuffle the reviews and take the first 4
                    this.googleReviews = shuffleArray(this.googleReviews).slice(0, 4);
                } else {
                    this.googleReviews = []; // Handle case where there are no reviews
                }


            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                this.loading = false;
            }
        },
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
