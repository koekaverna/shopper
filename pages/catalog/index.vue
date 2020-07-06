<template>
  <v-layout class="px-2" row wrap>
    <v-flex v-for="category in categories" :key="category.id" class="py-2" xs12>
      <v-card
        :to="{ name: 'catalog-category', params: { category: category.id } }"
      >
        <v-card-title class="headline" v-text="category.label"></v-card-title>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState('catalog', ['categories']),
  },
}
</script>
