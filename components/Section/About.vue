<template>
    <div>
        <div class="grid lg:grid-cols-2 gap-x-10 w-full py-10 lg:py-0 px-4 pb-20 lg:px-28 lg:pt-14" id="about">
            <div class="flex justify-center items-center">
                <div class="w-full h-full">
                    <img src="~/assets/images/image-tentang.png"
                        class="h-[60vh] w-96 object-cover rounded-tr-[50px] md:rounded-none md:w-full lg:h-full" />
                </div>
            </div>
            <div
                class="font-Inter order-2 p-8 py-16 flex flex-col leading-7 justify-center content-center gap-y-5 lg:px-5 lg:py-20">
                <div
                    class="w-full mb-5 flex flex-col text-3xl font-Inter font-bold text-black lg:text-5xl md:mb-2">
                    <p class="text-sm font-black uppercase">Tentang Kami</p>
                    <h1 class="text-4xl font-bold leading-snug bg-gradient-to-r from-yellow-500 via-orange-400 to-orange-600 bg-clip-text text-transparent">
                        Saviour Agency Mengedepankan Kebutuhan Klien Kami
                    </h1>
                </div>
                <div class="">
                    <p class="w-full whitespace-pre-wrap">Saviour Agency selalu mengedepankan kebutuhan klien kami, dengan fokus pada pemberian layanan yang dipersonalisasi dan solusi yang tepat guna untuk mencapai tujuan mereka. Kami berdedikasi untuk memahami setiap detail kebutuhan klien yang inovatif dan efektif.</p>
                </div>
                <div class="pl-5">
                    <ul class="list-disc flex flex-col gap-y-2">
                        <li>Digital Marketing</li>
                        <li>The Legality of the Company</li>
                        <li>Live Streaming Shopping Platform</li>
                        <li>Law Firm Agency</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        csr: {
            default: () => [],
            type: Array,
        },
    },
};
</script>