<template>
    <section id="testimonial" class="max-w-screen-xl h-auto pb-12 px-4 md:px-0 mx-auto">
        <div>
            <h2 class="text-[#004443] font-bold text-3xl mb-16 text-center md:text-left">Smiles That Speak</h2>
            <div class="grid  grid-cols-1 md:grid-cols-3 gap-5">
                <div class="md:col-span-2 col-span-1 md:rounded-3xl rounded-2xl relative overflow-hidden">
                    <img loading="lazy" src="../assets/img/testimony.avif"
                        class="max-h-[305px] object-cover h-full w-full" alt="Dr. Sayyid Kasim V" />

                </div>
                <div v-for="(reviews, i) in filterdData " :key="i"
                    :class="i % 2 === 1 ? 'bg-[#00AEAA]' : 'bg-[#004443]'"
                    class=" p-5 grid grid-rows-2 md:rounded-3xl rounded-2xl">
                    <div class="w-fill flex justify-between items-center">
                        <img class="h-[48px] opacity-80 -mt-12 ml-2" src="../assets/img/google.svg" alt="">
                        <img src="https://premiumdentalstudio.in/avatar.svg" class="h-24 mr-5"
                            alt="Best Dental Clinic in valanchery" />
                    </div>
                    <div class="flex-col justify-center space-y-5 text-[#FFF9F2]">
                        <h3 class="md:text-xl text-lg">{{ reviews.name }}</h3>
                        <p class="md:text-lg text-base italic max-w-lg">"{{ reviews.review }}"</p>
                    </div>
                </div>
                <!-- <div class="bg-[#00AEAA] p-5 grid grid-rows-2 md:rounded-3xl rounded-2xl">
                    <div class="w-fill flex justify-end">
                        <img loading="lazy" src="../assets/img/avatar.svg" class="h-24 mr-5" alt="Dr. Sayyid Kasim V" />
                    </div>
                    <div class="flex-col justify-center space-y-5 text-[#FFF9F2]">
                        <h3 class="md:text-xl text-lg">Sahad</h3>
                        <p class="md:text-lg text-base max-w-lg italic">"From booking the appointment to the treatment,
                            everything was smooth and professional. Highly recommend!""</p>
                    </div>
                </div>
                <div class="bg-[#004443] p-5 grid grid-rows-2 md:rounded-3xl rounded-2xl">
                    <div class="w-fill flex justify-end">
                        <img loading="lazy" src="../assets/img/avatar.svg" class="h-20 mr-5" alt="Dr. Sayyid Kasim V , Best Dental Clinic" />
                    </div>
                    <div class="flex-col justify-center space-y-5 text-[#FFF9F2]">
                        <h3 class="md:text-xl text-lg">Mustafa</h3>
                        <p class="md:text-lg italic text-base max-w-lg">"The care and attention I received were
                            outstanding. I trust Premium Dental Studio with all my dental needs."</p>
                    </div>
                </div>
                <div class="bg-[#00AEAA] p-5 grid grid-rows-2 md:rounded-3xl rounded-2xl">
                    <div class="w-fill flex justify-end">
                        <img loading="lazy" src="../assets/img/avatar.svg" class="h-24 mr-5" alt="Dr. Sayyid Kasim V" />
                    </div>
                    <div class="flex-col justify-center space-y-5 text-[#FFF9F2]">
                        <h3 class="md:text-xl text-lg">Sahad</h3>
                        <p class="md:text-lg text-base max-w-lg italic">"From booking the appointment to the treatment,
                            everything was smooth and professional. Highly recommend!""</p>
                    </div>
                </div>
                <div class="bg-[#004443] p-5 grid grid-rows-2 md:rounded-3xl rounded-2xl">
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
            googleReviews: [
                { name: "Ayesha Fathima", review: "Had a wonderful experience at the best dental clinic in Valanchery. Highly recommended!" },
                { name: "Mohammed Riyaz", review: "Very professional dental care and friendly staff. Completely satisfied with the service!" },
                { name: "Zainab Ali", review: "Amazing care, advanced treatments, and great results. The team is highly skilled!" },
                { name: "Imran Ahmed", review: "Top-notch dental clinic in Valanchery with a clean space and skilled professionals." },
                { name: "Safiya K.", review: "Received excellent dental treatment and caring staff. Highly recommended for all dental needs!" },
                { name: "Lakshmi Menon", review: "Premium Dental Studio in Valanchery exceeded expectations. Dr. Kasim offers expert care." },
                { name: "Riyas Puthur", review: "Smooth dental procedure with excellent results. Great focus on comfort and quality care!" },
                { name: "Divya Rajan", review: "Had an excellent experience here! Highly recommended for advanced dental care services." },
            ],

            filterdData: []
        };
    },
    mounted() {
        this.fetchRealEstateData()

    },
    methods: {
        getImageUrl(imageName) {
            return `${this.baseUrl}${imageName}`;
        },
        // async fetchRealEstateData() {
        //     this.loading = true;
        //     const apiKey = "AIzaSyCgdjx0OEvWhV2hqZ1N5aSzFw35t_mJTSY"; // Your API key
        //     try {
        //         // Specify the location based on the selected country
        //         const response = await axios.get("https://maps.googleapis.com/maps/api/place/details/json", {
        //             params: {
        //                 place_id: "ChIJSZ64hZ23pzsR2YK-1Ag6wmU",
        //                 key: apiKey,
        //                 fields: 'reviews'
        //             },
        //         });
        //         if (response.data.result && response.data.result.reviews) {
        //             // Filter out reviews without text
        //             this.googleReviews = response.data.result.reviews

        //             // Function to shuffle the reviews array
        //             const shuffleArray = (array) => {
        //                 for (let i = array.length - 1; i > 0; i--) {
        //                     const j = Math.floor(Math.random() * (i + 1));
        //                     [array[i], array[j]] = [array[j], array[i]]; // Swap elements
        //                 }
        //                 return array;
        //             };

        //             // Shuffle the reviews and take the first 4
        //             this.googleReviews = shuffleArray(this.googleReviews).slice(0, 4);
        //         } else {
        //             this.googleReviews = []; // Handle case where there are no reviews
        //         }


        //     } catch (error) {
        //         console.error("Error fetching data:", error);
        //     } finally {
        //         this.loading = false;
        //     }
        // },
        fetchRealEstateData() {
            const shuffleArray = (array) => {
                for (let i = array.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [array[i], array[j]] = [array[j], array[i]]; // Swap elements
                }
                return array;
            };
            this.filterdData = shuffleArray(this.googleReviews).slice(0, 4);
        },
        // getProfileImage(url) {
        //     const profileUrl = url !== '' ? url : 'https://premiumdentalstudio.in/avatar.svg'
        //     return profileUrl
        // }
    },
};
</script>