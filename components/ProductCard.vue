<template>
  <v-card>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn icon right @click="addToFavorites(item)">
        <v-icon>
          <template v-if="!item.favorite">mdi-heart-outline</template>
          <template v-else>mdi-heart</template>
        </v-icon>
      </v-btn>
    </v-card-actions>
    <v-img :src="item.image"></v-img>
    <v-card-title>{{ item.price }} ₽</v-card-title>
    <v-card-text style="font-size: 0.7rem; line-height: 1rem;">
      {{ item.label }}
    </v-card-text>
  </v-card>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: {
    item: {
      type: Object,
      default: () => ({
        label: 'You should pass item to component',
      }),
    },
  },

  methods: {
    ...mapActions('catalog', ['addToFavorites']),
  },
}
</script>
