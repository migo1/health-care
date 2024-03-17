<template>
  <div class="container-fluid">
    <div class="pbmit-header-content d-flex justify-content-between align-items-center">
      <div class="d-flex justify-content-between align-items-center">
        <div class="site-navigation">
          <nav class="main-menu navbar-expand-xl navbar-light">
            <div class="navbar-header">
              <!-- Toggle Button -->
              <button
                class="navbar-toggler"
                type="button"
              >
                <i class="pbmit-base-icon-menu-1"></i>
              </button>
            </div>
            <div class="pbmit-mobile-menu-bg"></div>
            <div
              class="collapse navbar-collapse clearfix show"
              id="pbmit-menu"
            >
              <div class="pbmit-menu-wrap">
                <span class="closepanel">
                  <svg
                    class="qodef-svg--close qodef-m"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20.163"
                    height="20.163"
                    viewBox="0 0 26.163 26.163"
                  >
                    <rect
                      width="36"
                      height="1"
                      transform="translate(0.707) rotate(45)"
                    ></rect>
                    <rect
                      width="36"
                      height="1"
                      transform="translate(0 25.456) rotate(-45)"
                    ></rect>
                  </svg>
                </span>
                <ul class="navigation clearfix">
                  <li class="dropdown">
                    <NuxtLink to="/">Home</NuxtLink>
                  </li>
                  <li class="dropdown">
                    <a href="#">Services</a>
                    <ul>
                      <li>
                        <NuxtLink to="/services/chronic_care_management">Chronic Care </NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="/services/behavioral_in-home_care">In-Home Care</NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="/services/medication_management">Medication Management</NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="/services/remote_patient_monitoring">Remote Patient Monitoring</NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="/services/telemedicine_visits">Telemedicine Visits</NuxtLink>
                      </li>
                    </ul>
                  </li>
                  <li class="dropdown">
                    <NuxtLink to="/about_us">About us</NuxtLink>
                  </li>
                  <li class="dropdown">
                    <NuxtLink to="/book_appointment">Book Appointment</NuxtLink>
                  </li>
                  <li class="dropdown">
                    <NuxtLink to="/contact_us">Contact Us</NuxtLink>
                  </li>
                  <li class="">
                    <NuxtLink to="/faq">FAQ</NuxtLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <div class="pbmit-logo-menuarea d-flex align-items-center">
        <div class="site-branding">
          <h1 class="site-title">
            <NuxtLink to="/">
              <img
                class="pbmit-sticky-logo"
                src="/images/medical-logo.png"
                alt="Yoge"
              />
              <span class="logo-heaader">DC MEDICAL SYSTEM</span>
            </NuxtLink>
          </h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
onMounted(() => {
  $(".navbar-toggler,.closepanel").on("click", function () {
    jQuery("header").toggleClass("active");
  });
});
</script>

<style scoped>
.site-header .site-branding img {
  max-height: 90px;
}

.pbmit-sticky-logo {
  max-height: 90px;
}

.logo-heaader {
  font-size: 1.2rem;
  margin-left: 10px;
  color: #7c8187;
}

.router-link-active.router-link-exact-active {
  color: #7c8187;
}
</style>
