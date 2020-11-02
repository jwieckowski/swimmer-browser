<template>
  <div class="selection-results">
    <div class='selection-info'>
      <div>
        <span>{{swimmersAmount}}</span>
        <span>{{$store.state.lineUpInfo.swimmersAmount}}</span>
      </div>
      <div>
        <span>{{startsAmount}}</span>
        <span>{{$store.state.lineUpInfo.startsAmount}}</span>
      </div>
      <div>
        <span>{{pointsPrediction}}</span>
        <span>{{$store.state.lineUpInfo.sumPoints}}</span>
      </div>
    </div>
    <div class="results-place">
      <div class="label rounded">{{logo}}</div>
      <div class="results-table">
        <b-list-group>
          <b-list-group-item v-if="!$store.state.lineUp|| !$store.state.lineUp.length"
            class="list-item-time"
          >
            {{errorMessage}}
          </b-list-group-item>
          <b-list-group-item v-else
            class="list-item"
            v-for="(event, index) in $store.state.lineUp"
            :key="index"
          >
            <span>{{event[0]}}</span>
            <span>{{event[1]}}</span>
            <div v-if="$store.state.lineUpInfo.points">
              <span>{{points}}</span>
              <span>{{$store.state.lineUpInfo.points[index]}}</span>
            </div>
          </b-list-group-item>
        </b-list-group>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'selection-results',
  data () {
    return {
      logo: 'Line Up Selection',
      errorMessage: 'Something went wrong',
      swimmersAmount: 'Swimmers amount:',
      startsAmount: 'Starts amount:',
      pointsPrediction: 'Points prediction:',
      points: 'Points: '
    }
  },
  created () {
    if (!this.$store.state.lineUp || this.$store.state.lineUp.length === 0) {
      this.$router.back(-1)
    }
  }
}
</script>

<style>


.selection-results {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.selection-info {
  width: 100%;
  height: 30%;
  max-height: 30%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-weight: 600;
  font-size: 1.3rem;
}

.results-place {
  width: 70%;
  height: 50%;
  max-height: 50%;
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
