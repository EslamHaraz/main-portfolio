<template>
  <div class="about-view">
    <div class="container">
      <div class="row align-items-center justify-content-center">

        <div class="col-lg-6">
          <div class="img-box text-center">
            <img src="@/assets/images/about.jpg" class="img-fluid" />
          </div>
        </div>
        <div class="col-lg-6 ">
          <div class="info">
            <h2 class="text-color fw-bold">ABOUT ME</h2>
            <div class="d-flex box-effect justify-content-between">
              <div></div>
              <h6 class="main-color position-relative line-effect">WHO AM I</h6>
            </div>
            <p class="description-color description">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text. All the Lorem Ipsum generators on
              the Internet tend to repeat predefined chunks as necessary, making
              this the first true generator on the Internet. It uses a
              dictionary of over 200 Latin words, combined with a handful of
              model sentence structures.
            </p>
            <div class="actions mt-5">
              <a href="#" class="text-color">Download Resume</a>
            </div>
          </div>
        </div>
        <EducationComponent />
        <ExpreinceComponent />
      </div>
    </div>
  </div>
</template>
<script>
import EducationComponent from "@/components/EndUserComponents/EducationComponent.vue";
import ExpreinceComponent from "@/components/EndUserComponents/ExpreinceComponent.vue"
export default {
  components: { EducationComponent,ExpreinceComponent },
};
</script>
<style scoped>
.box-effect {
  width: 180px;
}
h6.line-effect::before {
  content: "";
  position: absolute;
  width: 85px;
  height: 2px;
  background-color: var(--main-font-Color);
  right: 90px;
  top: 8px;
}
.description {
  font-size: 15px;
  line-height: 22px;
}
.actions a {
  background-color: var(--main-Color);
  width: 180px;
  padding: 13px;
  border-radius: 2px;
}
</style>
