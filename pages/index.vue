<template>
  <div :class="$style.page">
    <CategoriesList :categories="categories" />
   
  </div>
</template>

<script>
import CategoriesBar from '~~/components/common/CategoriesBar'
import CategoriesList from '~~/components/common/CategoriesList'
import { mapState } from 'vuex'
export default {
  components: {
    CategoriesList,
     CategoriesBar
  },
  async asyncData ({ app, route, params, error, store }) {
    try {
      await store.dispatch('getCategoriesList')
    } catch (err) {
      console.log(err)
      return error({
        statusCode: 404,
        message: 'Категории не найдены или сервер не доступен'
      })
    }
  },
  computed: {
    ...mapState({
      categories: 'categoriesList'
    })
  }
}
</script>
<style lang="scss" module>
.page {
  @include globalWrapper;
}
</style>
