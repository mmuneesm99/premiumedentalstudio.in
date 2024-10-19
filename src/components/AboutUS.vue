<template>
    <div class="max-w-screen-xl min-h-screen flex flex-col mt-12 mx-auto">
        <section class=" py-12 relative">
            <div class="max-w-full w-full mx-auto">
                <!-- About Us Title -->
                <h2 class="text-[#004443] font-semibold text-3xl mb-8">About Us</h2>

                <!-- Commitment Title -->
                <h3 class="text-[#00AEAA] font-bold ml-5 text-5xl mb-8">
                    OUR COMMITMENT TO <br />
                    EXCEPTIONAL DENTAL CARE
                </h3>

                <div class="grid lg:grid-cols-3 gap-8 relative z-10">
                    <!-- Image Section -->
                    <div class="ml-5 col-span-2 rounded-3xl">
                        <img src="../assets/img/about-image-1.jpg" alt="Dental Clinic"
                            class="rounded-3xl shadow-md w-full object-cover" />
                    </div>

                    <!-- Text Section -->
                    <div class="flex flex-col text-xl justify-start">
                        <p class="text-[#00AEAA] mb-4">
                            At Premium Dental Studio, we blend cutting-edge technology with personalized care to offer a
                            top-tier dental experience. Our expert team provides a full range of services, from routine
                            cleanings to advanced cosmetic treatments, all in a comfortable, welcoming space.
                        </p>
                        <p class="text-[#00AEAA]">
                            We prioritize your oral health and are dedicated to creating confident, beautiful smiles.
                            Every patient receives exceptional, tailored care to meet their unique needs.
                        </p>
                    </div>
                </div>

                <!-- Mission and Vision Section -->
                <div class=" relative grid lg:grid-cols-3 gap-8 -mt-32 bg-[#00AEAA] p-8 rounded-3xl">
                    <!-- Mission -->
                    <div class="relative">
                        <div class="text-left absolute bottom-0">
                            <h4 class="text-white font-semibold text-2xl mb-4">OUR MISSION</h4>
                            <p class="text-white text-lg">
                                To provide personalized, premium-quality dental care that enhances both your smile and
                                your well-being.
                            </p>
                        </div>
                    </div>
                    <div class="relative">
                        <div class="text-left absolute bottom-0">
                            <h4 class="text-white font-semibold text-2xl mb-4">OUR VISION</h4>
                            <p class="text-white text-lg">
                                To be recognized as a leading dental practice known for exceptional care, innovation,
                                and a patient-first approach.
                            </p>
                        </div>
                    </div>
                    <div>
                        <img src="../assets/img/about-image-2.jpg" alt="Mission Image"
                            class="rounded-3xl shadow-md mb-4 object-cover" />
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
export default {

}
</script>