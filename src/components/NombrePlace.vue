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
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//import moment from "../js/moment";
export default {
  name: "BlocReservation",
  components: {},
  props: {},
  data() {
    return {
      nombrePlaces: [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "3",
        "4",
        "1",
        "2",
        "3",
        "4",
      ],
    };
  },
  mounted() {},
  methods: {
    setTime(value) {
      this.$store.dispatch("setStepValue", value);
    },
  },
};
</script>

<style lang="scss"></style>
