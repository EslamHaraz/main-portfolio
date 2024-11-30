<template>
  <div class="exprience-parent mt-5">
    <div class="info d-flex align-items-center flex-column">
      <h2 class="text-color fw-bold">EXPERIENCE</h2>
      <div class="d-flex box-effect justify-content-between">
        <div></div>
        <h6 class="main-color position-relative line-effect">INVOLVEMENT</h6>
      </div>
    </div>
    <div class="exprience-boxes">
      <div class="exprience-box d-flex m-auto">
        <div class="info position-relative">
          <div class="absloute-date">
            <h1 class="m-0">2015</h1>
            <p class="text-color">Apr To Present</p>
          </div>
          <div class="ps-5 exprience-data">
            <h5 class="text-color mb-2">Lead Ui/Ux Designer Google</h5>
            <p class="description-color">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam.
            </p>
          </div>
        </div>
      </div>
      <div class="exprience-box d-flex m-auto">
        <div class="info position-relative">
          <div class="absloute-date">
            <h1 class="m-0">2015</h1>
            <p class="text-color">Apr To Present</p>
          </div>
          <div class="ps-5 exprience-data">
            <h5 class="text-color mb-2">Lead Ui/Ux Designer Google</h5>
            <p class="description-color">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam.
            </p>
          </div>
        </div>
      </div>
      <div class="exprience-box d-flex m-auto">
        <div class="info position-relative">
          <div class="absloute-date">
            <h1 class="m-0">2015</h1>
            <p class="text-color">Apr To Present</p>
          </div>
          <div class="ps-5 exprience-data">
            <h5 class="text-color mb-2">Lead Ui/Ux Designer Google</h5>
            <p class="description-color">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam.
            </p>
          </div>
        </div>
      </div>
      <div class="exprience-box d-flex m-auto">
        <div class="info position-relative">
          <div class="absloute-date">
            <h1 class="m-0">2015</h1>
            <p class="text-color">Apr To Present</p>
          </div>
          <div class="ps-5 exprience-data">
            <h5 class="text-color mb-2">Lead Ui/Ux Designer Google</h5>
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
  name: "ExpreinceComponent",
};
</script>
<style scoped>
.box-effect {
  width: 200px;
}
h6.line-effect::before {
  right: 125px;
}
.exprience-boxes {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
  gap: 25px;
}
.exprience-box .info {
  min-height: 200px;
  background-color: var(--secondary-Color);
  width: 380px;
  padding: 20px;
  margin: auto;
}
.exprience-box:hover .info {
  background-color: #ffffff33;
}
.exprience-box:hover .absloute-date h1 {
 color: var(--main-Color);
}

.absloute-date {
  position: absolute;
  left: -125px;
}
.absloute-date h1 {
  color: #1a1a1a;
  font-size: 80px;
  font-weight: 600;
}
@media (max-width: 768px) {
  .exprience-boxes  {
    display: block;
  }
  .absloute-date {
    position: relative;
    left: 0;
  }
    .exprience-box {
      margin-bottom: 30px !important;
    }
  .exprience-box .info {
    text-align: center;
  }
  .exprience-data {
    padding: 0 !important;
  }
}
</style>
