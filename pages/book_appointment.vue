<template>
  <div class="book-app-container">
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
      <div v-if="showNotification" class="book-mail-notification">
        <p>your appointment has been submitted succesfully !</p>
      </div>
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
          <form @submit.prevent="submitForm">
            <div class="row">
              <div class="col-md-6">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Your Name *"
                  name="name"
                  v-model="name"
                  required
                />
              </div>
              <div class="col-md-6">
                <input
                  type="email"
                  class="form-control"
                  placeholder="Your Email *"
                  name="email"
                  v-model="email"
                  required
                />
              </div>
              <div class="col-md-6">
                <input
                  type="tel"
                  class="form-control"
                  placeholder="Your Phone *"
                  name="phone"
                  v-model="phone"
                  required
                />
              </div>
              <div class="col-md-6">
                <input
                  class="form-control wpcf7-form-control wpcf7-date wpcf7-validates-as-date"
                  aria-invalid="false"
                  type="date"
                  name="date"
                  v-model="date"
                  required
                />
              </div>

              <div class="col-md-12">
                <textarea
                  v-model="message"
                  name="message"
                  cols="40"
                  rows="10"
                  class="form-control"
                  placeholder="Type Appointment Note...."
                  required
                ></textarea>
              </div>
              <div class="col-md-12">
                <button
                  @click="submitForm"
                  class="pbmit-btn"
                  :class="{ clicked: isSubmitting }"
                >
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
const name = ref("");
const email = ref("");
const phone = ref("");
const date = ref("");
const message = ref("");
const isSubmitting = ref(false);
const showNotification = ref(false);

const mail = useMail();

const submitForm = async () => {
  if (isSubmitting.value) return;

  // Check if any form field is empty
  if (
    !name.value ||
    !email.value ||
    !phone.value ||
    !date.value ||
    !message.value
  ) {
    // Display an error message or take appropriate action
    return;
  }

  isSubmitting.value = true;

  const formData = {
    name: name.value,
    email: email.value,
    phone: phone.value,
    date: date.value,
    message: message.value,
  };

  const submitButton = document.querySelector(".pbmit-btn .pbmit-button-text");
  if (submitButton) {
    submitButton.textContent = "Submitting .......";
  }

  await new Promise((resolve) => setTimeout(resolve, 2000));

  mail.send({
    subject: "Appointment Booking",
    html: `<h1>Appointment Booking</h1>
          <p>Name: ${formData.name}</p>
          <p>Email: ${formData.email}</p>
          <p>Phone: ${formData.phone}</p>
          <p>Date: ${formData.date}</p>
          <p>Message: ${formData.message}</p>`,
  });

  name.value = "";
  email.value = "";
  phone.value = "";
  date.value = "";
  message.value = "";

    showNotification.value = true; // Show notification after submission

  setTimeout(() => {
    showNotification.value = false; // Hide notification after 2 seconds
  }, 2000);


  if (submitButton) {
    submitButton.textContent = "Submit Now";
  }

  isSubmitting.value = false;
};

definePageMeta({
  layout: "main",
});
</script>

<style>
.pbmit-btn.clicked {
  background-color: #6e778c;
  cursor: not-allowed;
  /* color: black; */
}

.section-xl {
  position: relative;
}

.book-mail-notification {
  background-color: #000;
  color: #fff;
  padding: 10px;
  text-align: center;
  right: 13px;
  height: 45px;
  position: absolute;
  z-index: 100;
  padding: 11px 19px;
  border-radius: 10px;
}


</style>
