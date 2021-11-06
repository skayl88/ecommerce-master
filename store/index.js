// function for Mock API
import mock from '../utils/mockServer'
const sleep = m => new Promise(r => setTimeout(r, m))
export const state = () => ({
  categoriesList: [],
  currentCategory: {},
  currentProduct: {
    similarProducts: [],
    choiceBuyers: []
  },
  bredcrumbs: []
})
export const mutations = {
  SET_CATEGORIES_LIST(state, categories) {
    state.categoriesList = categories
  },
  SET_CURRENT_CATEGORY(state, category) {
    state.currentCategory = category
  },
  SET_CURRENT_PRODUCT(state, product) {
    state.currentProduct = product
  },
  SET_BREADCRUMBS(state, crumbs) {
    state.bredcrumbs = crumbs
  },
  RESET_BREADCRUMBS(state) {
    state.bredcrumbs = []
  }
}
export const actions = {
  async getProductsListRandom({ commit }) {
    // simulate api work
   
    const [products] = await Promise.all([
      this.$axios.$get('/mock/products.json')
    ])
    commit('GET_PRODUCTS_BY_IDS')
    const idsArray = mock.sampleSize(products, 5).map(p => p.id)
    return mock.getProductsByIds(products, idsArray)
  },

  async setBreadcrumbs({ commit }, data) {
    await commit('SET_BREADCRUMBS', data)
  },
  async getCategoriesList({ commit }) {
    try {
     
      await commit('SET_CATEGORIES_LIST', mock.categories)
    } catch (err) {
      console.log(err)
      throw new Error('Внутреняя ошибка сервера, сообщите администратору')
    }
  },
  async getCurrentCategory({ commit, dispatch }, { route }) {
    // simulate api work
 
    const category = mock.categories.find(
      cat => cat.cComponent === route.params.CategoryComponent
    )
    const [products] = await Promise.all([
      this.$axios.$get('/mock/products.json')
    ])
    const crubms = mock.getBreadcrumbs('category', route, category)
    await dispatch('setBreadcrumbs', crubms)

    await commit(
      'SET_CURRENT_CATEGORY',
      mock.addProductsToCategory(products, category)
    )
  },
  async getCurrentProduct({ commit, dispatch }, { route }) {
    // simulate api work

    const productComponent = route.params.ProductComponent
    const [products, similarProducts, choiceBuyers] = await Promise.all([
      this.$axios.$get('/mock/products.json'),
      dispatch('getProductsListRandom')
    ])
    const product = mock.getProduct(products, productComponent)
    const crubms = mock.getBreadcrumbs('product', route, product)
    await dispatch('setBreadcrumbs', crubms)
    await commit('SET_CURRENT_PRODUCT', {
      ...product,
      similarProducts,
      choiceBuyers
    })
  }
}
