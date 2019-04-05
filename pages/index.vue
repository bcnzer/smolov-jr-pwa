<template>
  <div>
    <v-layout justify-center row>
      <v-flex xs12 sm10 md6>
        <v-card class="mb-3">
          <v-card-text>
            <v-text-field
              v-model="oneRepMax"
              type="number"
              label="One Rep Max"
              aria-label="One Rep Max"
              clearable
            ></v-text-field>
            <v-select
              v-model="selectedIncrement"
              :items="defaultIncrements"
              :menu-props="{ transition: 'slide-y-transition' }"
              label="Increment"
              aria-label="Increment"
              xs12
            ></v-select>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>

    <v-layout row wrap>
      <v-flex xs12>
        <week :one-rep-max="orm"></week>
      </v-flex>
      <v-flex xs12>
        <week week="2" :one-rep-max="orm" :increment="selectedIncrement"></week>
      </v-flex>
      <v-flex xs12>
        <week
          week="3"
          :one-rep-max="orm"
          :increment="selectedIncrement * 2"
        ></week>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import week from '~/components/week'

export default {
  components: {
    week
  },

  data: () => ({
    defaultIncrements: [1, 2, 2.5, 5, 10],
    selectedIncrement: 2.5,
    oneRepMax: null
  }),

  computed: {
    orm: function() {
      if (!this.oneRepMax) return 0
      localStorage.oneRepMax = this.oneRepMax

      return Number(this.oneRepMax)
    }
  },

  created: function() {
    this.oneRepMax = localStorage.oneRepMax
    if (
      localStorage.selectedIncrement &&
      this.defaultIncrements.findIndex(localStorage.selectedIncrement) !== -1
    ) {
      this.selectedIncrement = localStorage.selectedIncrement
    }
  }
}
</script>
