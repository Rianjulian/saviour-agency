<template>
    <div>
        <div class="w-full my-20 flex items-center justify-center lg:my-28" id="service">
            <div class="w-full px-8 pb-20 lg:px-28 lg:pt-14">
                <div
                    class="w-full mb-5 flex flex-col items-center text-3xl font-Inter font-bold text-black lg:text-5xl md:mb-20">
                    <p class="text-sm font-black uppercase">Layanan Kami</p>
                    <h1
                        class="text-4xl capitalize bg-gradient-to-r from-yellow-500 via-orange-400 to-orange-600 bg-clip-text text-transparent">
                        Beberapa Layanan yang kami miliki
                    </h1>
                </div>
                <div class="w-full h-full grid gap-y-10 gap-x-20 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
                    <div
                        class="bg-[#ffffff] shadow-lg w-auto flex flex-col gap-x-5 gap-y-2 px-5 py-6 rounded-md | md:px-8 md:py-10">
                        <img src="~assets/images/layanan/digital-marketing.png" class="w-16 lg:w-32" />
                        <div class="text-xl text-black font-medium font-Inter">
                            Digital Marketing
                        </div>
                        <p class="text-gray-600 leading-normal text-sm">Meningkatkan Brand Anda dengan Strategi yang
                            Profesional dan Efektif.</p>
                        <h1 class="text-yellow-500 text-2xl mt-1 font-bold">Mulai Rp 1,5 Juta</h1>
                        <nuxt-link to="/digital-marketing/" class="text-white font-semibold bg-yellow-400 py-2 mt-5 rounded-full flex items-center justify-center"> Lihat Detail
                            <img src="~assets/icons/chevron.svg" alt="My Icon" class="h-7 w-7" />
                        </nuxt-link>
                    </div>
                    <div
                        class="bg-[#ffffff] shadow-lg w-auto flex flex-col gap-x-5 gap-y-2 px-5 py-6 rounded-md | md:px-8 md:py-10">
                        <img src="~assets/images/layanan/talent.png" class="w-16 lg:w-32" />
                        <div class="text-xl text-black font-medium font-Inter">
                            Talent Management
                        </div>
                        <p class="text-gray-600 leading-normal text-sm">Layanan manajemen talenta dengan Fokus pada
                            hasil dan keahlian terbaik</p>
                        <h1 class="text-yellow-500 text-2xl mt-1 font-bold">Mulai Rp 1,5 Juta</h1>
                        <nuxt-link to="/" class="text-white font-semibold bg-yellow-400 py-2 mt-5 rounded-full flex items-center justify-center"> Lihat Detail
                            <img src="~assets/icons/chevron.svg" alt="My Icon" class="h-7 w-7" />
                        </nuxt-link>
                    </div>
                    <div
                        class="bg-[#ffffff] shadow-lg w-auto flex flex-col gap-x-5 gap-y-2 px-5 py-6 rounded-md | md:px-8 md:py-10">
                        <img src="~assets/images/layanan/media.png" class="w-16 lg:w-32" />
                        <div class="text-xl text-black font-medium font-Inter">
                            Media Handle
                        </div>
                        <p class="text-gray-600 leading-normal text-sm">Jasa Media Handle dengan Kebutuhan dan
                            Profesionalisme dalam Setiap Kampanye</p>
                        <h1 class="text-yellow-500 text-2xl mt-1 font-bold">Mulai Rp 1,5 Juta</h1>
                        <nuxt-link to="/" class="text-white font-semibold bg-yellow-400 py-2 mt-5 rounded-full flex items-center justify-center"> Lihat Detail
                            <img src="~assets/icons/chevron.svg" alt="My Icon" class="h-7 w-7" />
                        </nuxt-link>
                    </div>
                    <div
                        class="bg-[#ffffff] shadow-lg w-auto flex flex-col gap-x-5 gap-y-2 px-5 py-6 rounded-md | md:px-8 md:py-10">
                        <img src="~assets/images/layanan/web.png" class="w-16 lg:w-32" />
                        <div class="text-xl text-black font-medium font-Inter">
                            Web Development
                        </div>
                        <p class="text-gray-600 leading-normal text-sm">Buat Website impian anda dengan sesuai kantongmu
                        </p>
                        <h1 class="text-yellow-500 text-2xl mt-1 font-bold">Mulai Rp 1,5 Juta</h1>
                        <nuxt-link to="/" class="text-white font-semibold bg-yellow-400 py-2 mt-5 rounded-full flex items-center justify-center"> Lihat Detail
                            <img src="~assets/icons/chevron.svg" alt="My Icon" class="h-7 w-7" />
                        </nuxt-link>
                    </div>
                    <div
                        class="bg-[#ffffff] shadow-lg w-auto flex flex-col gap-x-5 gap-y-2 px-5 py-6 rounded-md | md:px-8 md:py-10">
                        <img src="~assets/images/layanan/law-firm.png" class="w-16 lg:w-32" />
                        <div class="text-xl text-black font-medium font-Inter">
                            Law Firm Agency
                        </div>
                        <p class="text-gray-600 leading-normal text-sm">Paket pendirian PT dan CV secara cepat, lengkap,
                            dan profesional.</p>
                        <h1 class="text-yellow-500 text-2xl mt-1 font-bold">Mulai Rp 1,5 Juta</h1>
                        <nuxt-link to="/" class="text-white font-semibold bg-yellow-400 py-2 mt-5 rounded-full flex items-center justify-center"> Lihat Detail
                            <img src="~assets/icons/chevron.svg" alt="My Icon" class="h-7 w-7" />
                        </nuxt-link>
                    </div>
                    <div
                        class="bg-[#ffffff] shadow-lg w-auto flex flex-col gap-x-5 gap-y-2 px-5 py-6 rounded-md | md:px-8 md:py-10">
                        <img src="~assets/images/layanan/design.png" class="w-16 lg:w-32" />
                        <div class="text-xl text-black font-medium font-Inter">
                            Design Graphic
                        </div>
                        <p class="text-gray-600 leading-normal text-sm">Buat kreativitas dan profesionalisme dalam
                            Desain Grafis untuk Bisnis Anda</p>
                        <h1 class="text-yellow-500 text-2xl mt-1 font-bold">Mulai Rp 1,5 Juta</h1>
                        <nuxt-link to="/" class="text-white font-semibold bg-yellow-400 py-2 mt-5 rounded-full flex items-center justify-center"> Lihat Detail
                            <img src="~assets/icons/chevron.svg" alt="My Icon" class="h-7 w-7" />
                        </nuxt-link>
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