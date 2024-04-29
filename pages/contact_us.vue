<template>
  <div>
    <div class="pbmit-title-bar-wrapper">
      <div class="container">
        <div class="pbmit-title-bar-content">
          <div class="pbmit-title-bar-content-inner">
            <div class="pbmit-tbar">
              <div class="pbmit-tbar-inner container">
                <h1 class="pbmit-tbar-title">Contact Us</h1>
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
                    Contact Us</span
                  ></span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="page-content contact_us">
      <!-- Ihbox -->
      <section class="section-xl">
        <div class="container">
          <div class="row">
            <div class="col-md-6 col-xl-4">
              <div class="pbmit-ihbox-style-15">
                <div class="pbmit-ihbox-box">
                  <div class="pbmit-icon-wrap d-flex align-items-center">
                    <div class="pbmit-ihbox-icon">
                      <div class="pbmit-ihbox-icon-wrapper">
                        <div class="pbmit-icon-wrapper pbmit-icon-type-icon">
                          <i
                            class="pbmit-xcare-icon pbmit-xcare-icon-email"
                          ></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h2 class="pbmit-element-title">Mail us 24/7</h2>
                  <div class="pbmit-content-wrapper">
                    <div class="pbmit-heading-desc">
                      no-reply@dcmedical.com <br />
                      no-reply@dcmedcal.com
                    </div>
                  </div>
                </div>
                <div class="pbmit-ihbox-btn">
                  <a href="#">
                    <span class="pbmit-button-text">Read More</span>
                    <span class="pbmit-button-icon-wrapper">
                      <span class="pbmit-button-icon">
                        <i class="pbmit-base-icon-black-arrow-1"></i>
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-xl-4">
              <div class="pbmit-ihbox-style-15">
                <div class="pbmit-ihbox-box">
                  <div class="pbmit-icon-wrap d-flex align-items-center">
                    <div class="pbmit-ihbox-icon">
                      <div class="pbmit-ihbox-icon-wrapper">
                        <div class="pbmit-icon-wrapper pbmit-icon-type-icon">
                          <i
                            class="pbmit-xcare-icon pbmit-xcare-icon-phone-call"
                          ></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h2 class="pbmit-element-title">Call us 24/7</h2>
                  <div class="pbmit-content-wrapper">
                    <div class="pbmit-heading-desc">
                      Phone : 1-202- 361-9660 <br />
                      Mobile : 1-202- 361-9660
                    </div>
                  </div>
                </div>
                <div class="pbmit-ihbox-btn">
                  <a href="#">
                    <span class="pbmit-button-text">Read More</span>
                    <span class="pbmit-button-icon-wrapper">
                      <span class="pbmit-button-icon">
                        <i class="pbmit-base-icon-black-arrow-1"></i>
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-md-12 col-xl-4">
              <div class="pbmit-ihbox-style-15">
                <div class="pbmit-ihbox-box">
                  <div class="pbmit-icon-wrap d-flex align-items-center">
                    <div class="pbmit-ihbox-icon">
                      <div class="pbmit-ihbox-icon-wrapper">
                        <div class="pbmit-icon-wrapper pbmit-icon-type-icon">
                          <i
                            class="pbmit-xcare-icon pbmit-xcare-icon-placeholder"
                          ></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h2 class="pbmit-element-title">Our Locations</h2>
                  <div class="pbmit-content-wrapper">
                    <div class="pbmit-heading-desc">
                      1746 V ST NW Washington DC <br />
                      20009, United States.
                    </div>
                  </div>
                </div>
                <div class="pbmit-ihbox-btn">
                  <a href="#">
                    <span class="pbmit-button-text">Read More</span>
                    <span class="pbmit-button-icon-wrapper">
                      <span class="pbmit-button-icon">
                        <i class="pbmit-base-icon-black-arrow-1"></i>
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- Ihbox End -->

      <!-- Contact Form -->
      <section class="space-bottom">
        <div v-if="showNotification" class="book-mail-notification">
        <p>you've contacted DC MEDICAL SYSTEM successfully !</p>
      </div>
        <div class="container">
          <div class="row g-0">
            <div class="col-md-12 col-xl-6">
              <div class="contact-us-left_img"></div>
            </div>
            <div class="col-md-12 col-xl-6">
              <div class="contact-form-one_right pbmit-bg-color-white">
                <div class="pbmit-heading-subheading">
                  <h4 class="pbmit-subtitle">Contact Us</h4>
                  <h2 class="pbmit-title">
                    Make an appointment apply for treatments
                  </h2>
                </div>
                <form
                  class="contact-form"
                  id="contact-form"
                  @submit.prevent="submitForm"
                >
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
                        type="text"
                        class="form-control"
                        placeholder="Subject"
                        name="subject"
                        v-model="subject"
                        required
                      />
                    </div>
                    <div class="col-md-12">
                      <textarea
                        name="message"
                        cols="40"
                        rows="10"
                        class="form-control"
                        placeholder="Message"
                        v-model="message"
                        required
                      ></textarea>
                    </div>
                    <div class="col-md-12">
                      <button
                        @click="submitForm"
                        class="pbmit-btn"
                        :class="{ clicked: isSubmitting }"
                      >
                        <span class="pbmit-button-content-wrapper">
                          <span
                            class="pbmit-button-icon pbmit-align-icon-right"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="22.76"
                              height="22.76"
                              viewBox="0 0 22.76 22.76"
                            >
                              <title>black-arrow</title>
                              <path
                                d="M22.34,1A14.67,14.67,0,0,1,12,5.3,14.6,14.6,0,0,1,6.08,4.06,14.68,14.68,0,0,1,1.59,1"
                                transform="translate(-0.29 -0.29)"
                                fill="none"
                                stroke="#000"
                                stroke-width="2"
                              ></path>
                              <path
                                d="M22.34,1a14.67,14.67,0,0,0,0,20.75"
                                transform="translate(-0.29 -0.29)"
                                fill="none"
                                stroke="#000"
                                stroke-width="2"
                              ></path>
                              <path
                                d="M22.34,1,1,22.34"
                                transform="translate(-0.29 -0.29)"
                                fill="none"
                                stroke="#000"
                                stroke-width="2"
                              ></path>
                            </svg>
                          </span>
                          <span class="pbmit-button-text">Submit Now</span>
                        </span>
                      </button>
                    </div>
                    <div class="col-md-12 col-lg-12 message-status"></div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- Contact Form End -->
    </div>
  </div>
