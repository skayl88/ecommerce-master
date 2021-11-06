<template>
  <div>
    <h1>Список категорий</h1>
    <div :class="$style.wrapper">
      <div
        v-for="category in categories"
        :key="category.cComponent"
        :class="$style.block"
      >
        <nuxt-link :to="`/category/${category.cComponent}`" >
          <p>{{ category.cName }}</p>
          <img :src="category.cImage" />
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    categories: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="scss" module>
.wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.product-img{
      height: 138px;
    width: 100%;
    display: flex;
    margin-bottom: 30px;
    justify-content: center;
    align-items: center;
}
img{
      max-width: 100%;
    max-height: 100%;
    transition: 0.3s ease;
}
.block {
  display: flex;
  flex-direction: column;

  padding: 10px 5px;
}
</style>
