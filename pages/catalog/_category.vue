<template>
  <v-layout class="px-2" row wrap>
    <v-flex
      v-for="(product, index) in products"
      :key="index"
      class="pa-2"
      xs6
      md3
    >
      <product-card :item="product"></product-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data: ({ $route }) => ({ category: $route.params.category }),

  computed: {
    ...mapGetters('catalog', { _products: 'products' }),

    products() {
      return this._products(this.category)
    },
  },
}
</script>
