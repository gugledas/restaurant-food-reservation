<template>
  <div>
    <div class="myi-5">
      <h6 class="title-steps">
        <span class="ts-icon">
          <b-icon icon="bullseye" font-scale="1.2"></b-icon>
        </span>
        Choisir une offre
      </h6>

      <div class="offers-content">
        <button
          class="option-selection"
          v-for="(offre, index) in offers"
          :key="index"
          :class="{ 'os-selected': isActive(offre) }"
          @click="selectOffer(offre)"
        >
          <div class="first-line">
            <div class="cc-titre">
              <span class="reduction" v-if="offre && offre.reduction.length">{{
                offre.reduction
              }}</span>
              <span>{{ offre.titre }}</span>
            </div>
            <div class="check-circle">
              <span class="cc-rond">
                <b-icon icon="check" font-scale="1"></b-icon>
              </span>
            </div>
          </div>
          <div class="cc-description">
            {{ offre.description }}
          </div>
        </button>
      </div>
      <div class="book-bloc">
        <button class="book-btn">Book now</button>
      </div>
    </div>
  </div>
</template>

<script>
//import moment from "../js/moment";
export default {
  name: "ChooseOffer",
  components: {},
  props: {},
  data() {
    return {
      value: null,
      offers: [
        {
          titre: "30% du repas",
          reduction: "-30%",
          value: "offer-1",
          description:
            "Boissons non comprises, disponible sur la plage horaire réservée.",
        },
        {
          titre: "20% du repas",
          reduction: "-20%",
          value: "offer-2",
          description:
            "Boissons non comprises, disponible sur la plage horaire réservée.",
        },
        {
          titre: "Faire une réservation sans offre spéciale",
          reduction: "",
          value: "offer-3",
          description:
            "Boissons non comprises, disponible sur la plage horaire réservée.",
        },
      ],
    };
  },
  mounted() {},
  methods: {
    isActive(offer) {
      if (this.value == offer.value) return true;
      else return false;
    },
    setOffer(value) {
      this.$store.dispatch("setStepValue", value);
    },
    selectOffer(offer) {
      this.value = offer.value;
      console.log("ae", offer.value);
      this.$store.dispatch("setStepValue", this.value);
    },
  },
};
</script>

<style lang="scss">
$first-color: rgb(88 148 66);
$gray-color: #f8f9fa;

.offers-content {
  text-align: left;
  .option-selection {
    padding: 10px;
    margin: 1rem 0px;
    margin-bottom: 25px;
    background-color: rgb(255, 255, 255);
    display: block;
    width: 100%;
    min-width: 14rem;
    text-align: left;
    line-height: 1.5;
    border: 2px solid $gray-color;
    border-radius: 2px;
    border-radius: 0.25rem;
    box-shadow: 0px 3px 6px rgba(#000, 0.2);
    transition: border 500ms ease 0s, box-shadow ease 0.3s;

    .cc-titre {
      font-size: 14px;
      font-weight: bold;
      margin-bottom: 10px;
      padding-right: 30px;
      .reduction {
        padding: 3px;
        background: black;
        color: white;
        margin-right: 6px;
      }
    }
    .cc-description {
      color: rgba(#000000, 0.6);
    }
    .check-circle {
      position: absolute;
      right: 15px;
      top: 0;
      .cc-rond {
        border-radius: 50px;
        border: 1px solid $gray-color;
        color: white;
        transition: ease 0.3s;
        background: transparent;
        font-size: 24px;
        width: 25px;
        display: inline-flex;
        height: 25px;
        align-items: center;
        justify-content: center;
      }
    }
    .first-line {
      position: relative;
    }
    &:hover {
      box-shadow: 0px 3px 10px rgba(#000, 0.2);
      .check-circle {
        .cc-rond {
          background-color: rgba(#000000, 0.2);
        }
      }
    }
  }
  .os-selected {
    border: 2px solid $first-color;
    .check-circle {
      .cc-rond {
        background-color: $first-color;
        border-color: $first-color;
      }
    }
    &:hover {
      .check-circle {
        .cc-rond {
          background-color: $first-color;
          border-color: $first-color;
        }
      }
    }
  }
}
.book-bloc {
  width: 100%;
  margin-top: 5rem;
  .book-btn {
    display: block;
    width: 100%;
    padding: 15px 10px;
    background: lighten($first-color, 10);
    color: white;
    text-transform: uppercase;
    border: none;
    border-radius: 5px;
    transition: ease 0.4s;
    &:hover {
      background: $first-color;
    }
  }
}
</style>
