<template>
  <div>
    <div class="pbmit-title-bar-wrapper">
      <div class="container">
        <div class="pbmit-title-bar-content">
          <div class="pbmit-title-bar-content-inner">
            <div class="pbmit-tbar">
              <div class="pbmit-tbar-inner container">
                <h1 class="pbmit-tbar-title">Book Appointment</h1>
              </div>
            </div>
            <div class="pbmit-breadcrumb">
              <div class="pbmit-breadcrumb-inner">
                <span>
                  <a title="" href="#" class="home"><span>DC Medical</span></a>
                </span>
                /
                <span
                  ><span class="post-root post post-post current-item">
                    Book Appointment</span
                  ></span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section class="section-xl">
      <div class="container">
        <div class="pbmit-heading-subheading text-center">
          <h4 class="pbmit-subtitle">With Access To</h4>
          <h2 class="pbmit-title">24 Hour Emergency</h2>
          <div class="pbmit-heading-desc">
            Our clinic is equipped with modern facilities and advanced medical
            technology to ensure accurate diagnoses <br />
            and effective treatments. This enables us to provide you with the
            highest standard of care.
          </div>
        </div>
        <div class="appointment_box">
          <h4 class="text-center mb-3">Make An Appointment</h4>
          <form>
            <div class="row">
              <div class="col-md-6">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Your Name *"
                  name="name"
                  required
                />
              </div>
              <div class="col-md-6">
                <input
                  type="email"
                  class="form-control"
                  placeholder="Your Email *"
                  name="email"
                  required
                />
              </div>
              <div class="col-md-6">
                <input
                  type="tel"
                  class="form-control"
                  placeholder="Your Phone *"
                  name="phone"
                  required
                />
              </div>
              <div class="col-md-6">
                <input
                  class="form-control wpcf7-form-control wpcf7-date wpcf7-validates-as-date"
                  aria-invalid="false"
                  value="2024-02-23"
                  type="date"
                  name="date-123"
                />
              </div>
              <!-- <div class="col-md-6">
                <select
                  class="form-select form-control"
                  aria-label="Default select example"
                >
                  <option value="Choose Department">Choose Department</option>
                  <option value="Cardiology">Cardiology</option>
                  <option value="Dental Care">Dental Care</option>
                  <option value="Ophthalmology">Ophthalmology</option>
                  <option value="Gastrologist">Gastrologist</option>
                </select>
              </div>
              <div class="col-md-6">
                <select
                  class="form-select form-control"
                  aria-label="Default select example"
                >
                  <option value="Choose Doctor">Choose Doctor</option>
                  <option value="Jordan Peele">Jordan Peele</option>
                  <option value="Norton Berry">Norton Berry</option>
                  <option value="Clare Smyth">Clare Smyth</option>
                  <option value="Jamie Oliver">Jamie Oliver</option>
                  <option value="Carla Hall">Carla Hall</option>
                </select>
              </div> -->
              <div class="col-md-12">
                <textarea
                  name="message"
                  cols="40"
                  rows="10"
                  class="form-control"
                  placeholder="Type Appointment Note...."
                  required
                ></textarea>
              </div>
              <div class="col-md-12">
                <button class="pbmit-btn">
                  <span class="pbmit-button-text">Submit Now</span>
                  <span class="pbmit-button-icon-wrapper">
                    <span class="pbmit-button-icon">
                      <i class="pbmit-base-icon-black-arrow-1"></i>
                    </span>
                  </span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "main",
});
</script>

<style></style>
