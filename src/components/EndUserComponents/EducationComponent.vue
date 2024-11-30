<template>
  <div class="education col-12 mt-10">
    <div class="info d-flex align-items-center flex-column">
      <h2 class="text-color fw-bold">EDUCATION</h2>
      <div class="d-flex box-effect justify-content-between">
        <div></div>
        <h6 class="main-color position-relative line-effect">LEARNING</h6>
      </div>
    </div>
    <div
      class="education-content position-relative d-flex justify-content-between mt-4 flex-wrap"
    >
      <div class="row-one">
        <div
          class="education-box position-relative d-flex text-end align-items-center mb-10 mt-10"
        >
          <div>
            <h5 class="text-color">Diploma In UI/UX Design New York</h5>
            <p class="description-color">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam.
            </p>
          </div>
          <h2 class="ms-4 date">2010</h2>
        </div>
        <div
          class="education-box position-relative d-flex text-end align-items-center"
        >
          <div>
            <h5 class="text-color">Diploma In UI/UX Design New York</h5>
            <p class="description-color">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam.
            </p>
          </div>
          <h2 class="ms-4 date">2012</h2>
        </div>
      </div>
      <div class="row-two">
        <div
          class="education-box position-relative d-flex align-items-start mb-10"
        >
          <h2 class="me-4 date">2017</h2>
          <div>
            <h5 class="text-color">Diploma In UI/UX Design New York</h5>
            <p class="description-color">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam.
            </p>
          </div>
        </div>
        <div class="education-box position-relative d-flex align-items-start">
          <h2 class="me-4 date">2020</h2>
          <div>
            <h5 class="text-color">Diploma In UI/UX Design New York</h5>
            <p class="description-color">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "EducationComponent",
};
</script>
<style scoped>
.education-box {
    max-width: 530px;
}
.row-one .education-box::after,
.row-two .education-box::before {
  content: "";
  position: absolute;
  width: 30px;
  height: 30px;
  border: 20px solid var(--main-font-Color);
  border-color: red blue yellow green;
}
.row-two .education-box::before {
  border-color: transparent var(--main-Color) transparent transparent;
  left: -55px;
  top: 10px;
}
.row-one .education-box::after {
  border-color: transparent transparent transparent var(--main-Color);
  right: -50px;
  top: 38px;
}
.education-content::before {
  content: "";
  position: absolute;
  width: 2px;
  height: 100%;
  background-color: #202020;
  left: 50%;
}
.mb-10 {
  margin-bottom: 150px;
}
.mt-10 {
  margin-top: 150px;
}
h2.date {
  color: #202020;
  font-size: 45px;
  font-weight: 700;
}
.education-box:hover h2.date {
  color: var(--main-Color);
}
@media (max-width: 1485px) {
  .row-one .education-box::after,
  .row-two .education-box::before,
  .education-content::before {
    display: none;
  }
  .education-content {
    justify-content: center !important;
  }
  .education-box {
    margin: 35px 0px !important ;
    flex-direction: column-reverse;
    text-align: center !important;
    align-items: center !important;
  }
  h2.date {
    margin: 20px 0 !important;
  }
  .row-two .education-box {
    flex-direction: column;
  }
}
</style>
