<template>
    <header id="services" v-if="department" class=" h-auto  relative">
        <div class="max-w-screen-xl flex flex-col mt-[150px] items-center justify-center mx-auto px-4 md:px-0">
            <div class="mb-10 sm:mb-0 sm:pr-8 text-center">
                <h1 class="text-balance text-4xl font-semibold tracking-tight text-[#004443] lg:text-6xl 2xl:text-7xl">
                    {{ department.name }}
                </h1>
            </div>
            <div class="grid grid-cols-1 items-center md:grid-cols-2 mt-8 md:mt-14">
                <div class="">
                    <img loading="lazy" class="min-h-[200px] object-cover rounded-[32px]"
                        :src="getImageUrl(department.imageUrl)" :alt="department.name">
                </div>
                <div>
                    <p>{{ department.description }}</p>
                </div>
            </div>
        </div>
    </header>
    <div class="max-w-screen-xl h-auto  mx-auto">
        <div class="py-16">
            <h2 class="text-[#004443] font-bold text-center text-3xl">Our services</h2>
        </div>
        <div class="flex flex-wrap gap-6 justify-center pb-12">
            <div class=" flex justify-center" v-for="(service, index) in department.services" :key="index">
            <div
                class="bg-white shadow-md overflow-hidden relative rounded-[32px]  flex flex-col items-start w-[300px]">
                <img :src="getImageUrl(department.imageUrl)" alt="Root Canal Treatment" loading="lazy"
                    class="rounded-t-lg mb-4" />
                <h3 class="text-[#00AEAA] font-semibold px-3 pb-4 text-lg">{{ service.serviceName }}</h3>
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
            return this.department ? "https://mmuneesm99.github.io/imagecloude/servises/" + url : ''
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