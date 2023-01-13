import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    steps: [
      {
        step_no: 1,
        step_valid: false,
        step_skip: false,
        step_name: "Date",
        step_icon: "calendar2-date",
        value: "",
      },
      {
        step_no: 2,
        step_valid: false,
        step_skip: true,
        step_name: "Heure",
        step_icon: "clock",
        value: "",
      },
      {
        step_no: 3,
        step_valid: false,
        step_skip: false,
        step_icon: "person",
        step_name: "Offres",
        value: "",
      },
      {
        step_no: 4,
        step_valid: false,
        step_skip: false,
        step_icon: "bullseye",
        step_name: "Choisir une offre",
        value: "",
      },
    ],
    currentStep: 0,
    urlLoad: "/booking-system/dates",
  },
  getters: {},
  mutations: {
    SET_CURRENT_STEP(state, stepIndex) {
      state.currentStep = stepIndex;
    },
    SET_STEP_VALUE(state, value) {
      state.steps[state.currentStep].value = value;
      state.steps[state.currentStep].step_valid = true;
      if (state.currentStep + 1 < state.steps.length) {
        state.currentStep++;
      }
    },
  },
  actions: {
    setCurrentStep({ commit }, stepIndex) {
      commit("SET_CURRENT_STEP", stepIndex);
    },
    setStepValue({ commit }, value) {
      commit("SET_STEP_VALUE", value);
    },
  },
  modules: {},
});
