<template>
  <div class="services-section">
    <div>
      <h1 class="page-title text-center">Services</h1>
    </div>

    <div class="container-fluid p-0">
      <button
        v-b-modal.modal-lg-edit
        type="button"
        class="btn btn-success mb-3 fw-500"
      >
        Add New Service <Font-Awesome :icon="['fas', 'plus']" />
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
    <b-modal id="modal-lg" size="lg" title="Edit Service">
       <form>
          <div class="form-group mb-3">
            <label for="name" class="text-color mb-2"
              >Service Name</label
            >
            <input
            type="text"
              class="form-control custom-btn"
              id="name"
              aria-describedby="emailHelp"
              placeholder="Name"
            />
          </div>
          <div class="form-group mb-3">
            <label for="Description" class="text-color mb-2"
              >Service Description</label
            >
            <input
              type="text"
              class="form-control custom-btn"
              id="Description"
              placeholder="Description"
            />
          </div>
        </form>
    </b-modal>
    <div>
      <b-modal id="modal-2" title="Delete Service">
        <h4 class="my-4 text-danger text-center">
          Are You Sure To Delete This Service ?
        </h4>
      </b-modal>
    </div>
    <div>
      <b-modal id="modal-lg-edit" size="lg" title="Add Service">
        <form>
          <div class="form-group mb-3">
            <label for="name" class="text-color mb-2"
              >Service Name</label
            >
            <input
            type="text"
              class="form-control custom-btn"
              id="name"
              aria-describedby="emailHelp"
              placeholder="Name"
            />
          </div>
          <div class="form-group mb-3">
            <label for="Description" class="text-color mb-2"
              >Service Description</label
            >
            <input
              type="text"
              class="form-control custom-btn"
              id="Description"
              placeholder="Description"
            />
          </div>
        </form>
      </b-modal>
    </div>
  </div>
</template>
<script>
export default {
  name: "DashboardServicesView",
};
</script>
