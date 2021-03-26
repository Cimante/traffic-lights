<template>
  <div class="wrapper">
    <Lamp class="lamp" :color="'red'" :currentColorOn="currentColorOn" :sec="counter" />
    <Lamp class="lamp" :color="'yellow'" :currentColorOn="currentColorOn" :sec="counter" />
    <Lamp class="lamp" :color="'green'" :currentColorOn="currentColorOn" :sec="counter" />
  </div>
</template>

<script>
import Lamp from '@/components/Lamp.vue';

export default {
  name: 'Home',
  props: ['currentColorOn', 'time'],
  components: {
    Lamp
  },
  data() {
    return {
      counter: null,
      interval: null
    }
  },
  computed: {
    getNextColor() {
      this.$store.commit('setNextColor', this.currentColorOn);
      return this.$store.state.nextColor
    }
  },
  watch: {
    $route() {
      this.setTimer()
    }
  },
  mounted() {
    this.setTimer()
  },
  methods: {
    setTimer() {
      // const timer = this.time;
      setTimeout(() => this.$router.push(this.getNextColor), this.time)
      this.counter = this.time / 1000;

      if (this.interval) clearInterval(this.interval)
      this.interval = setInterval(() => {
        this.counter -= 1;
      }, 1000)
    }
  }
}
</script>

<style lang="sass">
.wrapper
  margin: auto auto
  width: 80px
  padding: 10px 
  background-color: #3d3d3d
  border: 1px solid #3d3d3d
  border-radius: 7px

.lamp 
  width: 70px
  height: 70px
  margin: 10px auto 
  border-radius: 7px
  display: flex 
  justify-content: center
</style>