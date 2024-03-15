<template>
  <div>
    <div class="pbmit-title-bar-wrapper">
      <div class="container">
        <div class="pbmit-title-bar-content">
          <div class="pbmit-title-bar-content-inner">
            <div class="pbmit-tbar">
              <div class="pbmit-tbar-inner container">
                <h1 class="pbmit-tbar-title">About Us</h1>
              </div>
            </div>
            <div class="pbmit-breadcrumb">
              <div class="pbmit-breadcrumb-inner">
                <span>
                  <a
                    title=""
                    href="#"
                    class="home"
                    ><span>DC Medical</span></a
                  >
                </span>
                <span class="sep"> / </span>
                <span><span class="post-root post post-post current-item">About Us</span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container pbmit-heading animation-style2 about-us-txt">
      <h1 class="pbmit-title mb-3">Delivering world class House Call care</h1>
      <p class="about-explanation">A house call involves a healthcare provider, such as a doctor or other medical professional, visiting a patient at their residence to offer medical assistance. This service is particularly advantageous for individuals facing challenges in reaching traditional medical facilities, including those with disabilities, the elderly, or those too unwell to venture outside their homes.</p>
      <p class="about-explanation">Our house call home care service offers personalized and convenient healthcare. By opting for our service, you can bypass crowded waiting areas and lengthy journeys by having our team of experts bring the medical facility to your doorstep, guaranteeing comfort and safety.</p>
    </div>
    <section class="section-xl">
      <div class="container">
        <div class="pbmit-heading-subheading text-center">
          <h4 class="pbmit-subtitle">Process</h4>
          <h2 class="pbmit-title">
            Our House Call <br />
            Process
          </h2>
        </div>
        <div
          class="swiper-slider"
          data-loop="true"
          data-autoplay="false"
          data-dots="false"
          data-arrows="false"
          data-columns="4"
          data-margin="30"
          data-effect="slide"
        >
          <div class="swiper-wrapper">
            <!-- Slide1 -->
            <article class="pbmit-miconheading-style-18 swiper-slide">
              <div class="pbmit-ihbox-style-18">
                <div class="pbmit-ihbox-headingicon">
                  <div class="pbmit-icon-wrap">
                    <div class="pbmit-ihbox-wrapper">
                      <div class="pbmit-ihbox-icon-type-image">
                        <img
                          src="/images/homepage-3/process-img-01.jpg"
                          alt="Enrollment Information"
                        />
                      </div>
                    </div>
                    <div class="pbmit-ihbox-box-number">01</div>
                  </div>
                  <div class="pbmit-ihbox-contents">
                    <h2 class="pbmit-element-title">Enrollment Information</h2>
                    <div class="pbmit-heading-desc">Our scheduling department will confirm the visit details a day in advance, ensuring promptness and readiness for the initial in-home visit, aiming to deliver a personalized and comprehensive healthcare experience.</div>
                  </div>
                </div>
              </div>
            </article>
            <!-- Slide2 -->
            <article class="pbmit-miconheading-style-18 swiper-slide">
              <div class="pbmit-ihbox-style-18">
                <div class="pbmit-ihbox-headingicon">
                  <div class="pbmit-icon-wrap">
                    <div class="pbmit-ihbox-wrapper">
                      <div class="pbmit-ihbox-icon-type-image">
                        <img
                          src="/images/homepage-3/process-img-02.jpg"
                          alt="Insurance Validation and Patient Consent"
                        />
                      </div>
                    </div>
                    <div class="pbmit-ihbox-box-number">02</div>
                  </div>
                  <div class="pbmit-ihbox-contents">
                    <h2 class="pbmit-element-title">Insurance Validation and Patient Consent</h2>
                    <div class="pbmit-heading-desc">Our intake department will directly contact you on acceptance of your insuarance coverage</div>
                  </div>
                </div>
              </div>
            </article>
            <!-- Slide3 -->
            <article class="pbmit-miconheading-style-18 swiper-slide">
              <div class="pbmit-ihbox-style-18">
                <div class="pbmit-ihbox-headingicon">
                  <div class="pbmit-icon-wrap">
                    <div class="pbmit-ihbox-wrapper">
                      <div class="pbmit-ihbox-icon-type-image">
                        <img
                          src="/images/homepage-3/process-img-03.jpg"
                          alt="Setting up the First Visit"
                        />
                      </div>
                    </div>
                    <div class="pbmit-ihbox-box-number">03</div>
                  </div>
                  <div class="pbmit-ihbox-contents">
                    <h2 class="pbmit-element-title">Setting up the First Visit</h2>
                    <div class="pbmit-heading-desc">our team closely working with you to find a reasonable time for them to provide a planned visit to your residence. As a medical organization, we fully understand the significance of flexibility</div>
                  </div>
                </div>
              </div>
            </article>
            <!-- Slide4 -->
            <article class="pbmit-miconheading-style-18 swiper-slide">
              <div class="pbmit-ihbox-style-18">
                <div class="pbmit-ihbox-headingicon">
                  <div class="pbmit-icon-wrap">
                    <div class="pbmit-ihbox-wrapper">
                      <div class="pbmit-ihbox-icon-type-image">
                        <img
                          src="/images/homepage-3/process-img-04.jpg"
                          alt="Confirmation of the Visit"
                        />
                      </div>
                    </div>
                    <div class="pbmit-ihbox-box-number">04</div>
                  </div>
                  <div class="pbmit-ihbox-contents">
                    <h2 class="pbmit-element-title">Confirmation of the Visit</h2>
                    <div class="pbmit-heading-desc">A day before the planned visit, our scheduling department will contact you directly to confirm the agreed location and time for the visit.</div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
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

definePageMeta({
  layout: "main",
});
</script>

<style>
.about-us-txt {
  text-align: center;
  font-size: 1.3rem;
}

.container.pbmit-heading.animation-style2.about-us-txt {
  padding-top: 100px;
}
</style>
