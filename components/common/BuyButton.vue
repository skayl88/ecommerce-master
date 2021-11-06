<template>
  <div v-if="product">
    <client-only>
      <button
        v-if="!isProductAdded"
        :class="$style.buy"
        @click.prevent="buyClickHandler"
      >
        Купить
      </button>
      <a
        v-else
        :class="$style.added"
        href="#"
        @click.prevent="addedClickHandler"
      >
        Уже в корзине
      </a>
    </client-only>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapGetters({
      getProductsInCart: 'cart/getProductsInCart',
    }),
    isProductAdded() {
      return this.getProductsInCart.find((p) => p.productId === this.product.id)
    },
  },
  methods: {
    ...mapActions({
      addProduct: 'cart/addProduct',
    }),
    buyClickHandler() {
      this.addProduct(this.product.id)
      this.$modal.show('customer-cart', { addedProduct: this.product.id })
    },
    addedClickHandler() {
      this.$modal.show('customer-cart', { addedProduct: this.product.id })
    },
  },
}
</script>

<style lang="scss" module>
.buy {
  background-color: #fff;
  color: #88c74a;
  font-size: 13px;
  border-radius: 999px;
  -webkit-border-radius: 999px;
  -moz-border-radius: 999px;
  -ms-border-radius: 999px;
  -o-border-radius: 999px;
  padding: 15px 30px;
  text-transform: uppercase;
  font-family: 'Cera Pro Bold';
  border: 2px solid #88c74a;
  -webkit-transition: 0.3s ease;
  -moz-transition: 0.3s ease;
  -ms-transition: 0.3s ease;
  -o-transition: 0.3s ease;
  transition: 0.3s ease;
  display: inline-block;

  &:hover {
    background-color: #88c74a;
    color: #fff;
    border: 2px solid #88c74a;
    text-decoration: none;
  }
  &:focus{
        outline: 0;
  }
}
.added {
  text-decoration: none;

   text-decoration: none;
}
</style>
