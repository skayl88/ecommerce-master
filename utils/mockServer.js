const sampleSize = require('lodash.samplesize')
const categories = [
  {
    id: 'berries',
    cTitle: 'Ягоды',
    cName: 'Ягоды',
    cComponent: 'berries',
    cMetaDescription: 'Мета описание',
    cDesc: 'Описание',
    cImage: 'https://source.unsplash.com/250x260/',
    products: []
  },
  {
    id: 'fruit',
    cTitle: 'Фрукты',
    cName: 'Фрукты',
    cComponent: 'fruit',
    cMetaDescription: 'Мета описание',
    cDesc: 'Описание',
    cImage: 'https://source.unsplash.com/250x260/',
    products: []
  },
  {
    id: 'mixFresh',
    cTitle: 'Зелень',
    cName: 'Зелень',
    cComponent: 'mixFresh',
    cMetaDescription: 'Мета описание',
    cDesc: 'Описание',
    cImage: 'https://source.unsplash.com/250x260/',
    products: []
  },
  {
    id: 'vegetables',
    cTitle: 'vegetables',
    cName: 'Овощи',
    cComponent: 'vegetables',
    cMetaDescription: 'Мета описание',
    cDesc: 'Описание',
    cImage: 'https://source.unsplash.com/250x260/?vegetables',
    products: []
  },
  {
    id: 'mushrooms',
    cTitle: 'Грибы',
    cName: 'Грибы',
    cComponent: 'mushrooms',
    cMetaDescription: 'Мета описание',
    cDesc: 'Описание',
    cImage: 'https://source.unsplash.com/250x260/',
    products: []
  }
]
function getProductsByIds(products, ids) {
  const innerProducts = products.filter(
    p => p.id === ids.find(id => p.id === id)
  )
  if (!innerProducts) return null
  return innerProducts.map(pr => {
    return {
      ...pr,

      category: categories.find(cat => cat.id === pr.category_id)
    }
  })
}
function getProduct(products, productComponent) {
  const innerProduct = products.find(p => p.pComponent === productComponent)
  if (!innerProduct) return null
  return {
    ...innerProduct,

    category: categories.find(cat => cat.id === innerProduct.category_id)
  }
}
function addProductsToCategory(products, category) {
  const categoryInner = { ...category, products: [] }
  products.map(p => {
    if (p.category_id === category.id) {
      categoryInner.products.push({
        id: p.id,
        name: p.name,
        pComponent: p.pComponent,
        price: p.price,
        img: p.img
      })
    }
  })
  return categoryInner
}
function getBreadcrumbs(pageType, route, data) {
  const crumbs = []
  crumbs.push({
    title: 'Главная',
    url: '/'
  })
  switch (pageType) {
    case 'category':
      crumbs.push({
        title: data.cName,
        url: `/category/${data.cComponent}`
      })
      break
    case 'product':
      crumbs.push({
        title: data.category.cName,
        url: `/category/${data.category.cComponent}`
      })
      crumbs.push({
        title: data.name,
        url: `/product/${data.pComponent}`
      })

      break

    default:
      break
  }
  return crumbs
}
export default {
  categories,
  sampleSize,
  getProductsByIds,
  getProduct,
  addProductsToCategory,
  getBreadcrumbs
}
