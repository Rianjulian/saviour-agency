<template>
  <div>
    <div class="hidden bg-black text-white font-Inter w-full px-24 py-10 bg-custom-yellow md:block">
      <div class="w-full flex items-start space-x-4">
        <div class="flex-grow">
          <img src="~assets/images/logo-white.png" class="h-full w-28 object-contain" />
          <div class="font-OpenSans mt-4 w-full xl:w-3/4">
            Jl. Bhexman No.19, RT.3/RW.02, Cipayung, Kec. Cipayung, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta
            13840
          </div>
        </div>
        <div class="w-[30%] flex flex-col space-y-4">
          <div class="text-lg font-bold">
            <h1>HALAMAN</h1>
          </div>
          <div class="flex flex-col space-y-3">
            <nuxt-link to="/" class="hover:text-yellow-300">Home</nuxt-link>
            <nuxt-link to="#about" class="hover:text-yellow-300">Tentang</nuxt-link>
            <nuxt-link to="#service" class="hover:text-yellow-300">Layanan</nuxt-link>
            <nuxt-link to="#testimonial" class="hover:text-yellow-300">Testimonial</nuxt-link>
          </div>
        </div>
        <div class="w-[30%] flex flex-col space-y-4">
          <div class="text-lg font-bold">
            <h1>Kontak</h1>
          </div>
          <div class="flex flex-col space-y-3">
            <a class="hover:text-yellow-300" href="https://wa.me/6285810100007?text=Halo Saviour Agency,%20saya%20tertarik%20untuk%20konsultasi%20layanan%20anda"
              target="_blank">
              0858-1010-0007
            </a>
            <nuxt-link to="/" class="hover:text-yellow-300">saviouragency@gmail.com</nuxt-link>
          </div>
        </div>
        <div class="w-[30%] flex flex-col space-y-4">
          <div class="text-lg font-bold">
            <h1>SOCIAL MEDIA</h1>
          </div>
          <div class="flex items-center">
            <a href="https://www.instagram.com/saviour.agency/" target="_blank" class="hover:text-yellow-300">
              <img src="~assets/icons/insta.svg" alt="My Icon" class="h-12 w-12" />
            </a>
            <a href="https://www.linkedin.com/in/saviour-agency-401716167/?originalSubdomain=id" target="_blank" class="hover:text-yellow-300">
              <img src="~assets/icons/linkedin.svg" alt="My Icon" class="h-12 w-12" />
            </a>
          </div>
        </div>
      </div>
      <!-- <div class="w-full flex flex-col justify-end gap-y-10 p-4 lg:py-10 lg:px-10 xl:px-0 text-black">
          <div class="w-full">
            <img src="~assets/images/footer-image.svg" class="h-full w-60 object-contain" />
          </div>
          <div class="w-full flex gap-x-5">
            <div class="text-lg font-bold hover:opacity-80">
              <nuxt-link to="/"> Home </nuxt-link>
            </div>
            <div class="text-lg font-bold hover:opacity-80">
              <nuxt-link to="/contact-us"> Produk </nuxt-link>
            </div>
            <div class="text-lg font-bold hover:opacity-80">
              <nuxt-link to="/contact-us"> Solution </nuxt-link>
            </div>
            <div class="text-lg font-bold hover:opacity-80">
              <nuxt-link to="/contact-us"> Project </nuxt-link>
            </div>
            <div class="text-lg font-bold hover:opacity-80">
              <nuxt-link to="/contact-us"> Event </nuxt-link>
            </div>
            <div class="text-lg font-bold hover:opacity-80">
              <nuxt-link to="/contact-us"> Kontak </nuxt-link>
            </div>
            <div class="text-lg font-bold hover:opacity-80">
              <nuxt-link to="/contact-us"> Download </nuxt-link>
            </div>
          </div>
        </div> -->
      <div class="flex justify-end py-10 bg-custom-yellow border-t-2 border-black">
        <div class="w-full">
          <h1 class="w-full">© {{ (new Date()).getUTCFullYear() }} Saviour Agency</h1>
        </div>
        <!-- <div class="flex justify-end gap-x-5 w-full">
                <a href="https://instagram.com/airmasgroup.id?igshid=NWRhNmQxMjQ=">
                  <div class="h-10 w-10 cursor-pointer hover:opacity-70">
                    <img src="~assets/icons/instagram.svg" class="h-full w-full" />
                  </div>
                </a>
                <a href="https://www.facebook.com/airmasid">
                  <div class="h-10 w-10 cursor-pointer hover:opacity-70">
                    <img src="~assets/icons/mail-icon.svg" class="h-full w-full" />
                  </div>
                </a>
                <a href="https://youtube.com/channel/UCo9GpMB5RcOtTxR3AbwgztA">
                  <div class="h-10 w-10 cursor-pointer hover:opacity-70">
                    <img src="~assets/icons/youtube.svg" class="h-full w-full" />
                  </div>
                </a>
          </div> -->
      </div>
    </div>

    <!-- Mobile View -->
    <!-- <div class="px-5 w-full flex md:hidden flex-col items-center font-Inter text-white py-4 bg-custom-yellow">
        <div class="w-[90%] pt-4 flex flex-col space-y-4 gap-y-5">
          <div class="flex flex-col gap-y-2">
            <img src="~assets/images/footer-image.svg" class="h-full w-60 object-contain" />
            <div class="font-Inter text-xl mt-4 w-full xl:w-72 xl:leading-relaxed">
              Solusi Produk-produk IT Terbaik dan Berkualitas untuk Kebutuhan Perusahaan Anda.
            </div>
          </div>
        </div>
        <div class="w-[90%] grid gap-y-4 gap-x-1 pt-10">
          <nuxt-link class="font-bold text-xl" to="/">Home</nuxt-link>
          <nuxt-link class="font-bold text-xl" to="/events">Project & Event</nuxt-link>
          <nuxt-link to="/contact-us" class="font-bold text-xl">Kontak</nuxt-link>
          <h1 class="font-bold text-xl">Produk</h1>
          <nuxt-link to="/product/maleo" class="font-normal text-lg">Maleo</nuxt-link>
          <nuxt-link to="/product/gelatik" class="font-normal text-lg">Gelatik</nuxt-link>
          <nuxt-link to="/product/kolibri" class="font-normal text-lg">Kolibri</nuxt-link>
          <nuxt-link to="/product/pemilu" class="font-normal text-lg">Pemilu</nuxt-link>
        </div>
        <div class="flex flex-col mt-10 px-5 py-4 justify-start gap-2 w-full">
          <div class="flex justify-start gap-x-5 w-full">
            <a href="https://instagram.com/airmasgroup.id?igshid=NWRhNmQxMjQ=">
              <div class="h-10 w-10 cursor-pointer hover:opacity-70">
                <img src="~assets/icons/instagram.svg" class="h-full w-full" />
              </div>
            </a>
            <a href="https://www.facebook.com/airmasid">
              <div class="h-10 w-10 cursor-pointer hover:opacity-70">
                <img src="~assets/icons/mail-icon.svg" class="h-full w-full" />
              </div>
            </a>
            <a href="https://youtube.com/channel/UCo9GpMB5RcOtTxR3AbwgztA">
              <div class="h-10 w-10 cursor-pointer hover:opacity-70">
                <img src="~assets/icons/youtube.svg" class="h-full w-full" />
              </div>
            </a>
          </div>
        </div>
      </div>
      <div class="w-full flex justify-center py-10 bg-custom-yellow md:hidden">
        <h1 class="text-center text-lg">PT Kudo Indonesia Jaya © {{ (new Date()).getUTCFullYear() }} <br> All Rights Reserved.</h1>
      </div> -->
  </div>
