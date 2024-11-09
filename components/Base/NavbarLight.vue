<template>
  <div class="w-full group absolute text-[#082D54] flex items-center z-10">
    <div class="hidden w-full relative text-[#082D54] lg:flex items-center py-4">
      <div class="w-full h-full group-hover:bg-gradient-to-b group-hover:to-transparent absolute" :class="[color]">
        <div class="h-full w-full relative">
          <div class="absolute bottom-0 group-hover:blur-lg w-full h-1/4"></div>
        </div>
      </div>
      <div class="w-full z-10 relative h-full px-20 py-8 flex items-center justify-between">
        <div class="flex flex-col items-center justify-center">
          <nuxt-link to="/">
            <div class="w-24 flex justify-center items-center">
              <!-- <img src="~assets/images/airmas-blue-logo.svg" /> -->
            </div>
          </nuxt-link>
        </div>
        <div class="flex items-center lg:gap-x-10">
          <div
            class="h-fit font-OpenSans font-medium tracking-wide hover:text-yellow-400 hover:underline cursor-pointer hover:opacity-80 select-none text-lg"
            v-for="(tab, link, index) in navbar.data" :key="index" :value="link" :exact="true">
            <nuxt-link :to="tab.link">
              {{ tab.text }}
            </nuxt-link>
          </div>
          <!-- <div><InputLang/></div> -->
        </div>
      </div>
    </div>

    <!-- Mobile and Tab View -->
    <div class="block lg:hidden w-full fixed top-0 bg-white z-50">
      <div class="absolute right-0 z-10">
        <div class="h-[14vh] w-[14vh] flex pl-12 items-center">
          <img v-if="!toggle_menu" @click="toggle_menu = true" src="~assets/icons/hamburger-black.svg"
            class="h-[4vh] w-[4vh] hover:opacity-70" />
          <img v-else @click="toggle_menu = false" src="~assets/icons/times_black.svg"
            class="h-[5vh] w-[5vh] hover:opacity-70" />
        </div>
      </div>
      <div class="w-full flex justify-start px-5 md:px-10 py-3">
        <nuxt-link to="/">
          <!-- <img src="~assets/images/airmas-blue-logo.svg" class="h-[11vh] w-[11vh]" :alt="navbar.logo_text" /> -->
        </nuxt-link>
      </div>
      <transition name="slide-fade">
        <div v-if="toggle_menu" class="w-full flex flex-col space-y-8 bg-[#ffffff] h-[86vh] p-6 text-[#082D54] fixed">
          <!-- <div class="w-[5.3rem]"><InputLang /></div> -->
          <nuxt-link @click.native="toggle_menu = false" class="font-OpenSans text-2xl" :to="tab.link"
            v-for="(tab, link, index) in navbar.data" :key="index" :value="link" :exact="true">
            {{ tab.text }}
          </nuxt-link>
        </div>
      </transition>
    </div>
  </div>
</template>
  
<script>
import lang from "~/static/lang.json";

export default {
  props: {
    color: {
      default: "group-hover:from-[#ffffff]",
      type: String,
    },
  },
  data() {
    return {
      navbar: {},
      toggle_menu: false,
      menu_lang: null,
    };
  },
  computed: {
    lang() {
      return this.$store.getters["getLang"];
    },
  },
  created() {
    this.menu_lang = lang;
  },
  mounted() {
    // this.getData()
    // window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    // async getData() {
    //   const data = await this.$axios.$get('/navbar?lang=id')
    //   this.navbar = data.data
    // },
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
  transform: translateX(-10px);
  opacity: 0;
}

.nuxt-link-exact-active {
  color: rgb(250 204 21);
}
</style>
  