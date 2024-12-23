<template>
  <div>
    <div class="w-full bg-white flex justify-center">
      <div class="hidden lg:block font-OpenSans container pt-20">
        <div class="flex flex-col items-center justify-center">
          <div class="flex flex-col bg-white mt-8 items-center justify-items-center w-full gap-y-5">
            <div class="w-full">
              <vueper-slides autoplay
                class="no-shadow"
                :visible-slides="1"
                :bullets="true"
                :arrows="true"
                :arrows-outside="false"
                :slide-ratio="16 / 9"
                fixed-height="850px"
              >
                <!-- Render each banner item -->
                <vueper-slide v-for="(item, i) in banner" :id="`slide-${i}`" :key="i">
                  <template #content>
                    <div class="vueperslide__content-wrapper" style="flex-direction: row;">
                      <div class="w-full bg-white h-full rounded-2xl">
                        <div class="h-fit flex justify-center">
                          <!-- Wrap the image in a clickable link -->
                          <a
                            :href="item.link"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="w-full h-full"
                          >
                            <img
                              v-if="item.images?.[0]?.url"
                              class="block object-cover w-full h-full"
                              :src="getImageUrl(item.images[0].url)"
                              :alt="item.images[0].name || 'Banner Image'"
                            />
                          </a>
                          <!-- Fallback image with no link -->
                          <!-- <img
                            v-else
                            class="block object-cover w-full h-full"
                            :src="fallbackImage"
                            alt="Fallback Banner"
                          /> -->
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
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";

export default {
  components: {
    VueperSlides,
    VueperSlide,
  },
  props: {
    banner: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      fallbackImage: require("@/assets/images/banner.png"),
    };
  },
  methods: {
    /**
     * Construct the full URL for the image using the base URL.
     * @param {string} url - The relative URL of the image.
     * @returns {string} - The full image URL.
     */
    getImageUrl(url) {
      const baseUrl = process.env.BASE_URL || "http://localhost:1337"; // Update with your actual base URL
      return `${baseUrl}${url}`;
    },
  },
};
</script>

<style>
.vueperslides__arrow svg {
  color: #000000;
  stroke-width: 2px;
  width: 50px;
}

/* Yellow bullet styles */
.vueperslides__bullets {
  display: flex;
  justify-content: center;
  gap: 5px;
}
.vueperslides__bullet {
  background-color: #ffd700 !important; /* Yellow color */
  border: none;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  cursor: pointer;
}
.vueperslides__bullet--active {
  background-color: #ffa500 !important; /* Slightly darker yellow for active bullet */
}
</style>

<style scoped>
@media (min-width: 320px) and (max-width: 767px) {
  .no-shadow >>> .vueperslides__arrow {
    background: linear-gradient(
      90deg,
      rgba(245, 245, 245, 0) 0%,
      rgba(245, 245, 245, 0.3) 20%,
      rgb(245, 245, 245) 70%
    );
    height: 100%;
    right: -2px !important;
    width: 12%;
  }
}
.no-shadow >>> .vueperslides__arrow--prev {
  display: none;
}
</style>
