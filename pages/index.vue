<template>
  <div>
    <v-layout justify-center row>
      <v-flex xs12 sm10 md6>
        <v-card>
          <v-card-text>
            <v-text-field
              v-model="oneRepMax"
              type="number"
              label="One Rep Max"
              clearable
            ></v-text-field>
            <v-combobox
              v-model="selectedIncrement"
              :items="defaultIncrements"
              :menu-props="{ transition: 'slide-y-transition' }"
              label="Increment"
              hint="Recommend 5 if kg, 10 if pounds"
              persistent-hint
              xs12
            ></v-combobox>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>

    <v-layout row wrap>
      <v-flex xs12>
        <week :starting-weight="weekOneWeight"></week>
      </v-flex>
      <!-- <v-flex xs12>
        <week :starting-weight="weekTwoWeight"></week>
      </v-flex>
      <v-flex xs12>
        <week :starting-weight="weekThreeWeight"></week>
      </v-flex> -->
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
    selectedIncrement: null,
    oneRepMax: null,
    weekOneWeight: 0,
    weekTwoWeight: 0,
    weekThreeWeight: 0
  }),

  computed: {
    // weekOneStartingWeight: function() {}
  }
}
</script>
