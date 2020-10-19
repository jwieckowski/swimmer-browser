<template>
  <div class="swimmer-details">
    <div class="results-place">
      <div class="label">{{currentSwimmer.name}}</div>
      <div class="swimmer-info">
        <div class="swimmer-props">
          <span>AGE :</span>
          <span>{{currentSwimmer.year}}</span>
        </div>
        <div class="swimmer-props">
          <span>GENDER :</span>
          <span>{{currentSwimmer.sex}}</span>
        </div>
      </div>
    </div>
    <div class="results-place">
      <div>
        <b-input-group>
          <b-form-select
            v-model="selectedSeason" :options="optionsSeason"
            v-on:change="filter()"
          ></b-form-select>
          <b-form-select
            v-model="selectedPoolType" :options="optionsPoolType"
          ></b-form-select>
          <b-form-select
            v-model="selectedStyle" :options="optionsStyle"
          ></b-form-select>
          <b-form-select
            v-model="selectedDistance" :options="optionsDistance"
          ></b-form-select>
        </b-input-group>
      </div>
      <div class="results-table">
        <b-list-group>
          <b-list-group-item v-if="!filterTimes || !filterTimes.length"
          class="list-item-time"
          >
            {{notFoundMessage}}
          </b-list-group-item>
          <b-list-group-item v-else
             v-for="(time, index) in filterTimes"
            :key="index"
            class="list-item-time"
          >
            <div class="distance">
              <span>{{time.distance}}</span>
              <span>{{time.style}}</span>
            </div>
            <span class="time">{{time.time}}</span>
            <span class="date">{{time.date}}</span>
          </b-list-group-item>
        </b-list-group>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'swimmer-details',
  data () {
    return {
      notFoundMessage: 'Record with given filter options was not found',
      currentSwimmer: this.$store.state.swimmers.filter(swimmer => swimmer.id === this.$store.state.activeID)[0],
      currentTimes: this.$store.state.swimmers.filter(swimmer => swimmer.id === this.$store.state.activeID)[0].times,
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
  computed: {
    filterTimes () {
      let times = this.currentSwimmer.times
      if (this.selectedSeason) times = times.filter(time => parseInt(time.season) === this.selectedSeason)
      if (this.selectedPoolType) times = times.filter(time => time.pool_type === this.selectedPoolType)
      if (this.selectedStyle && this.selectedDistance) times = times.filter(time => time.style === this.selectedStyle && parseInt(time.distance) === this.selectedDistance)
      else if (this.selectedStyle) times = times.filter(time => time.style === this.selectedStyle)
      else if (this.selectedDistance) times = times.filter(time => parseInt(time.distance) === this.selectedDistance)
      return times
    }
  },
  methods: {
    filter () {
      let times = this.currentSwimmer.times
      if (this.selectedSeason) times = times.filter(time => parseInt(time.season) === this.selectedSeason)
      if (this.selectedPoolType) times = times.filter(time => time.pool_type === this.selectedPoolType)
      if (this.selectedStyle && this.selectedDistance) times = times.filter(time => time.style === this.selectedStyle && parseInt(time.distance) === this.selectedDistance)
      else if (this.selectedStyle) times = times.filter(time => time.style === this.selectedStyle)
      else if (this.selectedDistance) times = times.filter(time => parseInt(time.distance) === this.selectedDistance)
      return times
    }
  }
}
</script>

<style>

.swimmer-details {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.results-place {
  width: 35%;
  height: 40%;
  max-height: 40%;
}

.swimmer-info {
  padding-top: 15px;
}

.swimmer-props {
  display: flex;
  justify-content: space-between;
  padding: 5px 0;
}

.label {
  background-color: cadetblue;
  padding: 5px 0;
  font-weight: 600;
  font-size: 1.5rem;
}

.results-table {
  width: 100%;
  height: 100%;
  max-height: 100%;
  overflow: auto;
}

.list-item-time {
  display: flex;
  justify-content: space-between;
}

.distance {
  width:30%;
}

.time {
  width:40%;
}

.date {
  width:30%;
}

</style>
