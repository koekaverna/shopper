<template>
  <v-card
    width="100%"
    flat
    color="transparent"
    class="d-flex justify-space-between"
  >
    <v-btn
      v-for="item in items"
      :key="item.page"
      class="mx-4"
      icon
      :to="{ name: item.page }"
      exact
    >
      <v-icon size="24px">{{ item.icon }}</v-icon>
    </v-btn>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    items: [
      { page: 'index', icon: 'mdi-home-variant-outline' },
      { page: 'catalog', icon: 'mdi-format-list-bulleted' },
      { page: 'cart', icon: 'mdi-shopping-outline' },
      { page: 'favorite', icon: 'mdi-heart-outline' },
      { page: 'profile', icon: 'mdi-account-outline' },
    ],
  }),
}
</script>
