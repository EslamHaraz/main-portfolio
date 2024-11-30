<template>
  <div class="services-section">
    <div>
      <h1 class="page-title text-center">Skills</h1>
    </div>

    <div class="container-fluid p-0">
      <button
        v-b-modal.modal-lg-edit
        type="button"
        class="btn btn-success mb-3 fw-500"
      >
        Add New Skill <Font-Awesome :icon="['fas', 'plus']" />
      </button>
      <table class="table table-striped table-dark custom-table text-center">
        <thead>
          <tr>
            <th scope="col " class="fit-content">#</th>
            <th scope="col">Name</th>
            <th scope="col">Image</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row " class="fit-content">1</th>
            <td>Java Script</td>
               <td>
              <img src="@/assets/images/bootstrab.png" class="img-fluid td-img" />
            </td>
            <td>
              <div>
                <button
                  v-b-modal.modal-lg
                  type="button"
                  class="btn btn-primary ms-2 me-2"
                >
                  Edit

                  <Font-Awesome :icon="['fas', 'pen-to-square']" />
                </button>
                <button
                  v-b-modal.modal-2
                  type="button"
                  class="btn btn-danger ms-2 me-2"
                >
                  Delete <Font-Awesome :icon="['fas', 'trash']" />
                </button>
              </div>
            </td>
          </tr>
          <tr>
            <th scope="row " class="fit-content">2</th>
            <td>Calligraphy Design</td>
            <td>
              <img src="@/assets/images/docker.png" class="img-fluid td-img" />
            </td>
            <td>
              <div>
                <button
                  type="button"
                  v-b-modal.modal-lg
                  class="btn btn-primary ms-2 me-2"
                >
                  Edit
                  <Font-Awesome :icon="['fas', 'pen-to-square']" />
                </button>
                <button
                  v-b-modal.modal-2
                  type="button"
                  class="btn btn-danger ms-2 me-2"
                >
                  Delete <Font-Awesome :icon="['fas', 'trash']" />
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <b-modal id="modal-lg" size="lg" title="Edit Skill">
      <form>
        <div class="form-group mb-3">
          <label for="Name" class="text-color mb-2">Skill Name</label>
          <input
            type="text"
            class="form-control custom-btn"
            id="Name"
            aria-describedby="emailHelp"
            placeholder="Name"
          />
        </div>
        <div class="form-group mb-3">
          <label for="Rate" class="text-color mb-2">Skill Rate</label>
          <input
            type="number"
            class="form-control custom-btn"
            id="Rate"
            aria-describedby="emailHelp"
                   placeholder="Rate"
          />
        </div>

        <div class="form-group mb-3">
          <label for="images" class="text-color mb-2">Images</label>
          <input type="file" class="form-control custom-btn" id="images" />
        </div>
      </form>
    </b-modal>
    <div>
      <b-modal id="modal-2" title="Delete Works">
        <h4 class="my-4 text-danger text-center">
          Are You Sure To Delete This Skill ?
        </h4>
      </b-modal>
    </div>
    <div>
      <b-modal id="modal-lg-edit" size="lg" title="Add Skill">
        <form>
          <div class="form-group mb-3">
            <label for="Name" class="text-color mb-2">Skill Name</label>
            <input
              type="text"
              class="form-control custom-btn"
              id="Name"
              aria-describedby="emailHelp"
                     placeholder="Name"
            />
          </div>
          <div class="form-group mb-3">
            <label for="Rate" class="text-color mb-2">Skill Rate</label>
            <input
              type="number"
              class="form-control custom-btn"
              id="Rate"
              aria-describedby="emailHelp"
                     placeholder="Rate"
            />
          </div>

          <div class="form-group mb-3">
            <label for="images" class="text-color mb-2">Images</label>
            <input type="file" class="form-control custom-btn" id="images" />
          </div>
        </form>
      </b-modal>
    </div>
  </div>
</template>
<script>
export default {
  name: "DashboardSkillsView",
};
</script>
<style scoped>
.td-img {
  width: 60px;
}
td {
  vertical-align: middle;
}
</style>
