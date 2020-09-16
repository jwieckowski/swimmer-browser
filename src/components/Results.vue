<template>
  <div class="results">
    <div class="results-place">
      <div class="label rounded">Swimmers list</div>
      <div class="results-table">
        <b-list-group>
          <router-link to="/details/1">
            <b-list-group-item class="list-item">Swimmer 1</b-list-group-item> 
          </router-link>
          <router-link to="/details/2">
            <b-list-group-item class="list-item">Swimmer 2</b-list-group-item> 
          </router-link>
          <router-link to="/details/3">
            <b-list-group-item class="list-item">Swimmer 3</b-list-group-item> 
          </router-link>
          <router-link to="/details/4">
            <b-list-group-item class="list-item">Swimmer 4</b-list-group-item> 
          </router-link>
          <router-link to="/details/5">
            <b-list-group-item class="list-item">Swimmer 5</b-list-group-item> 
          </router-link>
          <router-link to="/details/6">
            <b-list-group-item class="list-item">Swimmer 6</b-list-group-item> 
          </router-link>
          <router-link to="/details/7">
            <b-list-group-item class="list-item">Swimmer 7</b-list-group-item> 
          </router-link>
          <router-link to="/details/8">
            <b-list-group-item class="list-item">Swimmer 8</b-list-group-item> 
          </router-link>
        </b-list-group>
      </div>
    </div>
    <div class="results-place">
      <div class="label rounded">200 Freestyle Short Course</div>
      <div class="results-table">
        <b-list-group>
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
  name: 'results',
  data () {
    return {
      logo: 'Find a swimmer',
      name: '',
      text: '',
      selectedYear: 2010,
      optionsYear: [
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
      ]
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

.list-item-time {
  display: flex;
  justify-content: space-between;
}

</style>
