<template>
  <v-layout justify-center>
    <v-flex xs12 sm10 md6>
      <v-data-table
        :items="weeks"
        class="elevation-1 mt-2"
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
            <transition name="slide-fade" mode="out-in">
              <div :key="weight(props.item.reps)">
                {{ weight(props.item.reps) }}
              </div>
            </transition>
          </td>
        </template>
      </v-data-table>
    </v-flex>
  </v-layout>
</template>

<script>
import { roundWeight } from '~/utils/round_weight.js'

export default {
  name: 'Week',

  props: {
    oneRepMax: {
      type: Number,
      default: 0
    },
    increment: {
      type: Number,
      default: 0
    },
    week: {
      type: String,
      default: '1'
    }
  },

  data: () => ({
    weeks: [
      {
        dayOfWeek: 'Monday',
        reps: 6,
        sets: 6
      },
      {
        dayOfWeek: 'Wednesday',
        reps: 7,
        sets: 5
      },
      {
        dayOfWeek: 'Friday',
        reps: 8,
        sets: 4
      },
      {
        dayOfWeek: 'Saturday',
        reps: 10,
        sets: 3
      }
    ]
  }),

  computed: {
    headers: function() {
      return [
        {
          text: `Week ${this.week}`,
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
      ]
    }
  },

  methods: {
    weight: function(reps) {
      if (this.oneRepMax === 0) return '-'

      let weight = 0

      switch (reps) {
        case 6:
          weight = roundWeight(this.oneRepMax * 0.7)
          break
        case 7:
          weight = roundWeight(this.oneRepMax * 0.75)
          break
        case 8:
          weight = roundWeight(this.oneRepMax * 0.8)
          break
        case 10:
          weight = roundWeight(this.oneRepMax * 0.85)
          break
        default:
          return 0
      }

      return weight + this.increment
    }
  }
}
</script>

<style>
table.v-table thead td:not(:nth-child(1)),
table.v-table tbody td:not(:nth-child(1)),
table.v-table thead th:not(:nth-child(1)),
table.v-table tbody th:not(:nth-child(1)),
table.v-table thead td:first-child,
table.v-table tbody td:first-child,
table.v-table thead th:first-child,
table.v-table tbody th:first-child {
  padding: 0 12px;
}
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for <2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
