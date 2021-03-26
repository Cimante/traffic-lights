<template>
  <div :class="lampClasses">
    <div class="lamp_counter" v-if="lampIsOn">
      {{ sec }}  
    </div>   
  </div>
</template>

<script>
export default {
  name: 'Lamp',
  props: ['color', 'currentColorOn', 'sec'],
  computed: {
    lampIsOn() {
      return this.color === this.currentColorOn
    },
    lampClasses() {
      return `
      lamp
      lamp_${this.color}
      ${this.lampIsOn ? 'lamp_on' : ''}
      ${this.lampIsOn && this.sec <= 3 ? 'lamp_blink' : ''}`
    }
  }
}
</script>

<style lang="sass">
@keyframes blink
  to 
    opacity: .5

.lamp
  color: white
  opacity: .5
  &_green
    background-color: #17C671
  &_yellow
    background-color: #FFB400
  &_red 
    background-color: #C4183C
  &_on 
    opacity: 1
  &_counter 
    display: flex
    align-items: center
    text-align: center
    font-size: 1.6rem
    font-family: sans-serif
    text-shadow: 1px 1px 1px black
  &_blink 
    animation: blink .5s steps(20, start) infinite
</style>