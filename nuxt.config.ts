// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/bootstrap.min.css", "~/assets/css/fontawesome.css", "~/assets/css/flaticon.css", "~/assets/css/pbminfotech-base-icons.css", "~/assets/css/themify-icons.css", "~/assets/css/swiper.min.css", "~/assets/css/magnific-popup.css", "~/assets/css/aos.css", "~/assets/css/shortcode.css", "~/assets/css/base.css", "~/assets/css/style.css", "~/assets/css/responsive.css"],
  plugins: [{ src: "~/plugins/jquery", mode: "client" }],

  app: {
    head: {
      title: "dcmedicalsystem",
      link: [{ rel: "icon", type: "image/x-icon", href: "/images/dc_logo.png" }],
      script: [
        { src: "/js/jquery.min.js", tagPosition: "bodyClose" },
        { src: "/js/popper.min.js", tagPosition: "bodyClose" },
        { src: "/js/bootstrap.min.js", tagPosition: "bodyClose" },
        { src: "/js/jquery.waypoints.min.js", tagPosition: "bodyClose" },
        { src: "/js/jquery.appear.js", tagPosition: "bodyClose" },
        { src: "/js/numinate.min.js", tagPosition: "bodyClose" },
        { src: "/js/swiper.min.js", tagPosition: "bodyClose" },
        { src: "/js/jquery.magnific-popup.min.js", tagPosition: "bodyClose" },
        { src: "/js/circle-progress.js", tagPosition: "bodyClose" },
        { src: "/js/jquery.countdown.min.js", tagPosition: "bodyClose" },
        { src: "/js/aos.js", tagPosition: "bodyClose" },
        { src: "/js/gsap.js", tagPosition: "bodyClose" },
        { src: "/js/ScrollTrigger.js", tagPosition: "bodyClose" },
        { src: "/js/SplitText.js", tagPosition: "bodyClose" },
        { src: "/js/magnetic.js", tagPosition: "bodyClose" },
        { src: "/js/gsap-animation.js", tagPosition: "bodyClose" },
        { src: "/js/scripts.js", tagPosition: "bodyClose" },
      ],
    },
  },

  modules: ["@nuxtjs/seo"],
  site: {
    url: 'https://www.dcmedicalsystem.com',
    name: 'dcmedicalsystem',
    description: 'dc medical system healthcare',
    defaultLocale: 'en',
  }
});