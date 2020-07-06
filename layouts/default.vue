<template>
  <v-app dark>
    <v-app-bar v-if="isPwa" fixed app>
      <v-toolbar-title>
        <v-icon class="mr-2">mdi-gift-outline</v-icon>
        {{ title }}
      </v-toolbar-title>
    </v-app-bar>
    <template v-if="isMobile">
      <mobile-sidebar :drawer.sync="drawer"></mobile-sidebar>
      <mobile-navigation
        :drawer.sync="drawer"
        :title="title"
      ></mobile-navigation>
    </template>
    <v-main class="mb-12">
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer v-if="isPwa" fixed>
      <app-navigation></app-navigation>
    </v-footer>
    <v-footer v-if="isMobile">{{ title }}</v-footer>
  </v-app>
</template>

<script>
const isRunningStandalone = () => {
  return window.matchMedia('(display-mode: standalone)').matches
}

export default {
  data() {
    return {
      mode: '',
      title: 'Shopper',
      drawer: false,
    }
  },

  computed: {
    isPwa() {
      return this.mode === 'pwa'
    },
    isMobile() {
      return this.mode === 'mobile'
    },
  },

  mounted() {
    this.mode = isRunningStandalone() ? 'pwa' : 'mobile'
  },
}
</script>