</template>

<script lang="ts" setup>
const name = ref("");
const email = ref("");
const phone = ref("");
const subject = ref("");
const message = ref("");
const isSubmitting = ref(false);
const showNotification = ref(false);

const mail = useMail();

const submitForm = async () => {
  if (isSubmitting.value) return;

  if (
    !name.value ||
    !email.value ||
    !phone.value ||
    !subject.value ||
    !message.value
  ) {
    return;
  }

  isSubmitting.value = true;

  const formData = {
    name: name.value,
    email: email.value,
    phone: phone.value,
    subject: subject.value,
    message: message.value,
  };

  const submitButton = document.querySelector(".pbmit-btn .pbmit-button-text");
  if (submitButton) {
    submitButton.textContent = "Submitting .......";
  }

  await new Promise((resolve) => setTimeout(resolve, 2000));

  mail.send({
    subject: `${formData.subject}`,
    html: `<h1>DC MEDICICAL CONTACT FORM</h1>
          <p>Name: ${formData.name}</p>
          <p>Email: ${formData.email}</p>
          <p>Phone: ${formData.phone}</p>
          <p>Message: ${formData.message}</p>`,
  });

  name.value = "";
  email.value = "";
  phone.value = "";
  subject.value = "";
  message.value = "";

  showNotification.value = true;

  setTimeout(() => {
    showNotification.value = false;
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

<style scoped>
.space-bottom {
  padding-bottom: 100px;
}

.pbmit-btn.clicked {
  background-color: #6e778c;
  cursor: not-allowed;
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
