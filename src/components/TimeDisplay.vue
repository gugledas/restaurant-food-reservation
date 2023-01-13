<template>
  <div>
    <div class="myi-5" v-show="!hoursIsLoading">
      <h6 class="title-steps">
        <span class="ts-icon">
          <b-icon icon="clock" font-scale="1.2"></b-icon>
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
    <div class="mt-2" v-show="hoursIsLoading">
      <div class="mb-4">
        <b-skeleton
          class="mb-3"
          animation="wave"
          width="40%"
          height="20px"
        ></b-skeleton>
        <div class="row">
          <div class="col-3 mb-2">
            <b-skeleton animation="wave" height="30px"></b-skeleton>
          </div>
          <div class="col-3 mb-2">
            <b-skeleton animation="wave" height="30px"></b-skeleton>
          </div>
          <div class="col-3 mb-2">
            <b-skeleton animation="wave" height="30px"></b-skeleton>
          </div>
          <div class="col-3 mb-2">
            <b-skeleton animation="wave" height="30px"></b-skeleton>
          </div>
          <div class="col-3 mb-2">
            <b-skeleton animation="wave" height="30px"></b-skeleton>
          </div>
          <div class="col-3 mb-2">
            <b-skeleton animation="wave" height="30px"></b-skeleton>
          </div>
          <div class="col-3 mb-2">
            <b-skeleton animation="wave" height="30px"></b-skeleton>
          </div>
          <div class="col-3 mb-2">
            <b-skeleton animation="wave" height="30px"></b-skeleton>
          </div>
        </div>
      </div>
      <div class="mb-4">
        <b-skeleton class="mb-3" animation="wave" width="40%"></b-skeleton>
        <div class="row">
          <div class="col-3 mb-2">
            <b-skeleton animation="wave" height="30px"></b-skeleton>
          </div>
          <div class="col-3 mb-2">
            <b-skeleton animation="wave" height="30px"></b-skeleton>
          </div>
          <div class="col-3 mb-2">
            <b-skeleton animation="wave" height="30px"></b-skeleton>
          </div>
          <div class="col-3 mb-2">
            <b-skeleton animation="wave" height="30px"></b-skeleton>
          </div>
          <div class="col-3 mb-2">
            <b-skeleton animation="wave" height="30px"></b-skeleton>
          </div>
          <div class="col-3 mb-2">
            <b-skeleton animation="wave" height="30px"></b-skeleton>
          </div>
          <div class="col-3 mb-2">
            <b-skeleton animation="wave" height="30px"></b-skeleton>
          </div>
          <div class="col-3 mb-2">
            <b-skeleton animation="wave" height="30px"></b-skeleton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "../js/moment";
import rootConfig from "../rootConfig";
import { mapState } from "vuex";
export default {
  name: "TimeDisplay",
  components: {},
  props: {},
  data() {
    return {
      hoursIsLoading: false,
      allTime: [],
    };
  },
  mounted() {},
  computed: {
    ...mapState(["urlLoad"]),
  },
  methods: {
    loadAvailableHours(date) {
      this.hoursIsLoading = true;
      let date_string = moment(date).unix();
      console.log("date", date_string);

      rootConfig
        .get(this.urlLoad + "/" + date_string)
        .then((reponse) => {
          console.log("hours response", reponse);
          if (reponse.data) this.setAllTime(reponse.data);
          this.hoursIsLoading = false;
        })
        .catch((er) => {
          console.log("hours error", er);
        });
    },
    setAllTime(data) {
      this.allTime = data;
    },
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
