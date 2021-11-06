<template>
  <div :class="$style.wrapper">
    <nuxt-link :class="$style.product_img" :to="`/product/${product.pComponent}`">
   
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
</template>

<script>
import BuyButton from '~~/components/common/BuyButton'
export default {
  components: {
    BuyButton,
  },
  props: {
    product: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style lang="scss" module>
.wrapper {
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
  h5 {
    font-family: 'Cera Pro Bold';
    font-size: 12px;
    color: #88c74a;
    line-height: 1;
    display: block;
    text-transform: uppercase;
    letter-spacing: 2.4px;
    margin-bottom: 10px;
  }
  p {
    font-family: 'Cera Pro Medium';
    font-size: 18px;
    color: #252525;
    line-height: 24px;
    display: block;
    margin-bottom: 5px;
    transition: 0.4s;
    visibility: visible;
  }
}
.product_img {
  height: 138px;
  width: 100%;
  display: flex;
  margin-bottom: 30px;
  justify-content: center;
  align-items: center;
  img {
    max-width: 100%;
    max-height: 100%;
    transition: 0.3s ease;
  }
  .product_info {
    text-align: center;
  }
}
@media (max-width: 450px){
  img {
    max-width: 200px;
  }
}
</style>
