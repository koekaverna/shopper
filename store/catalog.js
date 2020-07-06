import Vue from 'vue'
import { products, categories } from './data/catalog.json'

export const state = () => ({ products, categories })

export const getters = {
  favorites: (state) => state.products.filter((product) => !!product.favorite),
  products: (state) => (category) =>
    state.products.filter((product) => product.category === category),
}

export const mutations = {
  ADD_TO_FAVORITE(state, product) {
    const index = state.products.findIndex((el) => el === product)
    Vue.set(state.products[index], 'favorite', !state.products[index].favorite)
  },
}

export const actions = {
  addToFavorites({ commit }, product) {
    commit('ADD_TO_FAVORITE', product)
  },
}
