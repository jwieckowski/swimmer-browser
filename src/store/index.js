import Vue from 'vue'
import Vuex from 'vuex'
import swimmers from '../assets/all_swimmers.json'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    swimmers: swimmers,
    activeID: 1
  },
  getters: {
    basicFilterSwimmers: (state) => (name) => {
      state.swimmers = state.swimmers.filter(swimmer => swimmer.name.toLowerCase().includes(name.toLowerCase()))
      state.activeID = state.swimmers[0].id
    },
    swimmersLength: (state) => () => {
      return state.swimmers.length
    }
  },
  mutations: {
    update (state, id) {
      state.activeID = id
    },
    filter (state, name) {
      state.swimmers = state.swimmers.filter(swimmer => swimmer.name.toLowerCase().includes(name.toLowerCase()))
      state.activeID = state.swimmers[0].id
    },
    advancedFilter (state, options) {
      const { name, year, gender, season, pool, style, distance } = options
      let filteredSwimmers = state.swimmers.filter(swimmer => swimmer.name.toLowerCase().includes(name.toLowerCase()))
      if (year) filteredSwimmers = filteredSwimmers.filter(swimmer => parseInt(swimmer.year) === year)
      if (gender) filteredSwimmers = filteredSwimmers.filter(swimmer => swimmer.sex === gender)
      if (season) filteredSwimmers = filteredSwimmers.filter(swimmer => swimmer.times.some(record => parseInt(record.season) === season))
      if (pool) filteredSwimmers = filteredSwimmers.filter(swimmer => swimmer.times.some(record => record.pool_type === pool))
      if (style && distance) filteredSwimmers = filteredSwimmers.filter(swimmer => swimmer.times.some(record => record.style === style && parseInt(record.distance) === distance))
      else if (style) filteredSwimmers = filteredSwimmers.filter(swimmer => swimmer.times.some(record => record.style === style))
      else if (distance) filteredSwimmers = filteredSwimmers.filter(swimmer => swimmer.times.some(record => parseInt(record.distance) === distance))
      state.swimmers = filteredSwimmers
      state.activeID = filteredSwimmers.length !== 0 && filteredSwimmers[0].id
    },
    clearFilters (state) {
      state.swimmers = swimmers
    }
  }
})

export default store
