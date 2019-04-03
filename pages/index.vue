<template>
  <div>
    <v-layout justify-center row>
      <v-flex xs12 sm10 md6>
        <v-card>
          <v-card-text>
            <v-text-field
              v-model="oneRepMax"
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
  </div>
</template>

<script>
export default {
  data: () => ({
    defaultIncrements: [1, 2, 2.5, 5, 10],
    selectedIncrement: null,
    oneRepMax: null
  })
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
</style>
