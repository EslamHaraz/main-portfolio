<template>
  <div class="services-section">
    <div>
      <h1 class="page-title text-center">Education</h1>
    </div>

    <div class="container-fluid p-0">
      <button
        v-b-modal.modal-lg-edit
        type="button"
        class="btn btn-success mb-3 fw-500"
      >
        Add New Education <Font-Awesome :icon="['fas', 'plus']" />
      </button>
      <table class="table table-striped table-dark custom-table text-center">
        <thead>
          <tr>
            <th scope="col " class="fit-content">#</th>
            <th scope="col">Name</th>
            <th scope="col">Description</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row " class="fit-content">1</th>
            <td>Typography Design</td>
            <td>Design and Create a special Typography f</td>
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
            <td>I break down complex user experinece pro</td>
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
    <b-modal id="modal-lg" size="lg" title="Edit Education">
       <form>
          <div class="form-group mb-3">
            <label for="Name" class="text-color mb-2">Education Name</label>
            <input
              type="text"
              class="form-control custom-btn"
              placeholder="Name"
              id="Name"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="form-group mb-3">
            <label for="Description" class="text-color mb-2"
              >Education Description</label
            >
            <input
              type="text"
              class="form-control custom-btn"
              id="Description"
                placeholder="Description"
            />
          </div>
          <div class="form-group mb-3">
            <label for="Location" class="text-color mb-2"
              >Education Location</label
            >
            <input
              type="text"
              class="form-control custom-btn"
              id="Location"
              placeholder="Location"
            />
          </div>
          <div class="form-group mb-3">
            <label for="date" class="text-color mb-2">Education Date</label>
            <input type="date" class="form-control custom-btn" id="date" />
          </div>
        </form>
    </b-modal>
    <div>
      <b-modal id="modal-2" title="Delete Education">
        <h4 class="my-4 text-danger text-center">
          Are You Sure To Delete This Education ?
        </h4>
      </b-modal>
    </div>
    <div>
      <b-modal id="modal-lg-edit" size="lg" title="Add Education">
        <form>
          <div class="form-group mb-3">
            <label for="Name" class="text-color mb-2">Education Name</label>
            <input
              type="text"
              class="form-control custom-btn"
              placeholder="Name"
              id="Name"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="form-group mb-3">
            <label for="Description" class="text-color mb-2"
              >Education Description</label
            >
            <input
              type="text"
              class="form-control custom-btn"
              id="Description"
                placeholder="Description"
            />
          </div>
          <div class="form-group mb-3">
            <label for="Location" class="text-color mb-2"
              >Education Location</label
            >
            <input
              type="text"
              class="form-control custom-btn"
              id="Location"
              placeholder="Location"
            />
          </div>
          <div class="form-group mb-3">
            <label for="date" class="text-color mb-2">Education Date</label>
            <input type="date" class="form-control custom-btn" id="date" />
          </div>
        </form>
      </b-modal>
    </div>
  </div>
</template>
<script>
export default {
  name: "DashboardEducationView",
};
</script>
