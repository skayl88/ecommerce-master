<template>
  <div v-if="productsFromCart.length > 0" :class="$style.wrapper">
    <div
      v-for="product in productsFromCart"
      :key="product.productId"
      :class="$style.product"
    >
      <template>
        <DeleteButton
          :class="$style.remove"
          button-type="delete"
          @click.native="onRemoveClickHandler(product)"
        />
        <nuxt-link :to="`/product/${product.meta.pComponent}`">
          <img
            v-lazy="product.meta.img"
            :class="$style.img"
          />
        </nuxt-link>
        <nuxt-link  :class="$style.name"  :to="`/product/${product.meta.pComponent}`" >
        <p>{{ product.meta.name }}</p>
        </nuxt-link>
        <div>
          <p>Цена: </p>
          <p>{{ product.meta.price }}</p>
        </div>
        <div>
          <p>Колличество:</p>
          <input
            :value="product.amount"
            :class="$style.input"
            type="number"
            :min="1"
            :max="1000"
            @input.prevent="onAmountChangeHandler($event, product)"
          />
        </div>
        <div>
          <p>Стоимость</p>
          <p>{{ (product.meta.price * product.amount) | round }}</p>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import DeleteButton from '~~/components/common/input/DeleteButton.vue'
import round from '~~/mixins/round'
import { mapActions } from 'vuex'
import debounce from 'lodash.debounce'
export default {
  components: {
    DeleteButton,
  },
  mixins: [round],
  props: {
    productsFromCart: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    ...mapActions({
      setProductAmount: 'cart/setProductAmount',
      removeProduct: 'cart/removeProduct',
    }),
    onRemoveClickHandler(product) {
      this.removeProduct(product.productId)
    },
    onAmountChangeHandler: debounce(function onAmountChangeHandler(e, product) {
      const amount = e.target.value
      this.setProductAmount({ productId: product.productId, amount })
    }, 400),
  },
}
</script>

<style lang="scss" module>
.input {
  height: 20px;
}
.remove {
  top: -15px;
  position: absolute;
  left: -30px;
  z-index: 1;
}
.wrapper {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  .product {
    position: relative;
    margin: 1em;
    display: flex;
    flex-direction: row;

    * {
      margin-right: 10px;
    }
    .name {
      width: 150px;
    }
  }

  p {
    max-width: 270px;
    height: 35px;
  }
}
.img{
  width: 75px;
  height: 75px;
  object-fit: cover;
}
</style>
