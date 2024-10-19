<template>
    <section class="max-w-screen-xl min-h-screen my-12 mx-auto">
        <div>
            <h2 class="text-[#004443] font-bold text-3xl mb-16">Smiles That Speak</h2>
            <div class="grid  grid-cols-1 md:grid-cols-3 gap-5">
                <div class="md:col-span-2 col-span-1 rounded-3xl">
                    <img src="../assets/img/testimony.jpg" class=" w-full" alt="Dr. Sayyid Kasim V" />

                </div>
                <div class="bg-[#00AEAA] p-5 grid grid-rows-2 rounded-3xl">
                    <div class="w-fill flex justify-end">
                        <img src="../assets/img/avatar.svg" class="h-24 mr-5" alt="Dr. Sayyid Kasim V" />
                    </div>
                    <div class="flex-col justify-center space-y-5 text-[#FFF9F2]">
                        <h3 class="text-xl">Dr. Sayyid Kasim V</h3>
                        <p class="text-lg max-w-lg">BDS, FMC(GER), DIMP Chief Dental Surgeon | Facial Cosmetologist |
                            Sports Dentistry Specialist</p>
                    </div>
                </div>
                <div class="bg-[#004443] p-5 grid grid-rows-2 rounded-3xl">
                    <div class="w-fill flex justify-end">
                        <img src="../assets/img/avatar.svg" class="h-24 mr-5" alt="Dr. Sayyid Kasim V" />
                    </div>
                    <div class="flex-col justify-center space-y-5 text-[#FFF9F2]">
                        <h3 class="text-xl">Dr. Sayyid Kasim V</h3>
                        <p class="text-lg max-w-lg">BDS, FMC(GER), DIMP Chief Dental Surgeon | Facial Cosmetologist |
                            Sports Dentistry Specialist</p>
                    </div>
                </div>
                <div class="bg-[#00AEAA] p-5 grid grid-rows-2 rounded-3xl">
                    <div class="w-fill flex justify-end">
                        <img src="../assets/img/avatar.svg" class="h-24 mr-5" alt="Dr. Sayyid Kasim V" />
                    </div>
                    <div class="flex-col justify-center space-y-5 text-[#FFF9F2]">
                        <h3 class="text-xl">Dr. Sayyid Kasim V</h3>
                        <p class="text-lg max-w-lg">BDS, FMC(GER), DIMP Chief Dental Surgeon | Facial Cosmetologist |
                            Sports Dentistry Specialist</p>
                    </div>
                </div>
                <div class="bg-[#004443] p-5 grid grid-rows-2 rounded-3xl">
                    <div class="w-fill flex justify-end">
                        <img src="../assets/img/avatar.svg" class="h-24 mr-5" alt="Dr. Sayyid Kasim V" />
                    </div>
                    <div class="flex-col justify-center space-y-5 text-[#FFF9F2]">
                        <h3 class="text-xl">Dr. Sayyid Kasim V</h3>
                        <p class="text-lg max-w-lg">BDS, FMC(GER), DIMP Chief Dental Surgeon | Facial Cosmetologist |
                            Sports Dentistry Specialist</p>
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
