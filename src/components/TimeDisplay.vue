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
              <span class="tt-discount">-12%</span>
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

<style lang="scss"></style>
