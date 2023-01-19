<template>
  <div>
    <div class="myi-5">
      <h6 class="title-steps">
        <span class="ts-icon">
          <b-icon icon="person" font-scale="1.3"></b-icon>
        </span>
        <span>Choisir le nombre de place</span>
      </h6>
      <div class="hours-content">
        <div class="block-time">
          <div class="time-list">
            <button
              class="time-btn"
              v-for="(place, i) in nombrePlaces"
              :key="i"
              @click="setTime(place)"
            >
              <span class="time">{{ place }}</span>
              <span class="tt-discount">-12%</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//import moment from "../js/moment";
import { mapState } from "vuex";
export default {
  name: "BlocReservation",
  components: {},
  props: {},
  data() {
    return {
      Places: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
    };
  },
  mounted() {},
  computed: {
    ...mapState(["defaultConfig"]),
    nombrePlaces() {
      if (this.defaultConfig && this.defaultConfig.maxPeoples) {
        let nbPlace = [];
        let begin = 1;
        while (nbPlace.length < this.defaultConfig.maxPeoples) {
          nbPlace.push(begin);
          console.log("ae");
          begin++;
        }
        return nbPlace;
      } else {
        return this.Places;
      }
    },
  },
  methods: {
    setTime(value) {
      this.$store.dispatch("setStepValue", value);
    },
  },
};
</script>

<style lang="scss"></style>
