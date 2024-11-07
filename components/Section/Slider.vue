<template>
  <div>
    <div class="w-full bg-white flex justify-center">
      <div class="hidden lg:block font-OpenSans container pt-20">
        <div class="flex flex-col items-center justify-center">
          <div class="flex flex-col bg-white mt-8 items-center justify-items-center w-full gap-y-5">
            <div class="w-full">
              <vueper-slides class="no-shadow " :visible-slides="1" :bullets="true" :arrows="false"
                :arrows-outside="false" :slide-ratio="1 / 2" fixed-height="650px">
                <vueper-slide v-for="(item, i) in banner" :id="`slide-${i}`" :key="i">
                  <template #content>
                    <div class="vueperslide__content-wrapper" style="flex-direction: row;">
                      <div class="w-full bg-white h-full rounded-2xl">
                        <div class="h-fit flex justify-center">
                          <img class="block object-contain w-full h-full" :src="getImageUrl(item.attributes.formats.large.url)"
                            :alt="item.attributes.alternativeText || 'slide'" />
                          <!-- <h1>{{ item.attributes.name}}</h1> -->
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
    props: {
      banner: {
        default: () => [],
        type: Array,
      },
    },
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
        // banner: [
        //   "banner.png",
        //   "banner-2.png",
        // ],
        // images_partner: [
        //   "images/partner/canon.png",
        //   "images/partner/dell.png",
        //   "images/partner/epson.png",
        //   "images/partner/adobe.png",
        //   "images/partner/apc.png",
        //   "images/partner/acer.png",
        //   "images/partner/asus.png",
        //   "images/partner/aruba.png",
        //   "images/partner/asustor.png",
        //   "images/partner/benq.png",
        //   "images/partner/brother.png",
        //   "images/partner/cisco.png",
        //   "images/partner/fargo.png",
        //   "images/partner/fujifilm.png",
        //   "images/partner/honeywell.png",
        //   "images/partner/ibm.png",
        //   "images/partner/nutanix.png",
        //   "images/partner/panduit.png",
        //   "images/partner/sophos.png",
        // ],
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
