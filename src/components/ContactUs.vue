<template>
    <div id="contact-us" class="max-w-screen-xl h-auto flex flex-col py-6 mx-auto px-4 md:px-0">
        <div class="bg-[#0CB2AE] text-[#FFF9F2] rounded-[32px] p-4 md:p-8 grid gap-8 grid-cols-1 md:grid-cols-2">
            <div class="space-y-5">
                <h3 class=" text-2xl md:text-3xl">Get in touch with us</h3>
                <p class="text-base md:text-lg">Have a question or need to book an appointment? We’re here to help! Fill out the form below, and our
                    team will get back to you shortly.</p>
                <form @submit.prevent="submitForm" id="submit-form" class="space-y-3">
                    <div class="flex flex-col">
                        <label for="name">Name</label>
                        <div
                            class="border border-[#FFF9F2] rounded-lg bg-transparent focus:outline-none focus:border-white relative overflow-hidden">
                            <input id="Name" v-model="formData.name"
                                class="bg-transparent w-full border-none outline-none py-3" type="text" required>
                        </div>
                    </div>
                    <div class="flex flex-col">
                        <label for="phone">Phone Number</label>
                        <div
                            class="border flex items-center border-[#FFF9F2] rounded-lg bg-transparent focus:outline-none focus:border-white relative overflow-hidden">
                            <div class="px-3 py-2 ml-1 rounded h-full text-[#004443] bg-[#FFF9F2]">+91</div>
                            <input id="phone" v-model="formData.phone"
                                class="bg-transparent py-3 w-full border-none outline-none" type="number" required>
                        </div>
                    </div>
                    <button type="submit" class="bg-[#004443] w-full py-4 rounded-lg">
                        {{ buttonText }}
                    </button>
                </form>
            </div>
            <div class="relative rounded-2xl overflow-hidden">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.9738410172954!2d76.07174727457625!3d10.889592457097102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7b79d85b89e49%3A0x65c23a08d4be82d9!2sPremium%20Dental%20Studio!5e0!3m2!1sen!2sin!4v1729358972473!5m2!1sen!2sin"
                    width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            formData: {
                name: '',
                phone: '',
                dateTime: '',
                status: 'Pending'
            },
            buttonText: 'Submit',
            isSubmitting: false
        }
    },
    methods: {
        getCurrentDateTime() {
            const now = new Date();
            const day = String(now.getDate()).padStart(2, '0');
            const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are zero-based
            const year = now.getFullYear();
            const hours = now.getHours();
            const minutes = String(now.getMinutes()).padStart(2, '0');

            return `${day}/${month}/${year}, ${hours}:${minutes}`;
        },
        submitForm(event) {
            // Get the current date and time when the form is submitted
            this.formData.dateTime = this.getCurrentDateTime();

            const form = event.target;
            const data = new FormData();
            data.append('name', this.formData.name);
            data.append('phone', this.formData.phone);
            data.append('date', this.formData.dateTime);
            data.append('status', this.formData.status);

            const url = 'https://script.google.com/macros/s/AKfycbyYRkJfjXSjn1Zuf22nhad7nK_mgLvFFynWZoM2bqvweLgOVa77CwM9sSwQ_K-GsOu5/exec'; // Replace with your Web App URL

            this.isSubmitting = true;
            this.buttonText = 'Submitting...';

            fetch(url, {
                method: 'POST',
                body: data,
                mode: 'no-cors',
                redirect: 'follow'
            })
                .then((response) => response.text())
                .then((text) => {
                    this.buttonText = 'Success!';
                    setTimeout(() => {
                        this.buttonText = 'Submit';
                    }, 3000); // Reset button text after 3 seconds
                    form.reset(); // Reset the form
                    // Reset formData and status to default
                    this.formData.name = '';
                    this.formData.phone = '';
                    this.formData.status = 'Pending';
                })
                .catch((error) => {
                    console.error('Error:', error);
                    this.buttonText = 'Error! Try Again';
                    setTimeout(() => {
                        this.buttonText = 'Submit';
                    }, 3000); // Reset button text after 3 seconds
                })
                .finally(() => {
                    this.isSubmitting = false;
                });
        }
    }
}
</script>