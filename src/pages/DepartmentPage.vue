<template>
    <header id="services" v-if="department" class=" h-auto  relative">
        <div class="max-w-screen-xl flex flex-col mt-[150px] items-center justify-center mx-auto px-4 md:px-0">
            <div class="mb-10 sm:mb-0 sm:pr-8 text-center">
                <h1 class="text-balance text-4xl font-semibold tracking-tight text-[#004443] lg:text-6xl 2xl:text-7xl">
                    {{ department.name }}
                </h1>
            </div>
            <div class="flex flex-col justify-center items-center gap-10 mt-4 md:mt-6">
                <div class="text-center max-w-4xl text-[#004443] order-2 md:order-1">
                    <p>{{ department.description }}</p>
                </div>
                <div class="order-1 flex justify-center relative">
                    <div class="h-20 rounded-3xl mx-auto absolute bg-[#0CB2AE] w-[80%]"></div>
                    <img loading="lazy" class="w-full mt-5 md:mt-10 relative object-cover rounded-3xl"
                        :src="getImageUrl(department.banner)" :alt="department.name">
                </div>
                
            </div>
        </div>
    </header>
    <div class="max-w-screen-xl h-auto  mx-auto px-4 md:px-0">
        <div class="py-16">
            <h2 class="text-[#004443] font-bold text-center text-3xl md:text-4xl">In-Depth Care Services</h2>
        </div>
        <div class="flex flex-wrap gap-6 justify-center pb-12">
            <div class=" flex justify-center" v-for="(service, index) in department.services" :key="index">
            <div
                class="bg-white shadow-md overflow-hidden relative rounded-3xl  flex flex-col items-start  md:w-[300px]">
                <img :src="getImageUrl(service.imageUrl)" alt="Root Canal Treatment" loading="lazy"
                    class="rounded-t-lg mb-4" />
                <h3 class="text-[#00AEAA] font-semibold px-3 pb-3 text-lg">{{ service.serviceName }}</h3>
                <p class="px-3 pb-4">{{ service.description }}</p>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
import departmentsData from '../assets/js/departments.json'

export default {
    props: ['name'],
    data() {
        return {
            department: null
        }
    },
    methods: {
        getImageUrl(url) {
            return this.department ? "https://mmuneesm99.github.io/imagecloude/" + url : ''
        }
    },
    created() {
        // Find the department based on the route parameter (department name)
        this.department = departmentsData.departments.find(
            dept => dept.name === this.name
        )
    }
}
</script>

<style>
/* Add any styling needed for the department page */
</style>