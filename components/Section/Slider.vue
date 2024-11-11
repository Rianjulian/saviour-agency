<template>
  <div>
    <div class="w-full bg-white flex justify-center">
      <div class="hidden lg:block font-OpenSans container pt-20">
        <div class="flex flex-col items-center justify-center">
          <div class="flex flex-col bg-white mt-8 items-center justify-items-center w-full gap-y-5">
            <div class="w-full">
              <vueper-slides class="no-shadow" :visible-slides="1" :bullets="true" :arrows="false"
                :arrows-outside="false" :slide-ratio="1 / 2" fixed-height="650px">
                
                <vueper-slide v-for="(item, i) in banner" :id="`slide-${i}`" :key="i">
                  <template #content>
                    <div class="vueperslide__content-wrapper" style="flex-direction: row;">
                      <div class="w-full bg-white h-full rounded-2xl">
                        <div class="h-fit flex justify-center">
                          <!-- Display main image if available, otherwise display fallback -->
                          <!-- <img v-if="item.attributes?.formats?.large?.url"
                               class="block object-contain w-full h-full"
                               :src="getImageUrl(item.attributes.formats.large.url)"
                               :alt="item.attributes.alternativeText || 'slide'" /> -->
                          
                          <img
                               class="block object-contain w-full h-full"
                               :src="require('@/assets/' + item)"
                               alt="Fallback slide" />
                        </div>
                      </div>
                    </div>
                  </template>
                </vueper-slide>

              </vueper-slides>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
  import {
    VueperSlides,
    VueperSlide
  }
  from 'vueperslides'
  import 'vueperslides/dist/vueperslides.css'

  export default {
    components: {
      VueperSlides,
      VueperSlide
    },
    // props: {
    //   banner: {
    //     default: () => [],
    //     type: Array,
    //   },
    // },
    methods: {
      getImageUrl(url) {
        const baseUrl = process.env.BASE_URL || 'http://localhost:1337'; // Replace with your actual base URL
        return `${baseUrl}${url}`;
      }
    },
    data() {
      return {
        toggle_menu: false,
        menu_lang: null,
        readMore: false,
        word: null,
        fallbackImage: require('@/assets/images/banner.png'),
        banner: [
          "images/banner.png",
        ],
      };
    },
  };

</script>

<style>
  .vueperslides__arrow svg {
    color: #000000;
    stroke-width: 2px;
    width: 50px;
  }

</style>

<style scoped>
  @media (min-width: 320px) and (max-width: 767px) {
    .no-shadow>>>.vueperslides__arrow {
      background: rgb(255, 255, 255);
      background: linear-gradient(90deg, rgb(245, 245, 245, 0) 0%, rgb(245, 245, 245, 0.3) 20%, rgb(245, 245, 245) 70%);
      height: 100%;
      right: -2px !important;
      width: 12%;
      /* opacity: 1; */
    }
  }

  .no-shadow>>>.vueperslides__arrow--prev {
    display: none;
  }

</style>
