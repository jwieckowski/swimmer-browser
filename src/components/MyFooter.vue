<template>
  <div class="my-footer">
    <b-link href="#">
      <b-icon icon="mailbox"></b-icon>
    </b-link>
  </div>
</template>
<script>
export default {
  name: 'my-footer',
  data () {
    return {
      msg: 'Welcome to Your Vue.js PWA'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

.my-footer {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
