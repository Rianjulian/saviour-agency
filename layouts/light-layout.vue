<template>
    <div>
      <BaseNavbarLight class="z-30" />
      <Nuxt />
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
  };
  </script>

<style>
body{
  background: url('assets/images/bg-image.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center right;
}
</style>
  