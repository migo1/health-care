<template>
  <div class="container-fluid">
    <div class="pbmit-header-content d-flex justify-content-between align-items-center">
      <div class="d-flex justify-content-between align-items-center">
        <div class="site-navigation">
          <nav class="main-menu navbar-expand-xl navbar-light">
            <div class="navbar-header">
              <!-- Toggle Button -->
              <button class="navbar-toggler" type="button">
                <i class="pbmit-base-icon-menu-1"></i>
              </button>
            </div>
            <div class="pbmit-mobile-menu-bg"></div>
            <div class="collapse navbar-collapse clearfix show" id="pbmit-menu">
              <div class="pbmit-menu-wrap">
                <span class="closepanel">
                  <svg class="qodef-svg--close qodef-m" xmlns="http://www.w3.org/2000/svg" width="20.163"
                    height="20.163" viewBox="0 0 26.163 26.163">
                    <rect width="36" height="1" transform="translate(0.707) rotate(45)"></rect>
                    <rect width="36" height="1" transform="translate(0 25.456) rotate(-45)"></rect>
                  </svg>
                </span>
                <ul class="navigation clearfix">
                  <li class="dropdown">
                    <a href="index.html">Home</a>

                  </li>
                  <li class="dropdown">
                    <a href="#">Our Team</a>
                  </li>
                  <li class="dropdown">
                    <a href="#">Services</a>
                    <ul>
                      <li>
                        <a href="service-details.html">Dental Care</a>
                      </li>
                      <li>
                        <a href="service-details.html">Pharmacology</a>
                      </li>
                      <li>
                        <a href="service-details.html">Orthopedic</a>
                      </li>
                      <li>
                        <a href="service-details.html">Plastic Surgery</a>
                      </li>
                      <li>
                        <a href="service-details.html">Hametology</a>
                      </li>
                    </ul>
                  </li>
                  <li class="dropdown">
                    <a href="#">About us</a>

                  </li>
                  <li class="dropdown">
                    <a href="#">Book Appointment</a>

                  </li>
                  <li><a href="contact-us.html">Contact Us</a></li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <div class="pbmit-logo-menuarea d-flex align-items-center">
        <div class="site-branding">
          <h1 class="site-title">
            <a href="index.html">

              <img class="pbmit-sticky-logo" src="/images/medical-logo.png" alt="Yoge" />
              <span class="logo-heaader">DC MEDICAL SYSTEM</span>
            </a>
          </h1>
        </div>
      </div>

    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>
.site-header .site-branding img {
  max-height: 90px;
}

.logo-heaader {
  font-size: 1.2rem;
  margin-left: 10px;
  color: #7C8187;
}
</style>