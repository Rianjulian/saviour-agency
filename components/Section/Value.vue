<template>
    <div>
        <div class="w-full my-20 flex items-center justify-center lg:my-28">
            <div class="w-full px-8 pb-20 lg:px-28 lg:pt-14">
                <div
                    class="w-full mb-5 flex flex-col items-center text-3xl font-Inter font-bold text-black lg:text-5xl md:mb-20">
                    <p class="text-sm font-black uppercase">Kenapa Saviour</p>
                    <h1
                        class="text-4xl text-center capitalize bg-gradient-to-r from-yellow-500 via-orange-400 to-orange-500 bg-clip-text text-transparent md:text-left">
                        Keunggulan yang kami miliki
                    </h1>
                </div>
                <div class="w-full h-full grid gap-y-10 gap-x-20 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
                    <div
                        class="hover:shadow-xl transition-all bg-[#ffffff] w-auto flex flex-col gap-x-5 gap-y-5 px-5 py-6 rounded-md | md:px-10 md:py-12">
                        <img src="~assets/images/keunggulan-kami/proses.svg" class="w-16 lg:w-12" />
                        <div class="text-xl text-black font-medium font-Inter">
                            Proses Cepat & Garansi Waktu
                        </div>
                        <p class="text-gray-600 leading-loose text-sm">Kami menjamin legalitas usaha Anda selesai hanya
                            dalam 3 hari! Prosesnya cepat, praktis,
                            dan aman.
                        </p>
                    </div>
                    <div
                        class="hover:shadow-xl transition-all bg-[#ffffff] w-auto flex flex-col gap-x-5 gap-y-5 px-5 py-6 rounded-md | md:px-10 md:py-12">
                        <img src="~assets/images/keunggulan-kami/konsultasi.svg" class="w-16 lg:w-12" />
                        <div class="text-xl text-black font-medium font-Inter">
                            Gratis Konsultasi
                        </div>
                        <p class="text-gray-600 leading-loose text-sm">Tim ahli kami siap membantu menjawab pertanyaan
                            Anda dan memberikan solusi terbaik untuk kebutuhan bisnis Anda. Hubungi kami sekarang untuk
                            memulai!</p>
                    </div>
                    <div
                        class="hover:shadow-xl transition-all bg-[#ffffff] w-auto flex flex-col gap-x-5 gap-y-5 px-5 py-6 rounded-md | md:px-10 md:py-12">
                        <img src="~assets/images/keunggulan-kami/profesional.svg" class="w-16 lg:w-12" />
                        <div class="text-xl text-black font-medium font-Inter">
                            Layanan Profesional
                        </div>
                        <p class="text-gray-600 leading-loose text-sm">Kami memahami bahwa setiap bisnis memiliki
                            identitas sendiri, dan kami berkomitmen untuk membantu anda mengekspresikan itu dengan
                            profesional</p>
                    </div>
                    <div
                        class="hover:shadow-xl transition-all bg-[#ffffff] w-auto flex flex-col gap-x-5 gap-y-5 px-5 py-6 rounded-md | md:px-10 md:py-12">
                        <img src="~assets/images/keunggulan-kami/layanan.svg" class="w-16 lg:w-12" />
                        <div class="text-xl text-black font-medium font-Inter">
                            Layanan Lengkap
                        </div>
                        <p class="text-gray-600 leading-loose text-sm">Dari pendirian PT, CV, PMA, Yayasan, hingga berbagai kebutuhan legal usaha Anda.</p>
                    </div>
                    <div
                        class="hover:shadow-xl transition-all bg-[#ffffff] w-auto flex flex-col gap-x-5 gap-y-5 px-5 py-6 rounded-md | md:px-10 md:py-12">
                        <img src="~assets/images/keunggulan-kami/harga.svg" class="w-16 lg:w-12" />
                        <div class="text-xl text-black font-medium font-Inter">
                            Harga Terjangkau
                        </div>
                        <p class="text-gray-600 leading-loose text-sm">Kami memahami bahwa setiap bisnis memiliki
                            Nikmati harga paling kompetitif dengan layanan yang lengkap dan berkualitas.</p>
                    </div>
                    <div
                        class="hover:shadow-xl transition-all bg-[#ffffff] w-auto flex flex-col gap-x-5 gap-y-5 px-5 py-6 rounded-md | md:px-10 md:py-12">
                        <img src="~assets/images/keunggulan-kami/legal.svg" class="w-16 lg:w-12" />
                        <div class="text-xl text-black font-medium font-Inter">
                            Legalitas Terjamin
                        </div>
                        <p class="text-gray-600 leading-loose text-sm">Dengan layanan kami, Anda mendapatkan jaminan
                            legalitas yang sah dan terpercaya, sehingga bisnis Anda dapat berjalan lancar tanpa kendala
                            hukum.</p>
                    </div>
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
        };
    },
    created() {
        this.word = dictionary;
    },
    computed: {
        lang() {
            return useLangStore().getLang;
            //   return this.$store.getters["getLang"];
        },
    },
    props: {
        core: {
            default: () => [],
            type: Array,
        },
    },
};
</script>

<style></style>