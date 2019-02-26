<template>
  <div class="about">
    <h1>Threejs Playground</h1>
    <div class="board" ref="boardOne">board #1</div>
  </div>
</template>

<script>
export default {
  name: "Three",
  data() {
    return {
      battery: {
        power: 0,
        status: 'empty'
      },
      actions: {

      }
    };
  },
  mounted() {

  },
  methods: {
     startCharge: function () {
      this.actions.charging.play()
    },
    stopCharge: function () {
      this.actions.charging.pause()
    },
    reCharge: function () {
      this.actions.charging.restart()
    },    
  }
};
</script>

<style lang="stylus" scoped>
.about div
  margin-bottom 12px

</style>
