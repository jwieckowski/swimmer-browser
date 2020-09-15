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
          <b-form-select v-model="selected" :options="options"></b-form-select>
          <b-form-select v-model="selected" :options="options"></b-form-select>
          <b-form-select v-model="selected" :options="options"></b-form-select>
          <b-form-select v-model="selected" :options="options"></b-form-select>
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
      selected: null,
      options: [
        { value: null, text: 'Please select an option' },
        { value: 'a', text: 'This is First option' },
        { value: 'b', text: 'Selected Option' },
        { value: { C: '3PO' }, text: 'This is an option with object value' },
        { value: 'd', text: 'This one is disabled', disabled: true }
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
