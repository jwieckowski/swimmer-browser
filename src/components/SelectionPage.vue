<template>
  <div class="selection-page">
    <div class="logo">
      <h1>{{logo}}</h1>
    </div>
    <div class="selection-filter">
      <div class="input-row">
        <b-form-select v-model="selectedGender" class="my-input" :options="optionsGender"></b-form-select>
        <b-form-select v-model="selectedType" class="my-input" :options="optionsType"></b-form-select>
        <b-form-select v-model="selectedAmount" class="my-input" :options="optionsAmount"></b-form-select>
      </div>
      <div class="input-row">
        <div class="my-input"></div>
        <b-form-select v-model="selectedYearLow" class="my-input" :options="optionsYearLow"></b-form-select>
        <b-form-select v-model="selectedYearHigh" class="my-input" :options="optionsYearHigh"></b-form-select>
      </div>
      <div class="input-row">
        <b-button
          v-on:click="runScript(name)"
          variant="primary"
          class='my-input'
        >
          {{search}}
        </b-button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'selection-page',
  data () {
    return {
      logo: 'Select swimmers for competition',
      search: 'Search',
      selectedGender: null,
      optionsGender: [
        { value: null, text: 'Sex' },
        { value: 'K', text: 'K' },
        { value: 'M', text: 'M' }
      ],
      selectedYearLow: null,
      optionsYearLow: [
        { value: null, text: 'Age Lower Bound' },
        { value: 2010, text: '2010' },
        { value: 2009, text: '2009' },
        { value: 2008, text: '2008' },
        { value: 2007, text: '2007' },
        { value: 2006, text: '2006' },
        { value: 2005, text: '2005' },
        { value: 2004, text: '2004' },
        { value: 2003, text: '2003' },
        { value: 2002, text: '2002' },
        { value: 2001, text: '2001' },
        { value: 2000, text: '2000' },
        { value: 1999, text: '1999' },
        { value: 1998, text: '1998' },
        { value: 1997, text: '1997' }
      ],
      selectedYearHigh: null,
      optionsYearHigh: [
        { value: null, text: 'Age Higher Bound' },
        { value: 2010, text: '2010' },
        { value: 2009, text: '2009' },
        { value: 2008, text: '2008' },
        { value: 2007, text: '2007' },
        { value: 2006, text: '2006' },
        { value: 2005, text: '2005' },
        { value: 2004, text: '2004' },
        { value: 2003, text: '2003' },
        { value: 2002, text: '2002' },
        { value: 2001, text: '2001' },
        { value: 2000, text: '2000' },
        { value: 1999, text: '1999' },
        { value: 1998, text: '1998' },
        { value: 1997, text: '1997' }
      ],
      selectedAmount: null,
      optionsAmount: [
        { value: null, text: 'Swimmers amount' },
        { value: 20, text: '20' },
        { value: 19, text: '19' },
        { value: 18, text: '18' },
        { value: 17, text: '17' },
        { value: 16, text: '16' },
        { value: 15, text: '15' },
        { value: 14, text: '14' },
        { value: 13, text: '13' },
        { value: 12, text: '12' },
        { value: 11, text: '11' },
        { value: 10, text: '10' },
        { value: 9, text: '9' },
        { value: 8, text: '8' },
        { value: 7, text: '7' },
        { value: 6, text: '6' },
        { value: 5, text: '5' }
      ],
      selectedType: null,
      optionsType: [
        { value: null, text: 'Selection type' },
        { value: 'Individual', text: 'Individual' },
        { value: 'Relay', text: 'Relay' }
      ]
    }
  },
  created () {
    this.$store.commit('clearFilters')
  },
  methods: {
    validateInputs: function () {
      if (this.selectedGender === null) {
        window.alert('Gender must be chosen')
        return false
      } else if (this.selectedYearLow < this.selectedYearHigh) {
        window.alert('Age boundaries must be changed')
        return false
      } else if (this.selectedType === null) {
        window.alert('Selection type must be chosen')
        return false
      }
      return true
    },
    runScript: function (name) {
      if (!this.validateInputs()) return

      axios.get('http://localhost:5000', {
        params: {
          sex: this.selectedGender,
          type: this.selectedType,
          amount: this.selectedAmount,
          ageLow: this.selectedYearLow,
          ageHigh: this.selectedYearHigh
        }})
        .then((res) => {
          this.$store.commit('setLineUp', res.data)
          this.$router.push('/lineup')
        })
        .catch((error) => {
          console.log(error)
          window.alert('Something went wrong')
          this.$store.commit('clearFilters')
        })
    }
  }
}
</script>

<style>

.selection-page {
  height: 100%;
  width: 80%;
  display: flex;
  flex-direction: column;
}

.logo {
  height: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.selection-filter {
  display: flex;
  flex-direction: column;
}

.input-row {
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin: 2% 0 2% 0;
}

.my-input {
  width: 30%;
}
</style>
