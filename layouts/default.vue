<template>
  <v-app dark>
    <v-app-bar fixed app>
      <v-toolbar-title>
        <v-icon class="mr-2">mdi-gift-outline</v-icon>
        {{ title }}
      </v-toolbar-title>
      <!-- <v-spacer /> -->
    </v-app-bar>
    <v-main class="mb-12">
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer fixed>
      <main-navigation></main-navigation>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      title: 'Shopper',
    }
  },
}
</script>
