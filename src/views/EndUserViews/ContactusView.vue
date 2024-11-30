<template>
  <div class="contact-us">
    <div class="info d-flex align-items-center flex-column mb-5">
      <h2 class="text-color fw-bold">GET IN TOUCH</h2>
      <div class="d-flex box-effect justify-content-between">
        <div></div>
        <h6 class="main-color position-relative line-effect">CONTACT US</h6>
      </div>
    </div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-6 mb-4">
          <h3 class="text-color mb-4">HOW WE CAN HELP YOU ?</h3>
          <form @submit.prevent>
            <div
              class="personl-input d-flex  aling-items-center mb-4"
            >
              <input type="text" placeholder="Your Name" class="custom-input" />
              <input
                type="email"
                placeholder="Your Email"
                class="custom-input ms-3"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              class="custom-input w-100 mb-4"
            />
            <textarea
              placeholder="message"
              class="custom-input w-100"
            ></textarea>
            <button type="submit" class="custom-btn text-color mt-4">
              Submit
            </button>
          </form>
        </div>
        <div class="col-lg-6 mb-4 text-center">
          <div class="mapouter">
            <div class="gmap_canvas">
              <iframe
                class="gmap_iframe"
                width="100%"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
                src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=المنزله دقهليه&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              ></iframe
              ><a href="https://joy.link/fmhybak">fmhy</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ContactusView",
};
</script>

<style scoped>
h6.line-effect::before {
  right: 110px;
}
.personl-input input {
  width: calc(100%/2);
}
.custom-input {
  padding: 15px;
  background-color: #111;
  border: none;
  border-radius: 2px;
}
form textarea {
  min-height: 200px;
}
.mapouter {
  position: relative;
  text-align: right;
  width: 100%;
  height: 400px;
}
.gmap_canvas {
  overflow: hidden;
  background: none !important;
  width: 100%;
  height: 100%;
}
.gmap_iframe {
  height: 400px !important;
}
</style>
