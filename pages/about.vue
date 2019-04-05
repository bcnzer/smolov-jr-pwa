<template>
  <v-layout justify-center row>
    <v-flex xs12>
      <nuxt-link to="/">Back to calculator</nuxt-link>

      <v-card class="mt-3">
        <v-img height="200px" src="lifter.jpg"></v-img>
        <v-card-title class="subheading"
          >Generate a 3 week workout based on your current 1 rep maximum using
          the Smolov Jr formula</v-card-title
        >
        <v-card-text>
          <p>
            No cookies are used and you are not tracked with anything like
            Google Analytics.
          </p>
          <p>
            The storage of your lift information is purely on your device. It's
            not shared across devices.
          </p>
          <p>
            This app was written by
            <a href="https://twitter.com/bcnzer" target="_blank"
              >Ben Chartrand</a
            >
            and open-source, on
            <a href="https://github.com/bcnzer/smolov-jr-pwa" target="_blank"
              >GitHub</a
            >.
          </p>
          <p>
            Photo by
            <a
              href="https://unsplash.com/photos/n8wuzsypQ1M?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
              target="_blank"
              >Jesper Aggergaard</a
            >
            on
            <a
              href="https://unsplash.com/search/photos/weight?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
              target="_blank"
              >Unsplash</a
            >
          </p>
        </v-card-text>
        <v-card-actions>
          <v-btn nuxt="true" to="/" color="primary">Back to calculator</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>