</template>

<script>
// import axios from 'axios'

export default {
  name: "Footer",
  data() {
    return {
      footer: [],
      footer_socmed: [],
      linkMobile: [
        {
          name: "Bisnis Kami",
          link: "/bisnis",
          toggle: false,
          children: [
            {
              name: "Business to Government",
              link: "/bisnis#gov",
            },
            {
              name: "Business to Business",
              link: "/bisnis#business",
            },
            {
              name: "Business to Consumer",
              link: "",
            },
          ],
        },
      ],
    };
  },
  mounted() {
    this.getData();
    this.scrollToBusiness();
    this.scrollToGov();
  },
  methods: {
    async getData() {
      // const data = await this.$axios.$get('/footer?lang=en')
      // this.footer = data.data
      // this.footer_socmed = data.data.footer_socmed
    },
    scrollToBusiness() {
      const hash = this.$route.hash;
      if (hash === '#business') {
        const element = document.getElementById('business');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    },
    scrollToGov() {
      const hash = this.$route.hash;
      if (hash === '#gov') {
        const element = document.getElementById('gov');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    },
    scrollToBus() {
      const { $el } = this.$refs.business;
      if ($el) {
        $el.scrollIntoView({ behavior: "smooth" });
      }
    },
  },
};
</script>

<style></style>