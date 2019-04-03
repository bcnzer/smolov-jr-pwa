<template>
  <v-layout justify-center>
    <v-flex xs12 sm10 md6>
      <v-data-table
        :items="weeks"
        class="elevation-1 mt-3"
        :headers="headers"
        hide-actions
      >
        <template v-slot:items="props">
          <td style="padding: 0 8px 0px 16px">
            {{ props.item.dayOfWeek }}
          </td>
          <td style="padding: 0 16px" class="text-xs-center">
            {{ props.item.reps }}
          </td>
          <td style="padding: 0 16px" class="text-xs-center">
            {{ props.item.sets }}
          </td>
          <td style="padding: 0 16px" class="text-xs-center">
            {{ weight(props.item.reps) }}
          </td>
        </template>
      </v-data-table>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'Week',

  props: {
    startingWeight: {
      type: Number,
      default: 0
    }
  },

  data: () => ({
    headers: [
      {
        text: null,
        align: 'left',
        value: 'action',
        sortable: false
      },
      {
        text: 'Sets',
        align: 'centre',
        value: 'sets',
        sortable: false
      },
      {
        text: 'Reps',
        align: 'centre',
        value: 'reps',
        sortable: false
      },
      {
        text: 'Weight',
        align: 'centre',
        value: 'weight',
        sortable: false
      }
    ],
    weeks: [
      {
        dayOfWeek: 'Monday',
        reps: 6,
        sets: 6,
        weight: null
      },
      {
        dayOfWeek: 'Wednesday',
        reps: 7,
        sets: 5,
        weight: null
      },
      {
        dayOfWeek: 'Friday',
        reps: 8,
        sets: 4,
        weight: null
      },
      {
        dayOfWeek: 'Saturday',
        reps: 10,
        sets: 3,
        weight: null
      }
    ],
    lssss: null
  }),

  methods: {
    weight: function(reps) {
      switch (reps) {
        case 6:
          return this.roundWeight(this.weight * 0.7)
        case 7:
          return this.roundWeight(this.weight * 0.75)
        case 8:
          return this.roundWeight(this.weight * 0.8)
        case 10:
          return this.roundWeight(this.weight * 0.85)
      }

      return null
    },
    roundWeight: function(weight) {
      return Math.round(weight / 5) * 5
    }
  }
}
</script>
