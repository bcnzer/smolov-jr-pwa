<template>
  <v-app :dark="goDark">
    <v-toolbar fixed app>
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn icon aria-label="Toggle dark mode" @click.native="toggleDark()">
        <v-icon>tonality</v-icon>
      </v-btn>

      <v-btn icon aria-label="Info">
        <v-icon @click.native="aboutPage()">info</v-icon>
      </v-btn>
    </v-toolbar>

    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      title: 'Smolov Jr Calculator',
      goDark: false
    }
  },

  methods: {
    toggleDark: function() {
      this.goDark = !this.goDark
    },
    aboutPage: function() {
      this.$router.push('/about')
    }
  }
}
</script>
