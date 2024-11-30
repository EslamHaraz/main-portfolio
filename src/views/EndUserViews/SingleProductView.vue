<template>
  <div class="single-product">
    <div class="info d-flex align-items-center flex-column mb-4">
      <h2 class="text-color fw-bold">Single Project</h2>
      <div class="d-flex box-effect justify-content-between">
        <div></div>
        <h6 class="main-color position-relative line-effect">Quality</h6>
      </div>
    </div>
    <div class="swiper-container mySwiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </div>
        <div class="swiper-slide">
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </div>
        <div class="swiper-slide">
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </div>
        <div class="swiper-slide">
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </div>
        <div class="swiper-slide">
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </div>
        <div class="swiper-slide">
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </div>
      </div>

      <!-- إضافة أسهم التنقل إذا كانت مطلوبة -->
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-pagination"></div>
    </div>
    <div
      class="project-info w-100 mt-4 d-flex justify-content-between align-items-center pb-3"
    >
      <div class="text-start">
        <h1 class="text-color main-title">Typography ( Easy Soft)</h1>
        <p class="text-color description">
          I have developed an e-commerce store using modern technologies such as
          React, HTML, CSS, and JavaScript, along with libraries like Formik,
          Yup, and Bootstrap. The store features an attractive and user-friendly
          interface built with React components, offering interactivity and fast
          performance.
        </p>
      </div>
      <div>
        <div class="category box text-color text-start">
          <h6>Category</h6>
          <h5>Branding</h5>
        </div>
        <div class="date box text-color text-start">
          <h6>Start Date</h6>
          <h5>2024-01-01</h5>
        </div>
      </div>
    </div>
    <div class="description text-start">
      <h1 class="text-color main-title">Project Description</h1>
      <p class="text-color">
        I’ve just completed my first hands-on project using Amazon Web Services
        (AWS), where I built a Multi-Tier Web Application Architecture from
        scratch. It’s been a fantastic learning experience, and I’m excited to
        share the details with you! 🛠 Project Overview: I designed a secure,
        scalable, and highly available infrastructure using key AWS services to
        ensure the web application can handle traffic efficiently while keeping
        sensitive backend resources protected. ⚙️ Key Components: 🔹Virtual
        Private Cloud (VPC): Created a custom VPC with public and private
        subnets spread across two availability zones to ensure high availability
        and fault tolerance. 🔹Application Load Balancer (ALB): Deployed an ALB
        in the public subnets to evenly distribute incoming traffic to backend
        servers in different availability zones for improved resilience. 🔹EC2
        Instances: Launched EBS-backed EC2 instances in private subnets to
        handle application logic securely,
      </p>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/css/swiper.css";

export default {
  mounted() {
    // تهيئة Swiper بعد تحميل المكوّن
    new Swiper(".mySwiper", {
      effect: "flip",
      grabCursor: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  },
};
</script>

<style>
.single-product {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.mySwiper {
  width: 100%;
  max-width: 700px; /* أقصى عرض ليكون 1000 بكسل */
  height: auto; /* ارتفاع تلقائي */
  aspect-ratio: 1 / 1; /* يحافظ على النسبة 1:1 عشان يكون مربع */
}

/* جعل العرض يستجيب لحجم الشاشة */
@media (max-width: 768px) {
  .mySwiper {
    max-width: 90vw; /* العرض يكون 90% من عرض الشاشة */
  }
}

@media (max-width: 480px) {
  .mySwiper {
    max-width: 100vw; /* العرض يكون 100% من عرض الشاشة */
    padding: 0 10px; /* اضافة padding للتأكد أن الصور لا تلمس الحواف */
  }
}
/* .swiper-button-next {
  right: -40px;
}
.swiper-button-prev {
  left: -40px;
} */
.swiper-button-prev:after,
.swiper-button-next:after {
  color: var(--main-Color);
}
.swiper-slide img {
  padding: 20px;
  background-color: var(--secondary-Color);
  border-radius: 5px;
}
.swiper-container-horizontal > .swiper-pagination-bullets {
  bottom: -2px;
}
.swiper-pagination-bullet-active {
  background-color: var(--main-Color);
}
.project-info {
  border-bottom: 2px solid var(--main-Color);
}
p.description {
  max-width: 700px;
}
.main-title {
  font-size: 46px;
  font-weight: 500;
}
</style>
