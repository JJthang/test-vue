<template>
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Add Product</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <form action="" class="px-2 py-4 gap-2">
          <input
            type="text"
            class="form-control mb-3"
            placeholder="Name Product"
            aria-label="name"
            name="name"
            aria-describedby="basic-addon1"
          />
          <input
            type="text"
            class="form-control"
            placeholder="Price Product"
            aria-label="Username"
            name="price"
            aria-describedby="basic-addon1"
          />
        </form>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
