<template>
    <div>
        <BaseNavbar class="z-30" />
        <nuxt v-if="scriptLoaded"/>
        <!-- <BaseFooter /> -->
    </div>
</template>
  
<script>
export default {
    head() {
        return {
            titleTemplate: "%s - Saviour Agency",
        };
    },
    data() {
        return {
            scriptLoaded: false,
            siteKey: process.env.VUE_APP_RECAPTCHA_SITE_KEY,
        };
    },
    mounted() {
    // Create a script element and append it to the document's head
    const script = document.createElement('script');
    script.src = `https://www.google.com/recaptcha/api.js?render=${this.siteKey}`;
    script.async = true;
    script.defer = true;

    script.onload = () => {
      this.scriptLoaded = true;
    };

    document.head.appendChild(script);
  }
};
</script>
  