<template>
  <div class="container">
    <div class="steps-container py-5 row justify-content-center">
      <div class="steps-content col-12 col-lg-8">
        <div>
          <multi-step-tabs
            ref="multiStepTabs"
            @selectStep="selectStep"
          ></multi-step-tabs>
          <multi-step-form
            ref="multiStepForm"
            :steps="steps"
            @onComplete="submitForm"
            @validateStep="validateStep"
          >
          </multi-step-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MultiStepForm from "./MultiStepForm.vue";
import MultiStepTabs from "./MultiStepTabs.vue";

export default {
  name: "BlocReservation",
  components: { MultiStepForm, MultiStepTabs },
  props: {},
  data() {
    return {
      steps: [
        {
          step_no: 1,
          step_valid: false,
          step_skip: false,
        },
        {
          step_no: 2,
          step_valid: false,
          step_skip: true,
        },
        { step_no: 3, step_valid: false, step_skip: false },
      ],
    };
  },
  methods: {
    validateStep(stepIndex) {
      this.steps[stepIndex].step_valid = true;
      this.$refs.multiStepForm.submitStep();
    },
    selectStep(stepIndex) {
      this.$refs.multiStepForm.activeStepIndex = stepIndex;
    },
    submitForm() {},
  },
};
</script>

<style scoped lang="scss">
.steps-container {
  // max-width: 1200px;
  // min-height: 40vh;
  // margin: 0 auto;
  // display: flex;
  // align-items: flex-start;
  .item {
    flex: auto;
    min-width: 40%;
  }
}
</style>
