<template>
  <div :class="$style.wrapper">
 
  <div :class="$style.unit" v-for="product in products" :key="product.id">
      <nuxt-link :to="`/product/${product.pComponent}`">
      
        <img
          v-lazy="product.img"
          :class="$style.img"
        />
      </nuxt-link>
            <h5>{{ product.name }}</h5>
             <div :class="$style.product_info">
        <p> {{ product.price }}р</p>
     </div>
      <BuyButton :product="product" />

  </div>
  
  </div>
</template>

<script>
import BuyButton from '~~/components/common/BuyButton'
export default {
  components: {
    BuyButton,
  },
  props: {
    products: {
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

  > div {
    margin: 1em;
  }
  p {
    max-width: 270px;
    height: 35px;
  }
}
.unit{
  &:hover {
    border: 0px solid transparent;
    box-shadow: 0px 20px 32px 0 rgba(53, 78, 84, 0.15);
    z-index: 20;
    text-align: center;
  }
  text-align: center;
  width: 200px;
  justify-content: center;
  align-items: center;
  padding: 30px;
  border: 1px solid #ebebeb;
  position: relative;
  z-index: 6;
  transition: 0.3s ease;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  margin: 20px;
}
.image {
  width: 300px;
  height: 300px;
  object-fit: cover;
}
</style>
