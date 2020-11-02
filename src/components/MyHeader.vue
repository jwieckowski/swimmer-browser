<template>
  <div class="my-header">
    <div class="icons">
      <router-link to="/" exact="/">
        <b-icon class="icon" icon="house-fill" aria-hidden="true" scale="1.25"></b-icon>
      </router-link>
      <router-link to="/filters">
        <b-icon class="icon" icon="ui-radios" aria-hidden="true" scale="1.25"></b-icon>
      </router-link>
      <router-link to="/selection">
        <b-icon class="icon" icon="columns-gap" aria-hidden="true" scale="1.25"></b-icon>
      </router-link>
      <router-link to>
        <el-button @click="$router.back(-1)">
          <b-icon class="icon" icon="arrow90deg-left" aria-hidden="true" scale="1.25"></b-icon>
        </el-button>
      </router-link>
    </div>
    <div class="page-logo">
      <span>{{msg}}</span>
    </div>
    <div class="icons"></div>
  </div>
</template>
<script>
export default {
  name: 'my-header',
  data () {
    return {
      msg: 'Swimmer Browser'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

.my-header {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icons {
  width: 25%;
  display: flex;
  justify-content:space-around;
}

.icon {
  color: #ffffff;
}

.page-logo {
  width: 50%;
  text-align: center;
}

</style>
