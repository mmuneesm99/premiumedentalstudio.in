<template>
    <section id="testimonial" class="max-w-screen-xl h-auto my-12 px-4 md:px-0 mx-auto">
        <div>
            <h2 class="text-[#004443] font-bold text-3xl mb-16 text-center md:text-left">Smiles That Speak</h2>
            <div class="grid  grid-cols-1 md:grid-cols-3 gap-5">
                <div class="md:col-span-2 col-span-1 rounded-3xl">
                    <img src="../assets/img/testimony.jpg" class=" w-full" alt="Dr. Sayyid Kasim V" />

                </div>
                <div class="bg-[#00AEAA] p-5 grid grid-rows-2 rounded-3xl">
                    <div class="w-fill flex justify-end">
                        <img src="../assets/img/avatar.svg" class="h-24 mr-5" alt="Dr. Sayyid Kasim V" />
                    </div>
                    <div class="flex-col justify-center space-y-5 text-[#FFF9F2]">
                        <h3 class="md:text-xl text-lg">Jafar sadhik</h3>
                        <p class="md:text-lg text-base italic max-w-lg">"Dr. Kasim and his staff are amazing! They explained every step of my treatment, and the results are perfect."</p>
                    </div>
                </div>
                <div class="bg-[#004443] p-5 grid grid-rows-2 rounded-3xl">
                    <div class="w-fill flex justify-end">
                        <img src="../assets/img/avatar.svg" class="h-24 mr-5" alt="Dr. Sayyid Kasim V" />
                    </div>
                    <div class="flex-col justify-center space-y-5 text-[#FFF9F2]">
                        <h3 class="md:text-xl text-lg">Mustafa</h3>
                        <p class="md:text-lg italic text-base max-w-lg">"The care and attention I received were outstanding. I trust Premium Dental Studio with all my dental needs."</p>
                    </div>
                </div>
                <div class="bg-[#00AEAA] p-5 grid grid-rows-2 rounded-3xl">
                    <div class="w-fill flex justify-end">
                        <img src="../assets/img/avatar.svg" class="h-24 mr-5" alt="Dr. Sayyid Kasim V" />
                    </div>
                    <div class="flex-col justify-center space-y-5 text-[#FFF9F2]">
                        <h3 class="md:text-xl text-lg">Sahad</h3>
                        <p class="md:text-lg text-base max-w-lg italic">"From booking the appointment to the treatment, everything was smooth and professional. Highly recommend!""</p>
                    </div>
                </div>
                <div class="bg-[#004443] p-5 grid grid-rows-2 rounded-3xl">
                    <div class="w-fill flex justify-end">
                        <img src="../assets/img/avatar.svg" class="h-24 mr-5" alt="Dr. Sayyid Kasim V" />
                    </div>
                    <div class="flex-col justify-center space-y-5 text-[#FFF9F2]">
                        <h3 class="md:text-xl text-lg">Munees</h3>
                        <p class="md:text-lg text-base max-w-lg italic">"The care and attention I received were outstanding. I trust Premium Dental Studio with all my dental needs."</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            baseUrl: 'https://mmuneesm99.github.io/imagecloude/',
        };
    },
    methods: {
        getImageUrl(imageName) {
            return `${this.baseUrl}src/assets/img/${imageName}`;
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
