<template>
  <div class="multi-step-tabs mb-4">
    currentStep: {{ currentStep }}
    <div class="step-tabs-container">
      <div class="step-banner">
        <div
          class="sb-button"
          v-for="(step, index) in steps"
          :key="index"
          :class="{
            'sb-button--active':
              index == 0 ||
              step.step_no - 1 == currentStep ||
              currentStep > index,
            'sb-button--disabled': stepDisabled(index),
            'sb-button--valid': step.step_valid,
          }"
          @click="setCurrentStep(index)"
        >
          <button class="sb-btn">
            <div v-show="!showLabel(step)">
              <b-icon :icon="step.step_icon" font-scale="1.2"></b-icon>
              <span
                class="label-step ml-2"
                v-show="step.step_valid || currentStep == index"
                >{{ step.step_name }}</span
              >
            </div>

            <div v-show="showLabel(step)">
              <span v-if="step.step_name == 'Date'">{{
                formatDate(step.value)
              }}</span>
              <span v-else class="label-step"
                >{{ step.value }}
                <span v-if="step.step_icon == 'person'"
                  >Personne<span v-show="step.value > 1">s</span></span
                ></span
              >
            </div>
          </button>
          <span class="chevron">
            <b-icon icon="chevron-right" font-scale="1.2"></b-icon>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import moment from "../js/moment";
export default {
  name: "MultiStepTabs",
  props: {},
  data() {
    return {};
  },
  computed: {
    ...mapState(["currentStep", "steps"]),

    canPrev() {
      return this.activeStepIndex > 0;
    },
  },
  methods: {
    submitStep() {},
    isValid() {},
    stepDisabled(i) {
      if (i > 0) {
        if (!this.steps[i - 1].step_valid) return true;
      } else {
        return false;
      }
    },
    setCurrentStep(i) {
      this.stepDisabled(i) ? "" : this.$store.dispatch("setCurrentStep", i);
    },
    formatDate(value) {
      const date = moment(value).format("DD MMM  YYYY");
      console.log("a", date);
      return date;
    },
    showLabel(step) {
      if (step && step.value && step.value != "") {
        return true;
      } else return false;
    },
  },
};
</script>

<style scoped lang="scss">
$active-color: rgb(88, 148, 66);
$gray-color: #f8f9fa;
.step-banner {
  width: 100%;
  height: 38px;
  //border-radius: 5px;
  display: flex;
  overflow: hidden;
  .sb-btn {
    width: 100%;
    border: none;
    height: 100%;
    background: rgba($active-color, 0.2);
    overflow: hidden;
    display: flex;
    align-items: center;
    text-align: center;
    color: black;
    //font-size: 14px;
    justify-content: center;
    position: relative;
    z-index: 3;
    transition: 0.3s;
  }
  .chevron {
    //float: right;
    position: absolute;
    right: -2px;
    // padding: 2rem;
    z-index: 3;
    transition: 0.2s;
  }
  .sb-button {
    flex: auto;
    position: relative;
    background: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    color: black;
    transition: 0.3s;
    &--active {
      background: $active-color;
      color: white;
      .sb-btn {
        color: white;
      }
      .chevron {
        opacity: 0;
      }
      &::after {
        content: "";
        position: absolute;
        width: 2.12rem;
        height: 2.12rem;
        top: 0.16rem;
        bottom: 0px;
        right: -0.675rem;
        clip-path: polygon(0% 0%, 100% 100%, 0% 100%);
        transform: rotate(-135deg);
        background-color: $active-color;
        border-radius: calc(0.625rem) 0.25rem;
        z-index: 2;
      }
    }
    &--valid {
      // background: rgba($active-color, 0.4);
      // color: white;
      // .sb-btn {
      //   color: white;
      // }
      .chevron {
        opacity: 1;
      }
    }
    &--disabled {
      cursor: not-allowed;
      .sb-btn {
        cursor: not-allowed;
      }
    }
    &:last-child {
      .chevron {
        opacity: 0;
      }
      &:after {
        opacity: 0;
      }
    }
  }
}
.step-tabs-container {
  .body-content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
