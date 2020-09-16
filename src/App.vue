<template>
  <div id="app">
    <header>
      <my-header></my-header>
    </header>
    <main>
      <router-view></router-view>
    </main>
    <footer>
      <my-footer></my-footer>
    </footer>
  </div>
</template>

<script>

import MyHeader from './components/MyHeader'
import MyFooter from './components/MyFooter'

import FilterContent from './components/FilterContent'
import HomePage from './components/HomePage'
import Results from './components/Results'
import SwimmerDetails from './components/SwimmerDetails'

export default {
  name: 'app',
  components: {
    MyHeader,
    MyFooter,
    HomePage,
    FilterContent,
    Results,
    SwimmerDetails
  }
}
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100vh;
  width: 100vw;
  box-sizing: border-box;
}

main {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 86%;
}

header {
  margin: 0;
  height: 7%;
  background-color: #35495E;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
}

header span {
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
}

footer {
  height: 7%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
