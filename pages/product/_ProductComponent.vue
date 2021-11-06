<template>
  <div :class="$style.page">
    <div :class="$style.topBlock">
      <div :class="$style.topLeftBlock">
        <a :href="product.img" target="_blank">
          <img
            v-lazy="product.img"
            :class="$style.img"
          />
        </a>
      </div>
      <div :class="$style.topRightBlock">
        <h1>{{ product.name }}</h1>
        <p>Вес: {{product.weight}}</p>
        <p>Цена: {{ product.price }} руб</p>
        <p> Страна: {{product.country}}</p>
        <BuyButton :product="product" />
      </div>
    </div>
    <h2>Описание</h2>
    <p>{{ product.description }}</p>
    <h2>С этим товаром покупают</h2>
    <ProductsList :products="product.similarProducts" />

  </div>
</template>

<script>
import BuyButton from '~~/components/common/BuyButton'
import ProductsList from '~~/components/common/ProductsList'
import { mapState } from 'vuex'
export default {
  components: {
    BuyButton,
    ProductsList,
  },
  async asyncData({ app, params, route, error }) {
    try {
      await app.store.dispatch('getCurrentProduct', { route })
    } catch (err) {
      console.log(err)
      return error({
        statusCode: 404,
        message: 'Товар не найдена или сервер не доступен',
      })
    }
  },
  computed: {
    ...mapState({
      product: 'currentProduct',
    }),
  },
  head() {
    return {
      title: this.product.name,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.product.name,
        },
      ],
    }
  },
}
</script>
<style lang="scss" module>
.page {
  @include globalWrapper;
}

.topBlock {
  padding-top: 2em;
  display: flex;

  @media (max-width: 960px) {
    flex-direction: column;
  }
  .topLeftBlock {
    display: flex;

    .img {
      width: 400px;
      height: auto;
      max-height: 300px;
      object-fit: cover;
      @media (max-width: 960px) {
        width: 100%;
      }
    }
  }
  .topRightBlock {
    padding-left: 2em;
    display: flex;
    flex-direction: column;

    @media (max-width: 960px) {
      padding-left: 0;
    }
    @media (max-width: 450px) {
      h1 {
        font-size: 34px;
      }
    }
  }
}
</style>
