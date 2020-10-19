<template>
  <div class="filter-content">
    <div class="filter-logo">
      <h1>{{logo}}</h1>
    </div>
    <div class="filter-container">
      <div class="input-row">
        <b-form-input v-model="name" class="big-input" placeholder="Enter swimmer name"></b-form-input>
        <b-form-select v-model="selectedYear" class="small-input" :options="optionsYear"></b-form-select>
        <b-form-select v-model="selectedGender" class="small-input" :options="optionsGender"></b-form-select>
      </div>
      <div class="input-row">
        <div class="big-input invisible"></div>
        <b-form-select v-model="selectedSeason" class="small-input" :options="optionsSeason"></b-form-select>
        <b-form-select v-model="selectedPoolType" class="small-input" :options="optionsPoolType"></b-form-select>
      </div>
      <div class="input-row">
        <div class="big-input invisible"></div>
        <b-form-select v-model="selectedStyle" class="small-input" :options="optionsStyle"></b-form-select>
        <b-form-select v-model="selectedDistance" class="small-input" :options="optionsDistance"></b-form-select>
      </div>
      <div class="input-row">
        <div class="big-input invisible"></div>
        <div class="small-input invisible"></div>
        <router-link class="link small-input" to="/results">
          <b-button
            class="submit-button"
            variant="primary"
            v-on:click="filterSwimmers(name, selectedYear, selectedGender, selectedSeason, selectedPoolType, selectedStyle, selectedDistance)"
          >
            {{buttonText}}
          </b-button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'filter-content',
  data () {
    return {
      logo: 'Find a swimmer',
      buttonText: 'Search',
      name: '',
      selectedYear: null,
      optionsYear: [
        { value: null, text: 'Age' },
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
      selectedGender: null,
      optionsGender: [
        { value: null, text: 'Sex' },
        { value: 'K', text: 'K' },
        { value: 'M', text: 'M' }
      ],
      selectedSeason: null,
      optionsSeason: [
        { value: null, text: 'Season' },
        { value: 2015, text: '2015' },
        { value: 2016, text: '2016' },
        { value: 2017, text: '2017' }
      ],
      selectedPoolType: null,
      optionsPoolType: [
        { value: null, text: 'Pool type' },
        { value: 'SC', text: 'SC' },
        { value: 'LC', text: 'LC' }
      ],
      selectedStyle: null,
      optionsStyle: [
        { value: null, text: 'Style' },
        { value: 'Freestyle', text: 'Freestyle' },
        { value: 'Backstroke', text: 'Backstroke' },
        { value: 'Breaststroke', text: 'Breaststroke' },
        { value: 'Butterfly', text: 'Butterfly' },
        { value: 'Medley', text: 'Medley' }
      ],
      selectedDistance: null,
      optionsDistance: [
        { value: null, text: 'Distance' },
        { value: 50, text: '50' },
        { value: 100, text: '100' },
        { value: 200, text: '200' },
        { value: 400, text: '400' },
        { value: 800, text: '800' },
        { value: 1500, text: '1500' }
      ]
    }
  },
  created () {
    this.$store.commit('clearFilters')
  },
  methods: {
    filterSwimmers: function (name, year, gender, season, pool, style, distance) {
      this.$store.commit('advancedFilter', { name, year, gender, season, pool, style, distance })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

.filter-content {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.filter-logo {
  height: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.filter-container {
  height: 60%;
  width: 100%;
}

.input-row {
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin: 2% 0 2% 0;
}

.big-input {
  width: 30%;
}

.invisible {
  visibility: hidden;
}

.small-input {
  width: 15%;
}

.link {
  color: inherit;
}

.submit-button {
  width: 100%;
}

</style>
