import type { productIF } from '@/modals/products'
import { createStore } from 'vuex'
import type { Commit } from 'vuex/types/index.js'

interface State {
  product: Array<productIF> | []
}

const store = createStore<State>({
  state: {
    product: []
  },
  mutations: {
    getProduct(state, val: productIF) {
      state.product = val
    }
  },
  actions: {
    fetchProducts({ commit }: { commit: Commit }, products: Array<productIF>) {
      commit('getProduct', products)
    }
  }
})

export default store
