<template>
  <div class="page-wrapper pbmit-bg-color-light">
    <!-- Header Main Area -->
    <header class="site-header header-style-2">
      <Navbar />
    </header>
    <!-- Header Main Area End Here -->
    <!-- page content -->
    <div class="page-content">
      <slot />
    </div>
    <!-- page content End -->
    <!-- footer -->
    <Footer />
    <!-- footer End -->
  </div>
</template>

<script setup lang="ts">
const route = useRoute();

useHead({
  meta: [
    {
      property: "og:dcmedicalsystem",
      content: `dcmedicalsystem - ${route.meta.title}`,
    },
  ],
});

useHead({
  script: [
    {
      src: "https://www.googletagmanager.com/gtag/js?id=G-ZBVQG6MT3P",
      // valid options are: 'head' | 'bodyClose' | 'bodyOpen'
      tagPosition: "bodyClose",
    },
  ],
});

</script>

<style>
a {
  transition: all 0.5s ease-out 0s;
  color: #031b4e;
  text-decoration: none;
}
</style>
