import Vue from 'vue'
import VueLazyload from 'vue-lazyload'

export default async (context, inject) => {
  // Vue.use(clazyload)
  Vue.use(VueLazyload, {
    preLoad: 0,
    error: '',
    // eslint-disable-next-line
 
    attempt: 3,
    lazyComponent: true,
    observer: true,
    throttleWait: 500
  })
}
