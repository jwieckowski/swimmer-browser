<template>
  <div class="results">
    <div class="results-place">
      <div class="label rounded">Swimmers list</div>
      <div class="results-table">
        <b-list-group>
          <router-link
            to='/details/1'
            v-for="swimmer in swimmers"
            :key="swimmer.id"
          >
            <b-list-group-item
              class="list-item"
              v-bind:class="{'list-item-active': swimmer.id === activeID}"
            >
                {{swimmer.name}}
            </b-list-group-item> 
          </router-link>
        </b-list-group>
      </div>
    </div>
    <div class="results-place">
      <div class="label rounded">200 Freestyle Short Course</div>
      <div class="results-table">
        <b-list-group>
            <b-list-group-item class="list-item-time" v-for="(time, index) in times" :key="index">
            <span>{{time.time}}</span>
            <span>{{time.date}}</span>
          </b-list-group-item>
        </b-list-group>
      </div>
    </div>
  </div>
</template>

<script>

import allSwimmers from '../assets/all_swimmers.json'

export default {
  name: 'results',
  data () {
    return {
      logo: 'Find a swimmer',
      name: '',
      text: '',
      swimmers: allSwimmers,
      activeID: 1,
      activeSwimmer: allSwimmers[0]
    }
  },
  computed: {
    times: function () {
      return this.swimmers.filter(swimmer => swimmer.id === this.activeID)[0].times
    }
  }
}
</script>

<style>


.results {
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

.results-table {
  width: 100%;
  height: 100%;
  max-height: 100%;
  overflow: auto;
}

.label {
  background-color: cadetblue;
  padding: 5px 0;
  font-weight: 600;
  font-size: 1.5rem;
}

.list-item {
  text-align: start;
  color: initial;
}

.list-item-active {
  background-color: aqua;
}

.list-item-time {
  display: flex;
  justify-content: space-between;
}

</style>
