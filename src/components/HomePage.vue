<template>
  <div class="home-page">
    <div class="logo">
      <h1>{{logo}}</h1>
    </div>
    <div class="home-filter">
      <b-input-group>
        <b-form-input v-model="name" placeholder="Enter swimmer name"></b-form-input>    
        <template v-slot:append>
          <router-link to="/results">
            <b-button v-on:click="filterSwimmers(name)" variant="primary">
              <b-icon icon="search" font-scale="1"></b-icon>
            </b-button>
          </router-link>
        </template>
      </b-input-group>
      <div class="advanced-filters">
        <router-link to="/filters">{{advanced}}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import allSwimmers from '../assets/all_swimmers.json'

export default {
  name: 'home-page',
  data () {
    return {
      logo: 'Find a swimmer',
      advanced: 'Advanced filters',
      name: ''
    }
  },
  methods: {
    filterSwimmers: function (name) {
      console.log(allSwimmers.filter(swimmer => swimmer.name.toLowerCase().includes(name.toLowerCase())))
    }
  }
}
</script>

<style>

.home-page {
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

.home-filter {
  display: flex;
  flex-direction: column;
}

.advanced-filters {
  text-align: end;
  padding-top: 10px;
}

</style>
