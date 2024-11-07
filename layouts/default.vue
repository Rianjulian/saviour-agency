<template>
  <div>
    <BaseNavbar class="z-30" />
    <Nuxt />
    <BaseFooter />
  </div>
</template>

<script>
export default {
  head() {
    return {
      titleTemplate: "%s - Saviour Agency",
    };
  },
};
</script>

<style>
.rc-anchor-normal-footer {
  display: none !important;
}

.grecaptcha-badge {
  visibility: hidden;
}
</style>
