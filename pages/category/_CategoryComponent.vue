<template>
  <div :class="$style.page">

      <div :class="$style.sidebar">
  <CategoriesBar :categories="categories" />
    </div>
    <div :class="$style.productList">
        
      <div
        v-for="product in category.products"
        :key="product.id"
      >
        <ProductUnit :product="product" />
      </div>
    </div>
   
  </div>
</template>

<script>
import CategoriesBar from '~~/components/common/CategoriesBar'
import ProductUnit from '~~/components/category/ProductUnit'
import { mapState } from 'vuex'
export default {
  components: {
    ProductUnit,
 CategoriesBar
  },
  async asyncData({ app, params, route, error, store }) {
    try {
      await store.dispatch('getCategoriesList'),
      await app.store.dispatch('getCurrentCategory', { route })
    } catch (err) {
      console.log(err)
      return error({
        statusCode: 404,
        message: 'Категория не найдена или сервер не доступен',
      })
    }
  },
  computed: {
    ...mapState({
      category: 'currentCategory',
        categories: 'categoriesList'
    }),
  },
  head() {
    return {
      title: this.category.cTitle,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.category.name,
        },
      ],
    }
  },
}
</script>
<style lang="scss" module>
.page {
  display: flex;
  @include globalWrapper;
}

.productList {
justify-content: center;
  display: flex;
  flex-wrap: wrap;
  margin: 30px;

}
</style>
