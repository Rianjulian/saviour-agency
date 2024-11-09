<template>
    <div>
        <div class="w-full flex justify-items-center gap-y-10 px-5 my-40 lg:px-24">
            <div class="flex flex-col bg-[#2D333A] justify-items-center items-center gap-x-10 h-full rounded-3xl md:flex-row">
                <div class="flex flex-col gap-y-10 h-full w-full pl-5 pt-5 md:py-10 md:pl-16">
                    <div class="flex flex-col justify-center gap-y-5 items-start h-full w-full">
                        <h1 class="text-white text-3xl md:text-4xl lg:text-5xl w-full font-bold">Punya Pertanyaan Lain?</h1>
                        <div class="flex flex-col gap-y-4">
                            <p class="text-white text-xl">Silahkan hubungi Saviour Agency untuk pertanyaan dan kendala
                                lainnya melalui whatsapp</p>
                        </div>
                    </div>
                    <a class="flex items-center gap-x-2 bg-white w-fit px-4 py-3 rounded-full"
                        href="https://wa.me/6285810100007?text=Halo Saviour Agency,%20saya%20tertarik%20untuk%20konsultasi%20layanan%20anda"
                        target="_blank">
                        <img src="~assets/images/logos_whatsapp-icon.png" class="w-6" />
                        Hubungi Kami
                    </a>
                </div>
                <div class="">
                    <img src="~assets/images/email-image.png" class="w-5/6 h-auto float-right rounded-br-3xl" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import dictionary from "~/static/lang.json";
import { useLangStore } from "~/store";

export default {
    data() {
        return {
            readMore: false,
            word: null,
            animatedValue: [],
        };
    },
    created() {
        this.word = dictionary;
    },
    computed: {
        lang() {
            return useLangStore().getLang;
            // return this.$store.getters["getLang"];
        },
    },
    props: {
        count: {
            default: () => [],
            type: Array,
        },
    },
    mounted() {
        // this.startCountAnimation();
    },
    methods: {
        formatValue(value) {
            const numericValue = Number(value); // Convert the string to a number
            return numericValue?.toLocaleString() || '';
        },
    },
};
</script>

<style scoped>
.image-overlay {
    background: linear-gradient(180deg,
            #ffffff 63.1%,
            rgba(217, 217, 217, 0) 108.27%);
    transform: rotate(-180deg);
}
</style>