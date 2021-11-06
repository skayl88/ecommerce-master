<template>
  <div>
    <div :class='$style.category_title'> <h2 :class='$style.title'>Категории</h2></div>
      <div
        v-for="category in categories"
        :key="category.cComponent"
        :class="$style.list"
      >
        <ul><li>
          <nuxt-link class="category" :to="`/category/${category.cComponent}`">
          {{ category.cName }}     </nuxt-link></li></ul>
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
.category_title {
  border-bottom: 1px solid #ebebeb;
  margin-bottom: 30px;
}
.title {
  white-space: nowrap;
  position: relative;
  font-size: 24px;
  color: #252525;
    line-height: 50px;
    display: block;
    &:after {
    content: '';
    position: absolute;
    height: 3px;
    width: 90px;
    display: block;
    background-color: #88c74a;
    bottom: 0;
  }
}

ul {
  list-style: none;
  padding-left: 5px;
}
.sidebar {
  flex: 0 0 25%;
  max-width: 25%;
  min-width: 500px;
}
.list {
  a {
    font-size: 16px;
    color: #252525;
    line-height: 39px;
    display: inline-block;
    text-decoration: none;
    transition: 0.3s ease;
    &:hover {
      color: #88c74a;
      text-decoration: none;
    }
  }
}
.block {
  display: flex;
  flex-direction: column;

  padding: 10px 5px;
}
</style>
