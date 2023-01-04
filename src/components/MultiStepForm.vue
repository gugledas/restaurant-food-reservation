<template>
  <div class="multi-step-form p-2">
    <form class="form" @submit="submitStep">
      <slot name="header"></slot>

      <transition name="slide-fade" mode="out-in">
        <div v-if="currentStep == 0">
          <vue-calendar></vue-calendar>
        </div>
        <div v-if="currentStep == 1" key="second">
          <time-display></time-display>
        </div>
        <div v-if="currentStep == 2" key="third">
          <nombre-place></nombre-place>
        </div>
        <div v-if="currentStep == 3" key="third">
          <choose-offer></choose-offer>
        </div>
      </transition>
    </form>
    <!-- steps :
    <pre>{{ steps }}</pre> -->
  </div>
</template>

<script>
import VueCalendar from "./VueCalendar.vue";
import TimeDisplay from "./TimeDisplay.vue";
import NombrePlace from "./NombrePlace.vue";
import ChooseOffer from "./ChooseOffer";
import { mapState } from "vuex";
export default {
  name: "MultiStepForm",
  components: { VueCalendar, TimeDisplay, NombrePlace, ChooseOffer },
  props: {},
  data() {
    return {
      activeStepIndex: 0,
    };
  },
  computed: {
    ...mapState(["currentStep", "steps"]),
    canPrev() {
      return this.activeStepIndex > 0;
    },
    canNext() {
      return this.steps.length && this.steps[this.activeStepIndex].step_valid;
    },
  },
  methods: {
    submitStep(ev) {
      ev.preventDefault();
      // if (!this.steps[this.activeStepIndex].step_valid) {
      //   this.$emit("validateStep", this.activeStepIndex);
      //   return false;
      // }
      // if (this.activeStepIndex === this.steps.length) {
      //   this.$emit("onComplete");
      //   return false;
      // }
      //this.activeStepIndex++;
      // while (this.steps[this.activeStepIndex].step_skip === true) {
      //   this.activeStepIndex++;
      // }
    },
  },
};
</script>

<style lang="scss">
a {
  color: #42b983;
}
.ts-icon {
  font-size: 16px;
  margin-right: 8px;
}
.title-steps {
  color: black;
  font-size: 14px;
  text-align: left;
  margin-bottom: 25px;
  font-weight: bold;
  letter-spacing: 1px;
  display: flex;
  align-items: center;
}
.multi-step-form {
  overflow: hidden;
  // max-height: 500px;
}
.msf-action {
  display: flex;
  justify-content: space-around;
  margin-top: 2rem;
}
.step-btn {
  border: 1px solid black;
  background: transparent;
  padding: 1rem 2rem;
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    background: #42b983;
    color: white;
    border-color: #42b983;
  }
  &__prev {
    border-color: #6f6f6f;
    &:hover {
      background: #131313;
      border-color: #131313;
    }
  }
}
/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all 0.4s ease;
}
.slide-fade-leave-active {
  // transform: translateX(10px);
  transition: all 0.3s ease;
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
