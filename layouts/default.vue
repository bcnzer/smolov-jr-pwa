<template>
  <v-app :dark="goDark">
    <v-toolbar fixed app>
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-menu bottom left>
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>more_vert</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-tile @click.native="toggleDark()">
            <v-list-tile-title>{{ themeName }}</v-list-tile-title>
          </v-list-tile>
          <v-list-tile @click.native="aboutPage()">
            <v-list-tile-title>About</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
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

  computed: {
    themeName: function() {
      return `${this.goDark ? 'Light' : 'Dark'} theme`
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
