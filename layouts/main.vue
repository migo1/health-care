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
const route = useRoute()

useHead({
  meta: [{ property: 'og:dcmedicalsystem', content: `dcmedicalsystem - ${route.meta.title}` }]
})
</script>


<style></style>
