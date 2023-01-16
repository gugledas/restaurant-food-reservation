<template>
  <div class="hello">
    <div class="steps-container p-5">
      <div class="steps-content item">
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
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.steps-container {
  max-width: 1200px;
  min-height: 40vh;
  margin: 0 auto;
  display: flex;
  // align-items: flex-start;
  .item {
    flex: auto;
    min-width: 40%;
  }
}
</style>
