<template>
  <v-navigation-drawer
    :value="drawer"
    fixed
    app
    @input="(value) => $emit('update:drawer', value)"
  >
    <v-list>
      <v-list-item
        v-for="category in categories"
        :key="category.id"
        :to="{ name: 'catalog-category', params: { category: category.id } }"
        router
        exact
      >
        <!-- <v-list-item-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-action> -->
        <v-list-item-content>
          <v-list-item-title v-text="category.label" />
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: {
    drawer: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    ...mapState('catalog', ['categories']),
  },
}
</script>

<style></style>
