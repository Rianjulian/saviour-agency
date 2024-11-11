<template>
  <div>
    <div class="bg-yellow-500 flex justify-end text-white px-20 py-2">
      <div class="flex items-center lg:gap-x-16">
        <div
          class="h-fit font-Inter font-medium tracking-wide hover:text-custom-yellow cursor-pointer hover:opacity-80 select-none text-base">
          <a href="https://wa.me/6285810100007?text=Halo Saviour Agency,%20saya%20tertarik%20untuk%20konsultasi%20layanan%20anda"
            target="_blank">
            0858-1010-0007
          </a>
        </div>
        <div
          class="h-fit font-Inter font-medium tracking-wide hover:text-custom-yellow cursor-pointer hover:opacity-80 select-none text-base">
          <a href="mailto:saviouragency.indonesia@gmail.com?subject=Konsultasi%20Layanan%20Saviour%20Agency">saviouragency.indonesia@gmail.com</a>
        </div>
      </div>
    </div>
    <div class="w-full font-Inter group absolute text-black flex items-center">
      <div class="hidden w-full relative text-black lg:flex items-center py-1 bg-white">
        <div class="w-full h-full absolute">
          <div class="h-full w-full relative">
            <div class="absolute bottom-0 group-hover:blur-lg w-full h-1/4"></div>
          </div>
        </div>
        <div class="w-full z-10 relative h-full px-20 py-5 flex items-center justify-between">
          <div class="flex flex-col items-center justify-center">
            <nuxt-link to="/">
              <div class="w-40 flex justify-center items-center">
                <img src="~assets/images/logo.png" class="h-full w-full object-contain" :alt="navbar.logo_text" />
              </div>
            </nuxt-link>
          </div>
          <div class="flex items-center lg:gap-x-16">
            <div
              class="h-fit font-Inter font-medium tracking-wide hover:text-custom-yellow cursor-pointer hover:opacity-80 select-none text-xl">
              <nuxt-link to="/">
                Home
              </nuxt-link>
            </div>
            <div
              class="h-fit font-Inter font-medium tracking-wide hover:text-custom-yellow cursor-pointer hover:opacity-80 select-none text-xl">
              <nuxt-link to="#about">
                Tentang
              </nuxt-link>
            </div>
            <div
              class="h-fit font-Inter font-medium tracking-wide hover:text-custom-yellow cursor-pointer hover:opacity-80 select-none text-xl">
              <nuxt-link to="#service">
                Layanan
              </nuxt-link>
            </div>
            <div
              class="h-fit font-Inter font-medium tracking-wide hover:text-custom-yellow cursor-pointer hover:opacity-80 select-none text-xl">
              <nuxt-link to="#testimonial">
                Testimonial
              </nuxt-link>
            </div>
          </div>
          <a class="h-fit font-Inter font-medium bg-yellow-500 px-5 py-3 text-lg rounded-full text-white"
            href="https://wa.me/6285810100007?text=Halo Saviour Agency,%20saya%20tertarik%20untuk%20konsultasi%20layanan%20anda"
            target="_blank">
            Kontak Kami
          </a>
        </div>
      </div>
    </div>

    <!-- Mobile and Tab View -->
    <div class="block lg:hidden w-full fixed top-0 z-50" :style="{ backgroundColor: menuBackgroundColor }">
      <div class="absolute right-0 z-10">
        <div class="h-[15vh] w-[15vh] md:h-[10vh] flex pl-12 items-center">
          <img v-if="!toggle_menu" @click="toggle_menu = true" src="~assets/icons/hamburger-black.svg"
            class="h-[4vh] w-[4vh] hover:opacity-70" />
          <img v-else @click="toggle_menu = false" src="~assets/icons/times_black.svg"
            class="h-[5vh] w-[5vh] hover:opacity-70" />
        </div>
      </div>
      <div class="w-full flex justify-start px-5 md:px-10 py-9">
        <nuxt-link to="/">
          <img src="~assets/images/logo.png" class="w-32" :alt="navbar.logo_text" />
        </nuxt-link>
      </div>
      <transition name="slide-fade">
        <div v-if="toggle_menu"
          class="w-full flex flex-col space-y-8 bg-[#ffffff] h-screen px-6 pb-32 text-[#000000] overflow-y-auto">
          <!-- <div class="w-[5.3rem]">
            <InputLang />
          </div> -->
          <div class="flex flex-col gap-4 font-Inter text-2xl" @click="toggle_mobile = !toggle_mobile">
            <nuxt-link @click.native="toggle_menu = false" class="font-Inter font-medium text-2xl" to="/" :exact="true">
              Home
            </nuxt-link>
            <div
              class="h-fit font-medium tracking-wide hover:text-custom-yellow cursor-pointer hover:opacity-80 select-none font-Inter text-2xl">
              <nuxt-link to="/">
                Solution
              </nuxt-link>
            </div>
            <div
              class="h-fit font-Inter text-2xl font-medium tracking-wide hover:text-custom-yellow cursor-pointer hover:opacity-80 select-none">
              <nuxt-link to="/">
                Project
              </nuxt-link>
            </div>
            <div
              class="h-fit font-Inter text-2xl font-medium tracking-wide hover:text-custom-yellow cursor-pointer hover:opacity-80 select-none">
              <nuxt-link to="/">
                Kontak
              </nuxt-link>
            </div>
            <div
              class="h-fit font-Inter text-2xl font-medium tracking-wide hover:text-custom-yellow cursor-pointer hover:opacity-80 select-none">
              <nuxt-link to="/">
                Download
              </nuxt-link>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
// // import lang from "~/static/lang.json";

export default {
  props: {
    color: {
      default: "group-hover:from-[#13284C]",
      type: String,
    },
  },
  data() {
    return {
      navbar: {},
      toggle_menu: false,
      toggle_mobile: false,
      menu_lang: null,
      menuBackgroundColor: '#ffffff',
    };
  },
  computed: {
    lang() {
      return this.$store.getters["getLang"];
    },
  },
  // created() {
  //   this.menu_lang = lang;
  // },
  mounted() {
    // this.getData()
    // window.addEventListener('scroll', this.handleScroll);
    // this.handleScroll();
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    // async getData() {
    //   const data = await this.$axios.$get('/navbar?lang=id')
    //   this.navbar = data.data
    // },
    scrollToSection(section) {
      // Emit event to the parent component (Index.vue)
      this.$emit('scroll-to-section', section);
    },
    handleScroll() {
      const currentScrollPos = window.pageYOffset || document.documentElement.scrollTop;

      if (currentScrollPos === 0) {
        // At the top of the page
        this.menuBackgroundColor = 'transparent';
      } else {
        // Not at the top
        this.menuBackgroundColor = '#ffffff';
      }
    }
  },
};
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all .3s ease;
}

.slide-fade-leave-active {
  transition: all .1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-fade-enter,
.slide-fade-leave-to

/* .slide-fade-leave-active below version 2.1.8 */
  {
  transform: translateY(-10px);
  opacity: 0;
}

/* .nuxt-link-exact-active {
  color: rgb(250 204 21);
} */
</style>
