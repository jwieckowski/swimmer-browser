<template>
  <div class="swimmer-details">
    <div class="results-place">
      <div class="label">Swimmer 1</div>
      <div class="swimmer-info">
        <div class="swimmer-props">
          <span>AGE :</span>
          <span>17</span>
        </div>
        <div class="swimmer-props">
          <span>GENDER :</span>
          <span>MALE</span>
        </div>
      </div>
    </div>
    <div class="results-place">
      <div>
        <b-input-group>
          <b-form-select v-model="selectedSeason" :options="optionsSeason"></b-form-select>
          <b-form-select v-model="selectedPoolType" :options="optionsPoolType"></b-form-select>
          <b-form-select v-model="selectedStyle" :options="optionsStyle"></b-form-select>
          <b-form-select v-model="selectedDistance" :options="optionsDistance"></b-form-select>
        </b-input-group>
      </div>
      <div class="results-table">
        <b-list-group>
          <b-list-group-item class="list-item-time">
            <span>1:54.23</span>
            <span>11.06.2015</span>
          </b-list-group-item>
          <b-list-group-item class="list-item-time">
            <span>1:54.23</span>
            <span>11.06.2015</span>
          </b-list-group-item>
          <b-list-group-item class="list-item-time">
            <span>1:54.23</span>
            <span>11.06.2015</span>
          </b-list-group-item>
          <b-list-group-item class="list-item-time">
            <span>1:54.23</span>
            <span>11.06.2015</span>
          </b-list-group-item>
          <b-list-group-item class="list-item-time">
            <span>1:54.23</span>
            <span>11.06.2015</span>
          </b-list-group-item>
          <b-list-group-item class="list-item-time">
            <span>1:54.23</span>
            <span>11.06.2015</span>
          </b-list-group-item>
          <b-list-group-item class="list-item-time">
            <span>1:54.23</span>
            <span>11.06.2015</span>
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
      logo: 'Find a swimmer',
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

</style>
