<template>
  <div class="filter-content">
    <div class="logo">
      <h1>{{logo}}</h1>
    </div>
    <div class="input-row">
      <b-form-input v-model="name" class="big-input" placeholder="Enter your name"></b-form-input>
      <b-form-input v-model="text" class="small-input" placeholder="Age"></b-form-input>
      <b-form-input v-model="text" class="small-input" placeholder="Sex"></b-form-input>
    </div>
    <div class="input-row">
      <div class="big-input invisible"></div>
      <b-form-input v-model="text" class="small-input" placeholder="Season"></b-form-input>
      <b-form-input v-model="text" class="small-input" placeholder="Pool type"></b-form-input>
    </div>
    <div class="input-row">
      <div class="big-input invisible"></div>
      <b-form-input v-model="text" class="small-input" placeholder="Distance"></b-form-input>
      <b-form-input v-model="text" class="small-input" placeholder="Style"></b-form-input>
    </div>
    <div class="input-row">
      <div class="big-input invisible"></div>
      <div class="small-input invisible"></div>
      <b-button class="small-input" variant="primary">Search</b-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'filter-content',
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

.logo {
  height: 20%;
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

</style>
