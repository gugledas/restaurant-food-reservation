<template>
  <div>
    <div class="myi-5">
      <h6 class="title-steps">
        <span class="ts-icon">
          <b-icon icon="clock" font-scale="1.2"></b-icon>
          <!-- <b-icon icon="filter-square"></b-icon> -->
        </span>
        Choisir une heure
      </h6>
      <div class="hours-content">
        <div class="block-time" v-for="(time, index) in allTime" :key="index">
          <h5 class="time-title">{{ time.name }}</h5>
          <div class="time-list">
            <button
              class="time-btn"
              v-for="(heure, i) in time.times"
              :key="i"
              @click="setTime(heure)"
            >
              <span class="time">{{ heure }}</span>
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
      allTime: [
        {
          name: "lunch",
          times: [
            "12:30",
            "13:00",
            "12:30",
            "12:30",
            "12:30",
            "12:30",
            "12:30",
            "12:30",
          ],
        },
        {
          name: "Dinner",
          times: [
            "17:30",
            "18:00",
            "12:30",
            "12:30",
            "12:30",
            "12:30",
            "12:30",
            "12:30",
            "12:30",
          ],
        },
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

<style lang="scss">
$first-color: rgb(88 148 66);
$gray-color: #f8f9fa;

.hours-content {
  text-align: left;
  .block-time {
    margin-bottom: 30px;
  }
  .time-title {
    font-size: 13px;
    color: black;
    text-transform: uppercase;
    font-weight: bold;
    margin-bottom: 20px;
  }
  .time-list {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 10px;
  }
  .time-btn {
    min-width: 80px;
    max-width: 200px;
    padding: 12px 18px;
    background: transparent;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    border: 1px solid rgb(91, 91, 91);
    transition: border 0.4s, background 0.3s, box-shadow 0.3s, color 0.3s;
    font-weight: bold;
    flex: 1 1 20%;
    &:hover {
      //background-color: rgba($first-color, 0.2);
      color: $first-color;
      border: 1px solid $first-color;
    }
    &:focus,
    &:active {
      box-shadow: 0px 0px 6px $first-color;
      border-color: $first-color;
    }
  }
}
</style>
