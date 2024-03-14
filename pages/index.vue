<template>
  <div class="page-wrapper pbmit-bg-color-light">
    <!-- Header Main Area -->
    <header class="site-header header-style-2">
      <Navbar />
      <div class="pbmit-slider-social">
        <a title="Facebook" href="#" target="_blank">
          <span><i class="pbmit-base-icon-facebook-f"></i></span>
        </a>
        <a title="Twitter" href="#" target="_blank">
          <span><i class="pbmit-base-icon-twitter-2"></i></span>
        </a>
        <a title="LinkedIn" href="#" target="_blank">
          <span><i class="pbmit-base-icon-linkedin-in"></i></span>
        </a>
        <a title="Instagram" href="#" target="_blank">
          <span><i class="pbmit-base-icon-instagram"></i></span>
        </a>
      </div>
     <HeroSlider />
    </header>
    <!-- Header Main Area End Here -->
    <!-- page content -->
    <div class="page-content">
      <BoxStart />
      <Marquee />
      <ServiceStart />
      <TabStart />
      <Testimonial />
    </div>
    <!-- page content End -->
    <!-- footer -->
    <Footer />
    <!-- footer End -->
  </div>
</template>

<script setup>
onMounted(() => {
  var swiperslider = $(".swiper-slider");
  var x = 1;
  swiperslider.each(function () {
    var carouselElement = $(this);
    var columns = $(this).data("columns");
    var loop = $(this).data("loop");
    var autoplay2 = $(this).data("autoplay");
    var autoplayspeed1 = $(this).data("autoplayspeed");
    var val_nav = $(this).data("arrows");
    var nav_arrow = $(this).data("arrows-class");
    var val_dots = $(this).data("dots");
    var val_center = $(this).data("center");
    var style = $(this).data("effect");
    var loopSlide = null;
    var sl_speed = 3000;

    carouselElement.addClass("pbmit-element-viewtype-carousel-" + x);

    if (columns === 1) {
      var responsive_items = [/* 1199 : */ columns, /* 991 : */ "1", /* 767 : */ "1", /* 575 : */ "1", /* 0 : */ "1"];
    } else if (columns === 2) {
      var responsive_items = [/* 1199 : */ columns, /* 991 : */ "2", /* 767 : */ "2", /* 575 : */ "2", /* 0 : */ "1"];
    } else if (columns === 3) {
      var responsive_items = [/* 1199 : */ columns, /* 991 : */ "2", /* 767 : */ "2", /* 575 : */ "1", /* 0 : */ "1"];
    } else if (columns === 3 || columns == 3.6) {
      var responsive_items = [/* 1199 : */ columns, /* 991 : */ "2.3", /* 767 : */ "2", /* 575 : */ "2", /* 0 : */ "1"];
    } else if (columns === 4) {
      var responsive_items = [/* 1199 : */ columns, /* 991 : */ "4", /* 767 : */ "3", /* 575 : */ "2", /* 0 : */ "1"];
    } else if (columns === 5) {
      var responsive_items = [/* 1199 : */ "5", /* 991 : */ "4", /* 767 : */ "3", /* 575 : */ "2", /* 0 : */ "1"];
    } else if (columns === 6) {
      var responsive_items = [/* 1199 : */ "6", /* 991 : */ "4", /* 767 : */ "3", /* 575 : */ "2", /* 0 : */ "1"];
    } else {
      var responsive_items = [/* 1199 : */ "3", /* 991 : */ "3", /* 767 : */ "2", /* 575 : */ "2", /* 0 : */ "1"];
    }

    if (val_dots === true) {
      carouselElement.append('<div class="swiper-pagination swiper-pagination"></div>');
    }

    if (val_nav === true) {
      if (!nav_arrow) {
        carouselElement.append('<div class="swiper-buttons"></div>');
        carouselElement.find(".swiper-buttons").append('<div class="swiper-button-next swiper-button-next-' + x + '"></div>');
        carouselElement.find(".swiper-buttons").append('<div class="swiper-button-prev swiper-button-prev-' + x + '"></div>');
      } else {
        $("." + nav_arrow).append('<div class="swiper-buttons"></div>');
        $("." + nav_arrow).append('<div class="swiper-button-next swiper-button-next-' + x + '"></div>');
        $("." + nav_arrow).append('<div class="swiper-button-prev swiper-button-prev-' + x + '"></div>');
      }
    }

    var pagination_val = false;
    if (val_dots === true) {
      if (carouselElement.hasClass("pbmit-sep-number")) {
        pagination_val = {
          el: ".swiper-pagination",
          type: "fraction",
        };
      } else {
        pagination_val = {
          el: ".swiper-pagination",
          clickable: true,
        };
      }
    }
    var navigation_val = false;
    if (val_nav === true) {
      navigation_val = {
        nextEl: ".swiper-button-next-" + x,
        prevEl: ".swiper-button-prev-" + x,
      };
    }

    if (!style) {
      style = "slide";
    }

    var margin_val = 30;
    if ($(carouselElement).data("margin") !== "" || $(carouselElement).data("margin") === "0") {
      margin_val = $(carouselElement).data("margin");
    }

    if (carouselElement.hasClass("marquee")) {
      var reverse_direction = $(this).data("reverse");
      if (!reverse_direction) reverse_direction = false;
      var swiper2 = new Swiper(".pbmit-element-viewtype-carousel-" + x, {
        spaceBetween: 0,
        centeredSlides: true,
        speed: 10000,
        autoplay: {
          delay: 1,
          disableOnInteraction: true,
          reverseDirection: reverse_direction,
        },
        loop: true,
        slidesPerView: "auto",
        allowTouchMove: false,
        disableOnInteraction: true,
      });
    } else {
      var swiper = new Swiper(".pbmit-element-viewtype-carousel-" + x, {
        loop: loop,
        navigation: navigation_val,
        pagination: pagination_val,
        slidesPerView: columns,
        spaceBetween: margin_val,
        loopedSlides: loopSlide,
        autoplay: autoplay2,
        effect: style,
        speed: sl_speed,
        grabCursor: false,
        centeredSlides: val_center,
        breakpoints: {
          1199: {
            slidesPerView: responsive_items[0],
          },
          991: {
            slidesPerView: responsive_items[1],
          },
          767: {
            slidesPerView: responsive_items[2],
          },
          575: {
            slidesPerView: responsive_items[3],
          },
          0: {
            slidesPerView: responsive_items[4],
          },
        },
      });
    }
    x = x + 1;
  });
});
</script>
<style></style>
