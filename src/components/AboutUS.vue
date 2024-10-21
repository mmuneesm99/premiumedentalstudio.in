<template>
    <div id="about-us" class="max-w-screen-xl h-auto flex flex-col mt-6 mx-auto">
        <section class=" py-12 relative">
            <div class="max-w-full w-full mx-auto">
                <!-- About Us Title -->
                <h2 class="text-[#004443] font-semibold text-3xl text-center md:text-left mb-8">About Us</h2>

                <!-- Commitment Title -->
                <h3 class="text-[#00AEAA] text-center md:text-left font-bold ml-0 md:ml-5 text-2xl md:text-4xl mb-8">
                    OUR COMMITMENT TO <br />
                    EXCEPTIONAL DENTAL CARE
                </h3>
                <div data-aos="fade-up" class="ml-0 md:ml-5 col-span-2 px-8 relative z-20  rounded-[36px] block md:hidden">
                    <img loading="lazy" src="../assets/img/about-image-1.avif" alt="Dental Clinic"
                        class="rounded-[36px] -mb-14  shadow-md w-full object-cover" />
                </div>
                <div
                    class="grid md:bg-transparent text-center md:text-left bg-[#00AEAA] px-4 pt-20 md:pt-0  rounded-t-[36px] md:rounded-none md:px-0 lg:grid-cols-3 gap-8 relative z-10">
                    <!-- Image Section -->
                    <div class="ml-0 md:ml-5 col-span-2 rounded-[36px] hidden md:block">
                        <img loading="lazy" src="../assets/img/about-image-1.avif" alt="Dental Clinic"
                            class="rounded-[36px] shadow-md w-full object-cover" />
                    </div>

                    <!-- Text Section -->
                    <div class="flex text-[#FFF9F2] md:text-[#004443] flex-col text-base md:text-xl justify-start">
                        <p class="mb-4">
                            At Premium Dental Studio, we blend cutting-edge technology with personalized care to offer a
                            top-tier dental experience. Our expert team provides a full range of services, from routine
                            cleanings to advanced cosmetic treatments, all in a comfortable, welcoming space.
                        </p>
                        <p class="">
                            We prioritize your oral health and are dedicated to creating confident, beautiful smiles.
                            Every patient receives exceptional, tailored care to meet their unique needs.
                        </p>
                    </div>
                </div>

                <!-- Mission and Vision Section -->
                <div
                    class=" relative grid grid-cols-1  md:grid-cols-3 gap-6 mt-0  md:-mt-36 bg-[#00AEAA] px-3 md:px-8 py-8 rounded-b-3xl md:rounded-[36px] ">
                    <!-- Mission -->
                    <div class="relative md:order-1 order-1">
                        <div class="text-center md:text-left relative md:absolute bottom-0">
                            <h4 class="text-white font-semibold text-xl md:text-2xl mb-4">OUR MISSION</h4>
                            <p class="text-white text-base md:text-lg">
                                To provide personalized, premium-quality dental care that enhances both your smile and
                                your well-being.
                            </p>
                        </div>
                    </div>
                    <div class="relative md:order-2 order-3 ">
                        <div class="text-center md:text-left relative md:absolute bottom-0">
                            <h4 class="text-white font-semibold text-xl md:text-2xl mb-4">OUR VISION</h4>
                            <p class="text-white text-base md:text-lg">
                                To be recognized as a leading dental practice known for exceptional care, innovation,
                                and a patient-first approach.
                            </p>
                        </div>
                    </div>
                    <div class="md:order-3 order-2">
                        <img loading="lazy" src="../assets/img/about-image-2.avif" alt="Mission Image"
                            class="rounded-[36px] shadow-md  w-full object-cover" />
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