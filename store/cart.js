// function for Mock API
import mock from '../utils/mockServer'
const sleep = m => new Promise(r => setTimeout(r, m))
const findMax = (array, field) => {
  if (!array || array.lenght === 0) return 1
  return Math.max(...array.map(o => o[field]), 0)
}
export const state = () => ({
  products: [], // product { amount, productId, order }
  metaProducts: [],
  version: '0.0.4'
})
export const mutations = {
  ADD_PRODUCT(state, productId) {
    // if cart doesn't have product add it
    if (!state.products.find(p => productId === p.productId)) {
      state.products = [
        ...state.products,
        {
          productId: productId,
          amount: 1,
          order: findMax(state.products, 'order') + 1
        }
      ]
    }
  },
  REMOVE_PRODUCT(state, productId) {
    state.products = Array.from(
      state.products.filter(prod => prod.productId !== productId)
    )
  },
  SET_PRODUCT_QTY(state, { productId, amount }) {
    state.products = [
      ...state.products.filter(prod => prod.productId !== productId),
      { ...state.products.find(prod => prod.productId === productId), amount }
    ]
  },
  SET_PRODUCTS_BY_IDS(state, products) {
    state.metaProducts = products
  }
}
export const getters = {
  getProductsInCart: state => {
    const products = []
    state.products.map(p => {
      const metaProduct = state.metaProducts.find(mp => mp.id === p.productId)
      if (metaProduct) {
        products.push({ ...p, meta: metaProduct })
      }
    })
    return products.sort((a, b) => a.order - b.order)
  }
}
export const actions = {
  async setProductsListByIds({ commit, state }) {
    // simulate api work
    await sleep(50)
    const [products] = await Promise.all([
      this.$axios.$get('/mock/products.json')
    ])
    const productsIds = state.products.map(p => p.productId)
    await commit(
      'SET_PRODUCTS_BY_IDS',
      mock.getProductsByIds(products, productsIds)
    )
  },
  async addProduct({ commit, dispatch }, productId) {
    // simulate api work

    await commit('ADD_PRODUCT', productId)
    await dispatch('setProductsListByIds')
  },
  async removeProduct({ commit, dispatch }, productId) {
    // simulate api work

    await commit('REMOVE_PRODUCT', productId)
    await dispatch('setProductsListByIds')
  },
  async setProductAmount({ commit, dispatch }, { productId, amount }) {
    // simulate api work

    await commit('SET_PRODUCT_QTY', { productId, amount })
    await dispatch('setProductsListByIds')
  }
}
