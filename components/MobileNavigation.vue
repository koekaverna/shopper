<template>
  <v-app-bar collapse-on-scroll app>
    <v-app-bar-nav-icon
      @click.stop="$emit('update:drawer', !drawer)"
    ></v-app-bar-nav-icon>
    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
    <v-spacer />
    <v-toolbar-title>
      <router-link :to="{ name: 'index' }" class="no-decoration">
        <v-icon class="mr-2">mdi-gift-outline</v-icon>
        {{ title }}
      </router-link>
    </v-toolbar-title>
    <v-spacer />
    <v-btn :to="{ name: 'favorite' }" exact icon>
      <v-icon>mdi-heart-outline</v-icon>
    </v-btn>
    <v-btn :to="{ name: 'cart' }" exact icon>
      <v-icon>mdi-shopping-outline</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: null,
    },
    drawer: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style scoped>
.no-decoration {
  text-decoration: none;
  color: inherit;
}
</style>
