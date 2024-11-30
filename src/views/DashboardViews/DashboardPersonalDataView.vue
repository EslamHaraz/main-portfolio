<template>
  <div class="personal-data">
    <div>
      <h1 class="page-title text-center mb-5">Personal Data</h1>
    </div>
    <form class="form-grid">
      <div class="form-group mb-3">
        <label for="Name" class="text-color mb-2">Your Name</label>
        <input
          type="text"
          class="form-control custom-btn"
          placeholder="Name"
          id="Name"
          aria-describedby="emailHelp"
        />
      </div>
      <div class="form-group mb-3">
        <label for="Jop" class="text-color mb-2">Your Jop</label>
        <input
          type="text"
          class="form-control custom-btn"
          id="Jop"
          placeholder="Jop"
          aria-describedby="emailHelp"
        />
      </div>
      <div class="form-group mb-3">
        <label for="Brief" class="text-color mb-2">Brief</label>
        <input
          type="text"
          placeholder="Brief"
          class="form-control custom-btn"
          id="Brief"
          aria-describedby="emailHelp"
        />
      </div>
      <div class="form-group mb-3">
        <label for="images" class="text-color mb-2">Your Image</label>
        <input type="file" class="form-control custom-btn" id="images" />
      </div>
      <div class="form-group mb-3">
        <label for="Logo" class="text-color mb-2">Your Logo</label>
        <input type="file" class="form-control custom-btn" id="Logo" />
      </div>
      <div class="form-group mb-3">
        <label for="CV" class="text-color mb-2">Your CV</label>
        <input type="file" class="form-control custom-btn" id="CV" />
      </div>
    </form>
    <div class="text-center">

<button  type="submit" class="custom-btn submit-btn text-color mt-4">Edit Data</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "DashboardPersonalDataView",
};
</script>
<style scoped>
.form-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
  gap: 40px;
}
.custom-btn {
  background-color: var(--secondary-Color);
}
.custom-btn:focus {
  background-color: var(--secondary-Color) !important;
}
.submit-btn {
  background-color: var(--main-Color);
}
</style>
