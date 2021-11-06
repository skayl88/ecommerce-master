<template>
  <div>
    <div>
      <Header />
    </div>
    <div class="body">
      <Breadcrumbs />
      <nuxt />
      <CartModal />
    </div>
    <div><Footer /></div>
  </div>
</template>

<script>
import Header from '~~/components/common/Header.vue'
import Breadcrumbs from '~~/components/common/Breadcrumbs.vue'
import CartModal from '~~/components/modals/CartModal.vue'
import Footer from '~~/components/common/Footer.vue'

export default {
  components: {
    Header,
    Breadcrumbs,
    CartModal,
    Footer
  },
  computed: {
    meta() {
      return [
        { charset: 'utf-8' },
        {
          name: 'viewport',
          content:
            'width=device-width, initial-scale=1, maximum-scale=1 shrink-to-fit=no'
        },
        { hid: 'description', name: 'description', content: 'Главная' }
      ]
    }
  },
  beforeCreate() {
    // vueMainPlugins()
  },

  methods: {},
  head() {
    const canonical = `https://ovoshnuxt.herokuapp.com/${this.$route.path
      .toLowerCase()
      .replace(/\/$/, '')}`
    return {
      meta: Array.from(this.meta),
      script: [],
      bodyAttrs: {
        // class: 'body'
      },
      link: [{ rel: 'canonical', href: canonical }]
    }
  }
}
</script>
<style  lang="scss"e>
.body {
  min-height: 90vh;
}
</style>
