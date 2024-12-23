<template>
  <div>
    <!-- <SectionHome :hero="hero" @scroll="scrollToPengantar" ref="home" /> -->
    <!-- <BaseNavbar @scroll-to-section="scrollToSection" class="z-30"/> -->
    <SectionSlider :banner="banner" />
    <SectionValue ref="value" />
    <SectionAbout ref="about" />
    <SectionService ref="service" />
    <SectionTestimonial ref="testimonial" />
    <SectionBanner ref="banner" />
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Home",
    };
  },
  data() {
    return {
      banner: [],
      modal: false,
      hoverButton: false,
    };
  },
  mounted() {
    this.getData()
  },
  computed: {
    lang() {
      return this.$store.getters["getLang"];
    },
  },
  methods: {
    async getData() {
      try {
        const response = await this.$axios.$get('/banners?populate=*');
        this.banner = response.data.map(item => ({
          id: item.id,
          link: item.attributes.link,
          images: item.attributes.bannerSlider.data.map(image => ({
            id: image.id,
            name: image.attributes.name,
            url: image.attributes.formats.large?.url || image.attributes.url,
          })),
        }));
        console.log(this.banner);
      } catch (error) {
        console.error('Error fetching banner data:', error);
      }
    },
    scrollToSection(section) {
      const sectionEl = this.$refs[section];
      if (sectionEl) {
        // Scroll to the section smoothly
        sectionEl.$el.scrollIntoView({ behavior: 'smooth' });
      }
    },
  },
  name: "IndexPage",
};
</script>
