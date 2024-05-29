<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Name</th>
          <th scope="col">Price</th>
          <th scope="col">status</th>
          <th scope="col" align="center">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in store.state.product" :key="item.id">
          <th scope="row">{{ item.id }}</th>
          <td>{{ item.name }}</td>
          <td>{{ item.price }}</td>
          <td>{{ item.status }}</td>
          <td class="d-flex justify-center gap-2">
            <button
              type="button"
              @click="() => handAddData(item)"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              class="btn btn-success"
            >
              Add
            </button>
            <button type="button" class="btn btn-danger">Delete</button>
            <button type="button" class="btn btn-primary">Update</button>
          </td>
        </tr>
      </tbody>
    </table>
    <Model :initalFormData="initalFormData" />
  </div>
</template>

<script setup>
import { getProduct } from '@/api/request'
import { onMounted, ref } from 'vue'
import { useStore } from 'vuex'
import Model from '../model/index.vue'
const store = useStore()
const initalFormData = ref({
  name: '',
  price: '',
  status: 'pendding'
})

const handAddData = (id) => {
  console.log(id)
}

onMounted(async () => {
  const result = await getProduct()
  store.dispatch('fetchProducts', result)
})
</script>

<style lang="scss" scoped>
table {
  width: 1280px;
  text-align: center;
}
</style>
