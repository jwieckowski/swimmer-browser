<template>
  <div class="results">
    <div class="results-place">
      <div class="label rounded">{{swimmers}}</div>
      <div class="results-table">
        <b-list-group>
          <b-list-group-item v-if="!$store.state.swimmers || !$store.state.swimmers.length"
            class="list-item-time"
          >
            {{notFoundSwimmer}}
          </b-list-group-item>
          <b-list-group-item v-else
            class="list-item"
             v-for="swimmer in $store.state.swimmers"
            :key="swimmer.id"
            v-bind:class="{'list-item-active': swimmer.id === $store.state.activeID}"
            v-on:click="changeActiveSwimmer(swimmer.id)"
          >
            <span>{{swimmer.name}}</span>
            <router-link
              :to="`/details/${swimmer.id}`"
            >
              <el-button
                v-on:click="changeActiveSwimmer(swimmer.id)"
              >
                <b-icon class="icon-list" icon="person-lines-fill" aria-hidden="true" scale="1.25"></b-icon>
              </el-button>
            </router-link>
          </b-list-group-item>
        </b-list-group>
      </div>
    </div>
    <div class="results-place">
      <div class="label rounded">{{events}}</div>
      <div class="results-table">
        <b-list-group>
          <b-list-group-item v-if="!$store.state.swimmers || !$store.state.swimmers.length"
            class="list-item-time"
          >
            {{notFoundTimes}}
          </b-list-group-item>
            <b-list-group-item v-else class="list-item-time" v-for="(time, index) in times" :key="index">
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
  name: 'results',
  data () {
    return {
      logo: 'Find a swimmer',
      swimmers: 'Swimmers list',
      events: 'Events',
      notFoundSwimmer: 'Record with given filter options was not found',
      notFoundTimes: 'No times available'
    }
  },
  computed: {
    times: function () {
      return this.$store.getters.swimmersLength() !== 0 && this.$store.state.swimmers.filter(swimmer => swimmer.id === this.$store.state.activeID)[0].times
    }
  },
  methods: {
    changeActiveSwimmer (id) {
      this.$store.commit('update', id)
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
  display: flex;
  justify-content: space-between;
  color: initial;
}

.icon-list {
  color: initial;
}

.list-item-active {
  background-color: aqua;
}

.list-item-time {
  display: flex;
  justify-content: space-evenly;
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
