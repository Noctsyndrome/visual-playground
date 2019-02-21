<template>
  <div class="about">
    <h1>Animejs Playground</h1>
    <div class="board" ref="boardOne">board #1</div>
    <div class="board" ref="boardTwo">board #2</div>
    <div class="charging">
      Battery Charging: 
      <span :class="battery.status">{{ battery.power }}</span>
    </div>
    <div>
      <button @click="startCharge">Plugin</button>
      <button @click="stopCharge">Unplug</button>
      <button @click="reCharge">Replug</button>
    </div>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: "Anime",
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
    // this.movingBlock()
    // this.charging()
    this.actions.charging = this.charging()

  },
  methods: {
    movingBlock: function () {
      let t1 = anime.timeline({
        easing: 'easeOutExpo',
        direction: 'alternate',
        loop: true
      })

      t1.add({
        targets: this.$refs.boardOne,
        translateX: 250
      }).add({
        targets: this.$refs.boardTwo,
        translateX: -250
      })


      // anime({
      //   targets: this.$refs.theBoard,
      //   keyframes: [
      //     {translateX: 250},
      //     {translateX: 0},
      //     {translateX: -250}
      //   ],
      //   loop: true
      // });
    },
    charging: function () {
      return anime({
        targets: this.battery,
        power: 100,
        easing: 'easeOutQuart',
        round: 1,
        duration: 4000,
        direction: 'alternate',
        loop: true,
        autoplay: false,
        update: () => {
          if (this.battery.power >= 80) {
            this.battery.status = 'high'
          } else if (this.battery.power < 20) {
            this.battery.status = 'low'
          } else {
            this.battery.status = 'medium'
          }
        }        
      })
    },
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

.board {
  background-color: #03A9F4;
  color: white;
  height: 24px;
  line-height: 24px;
  display: inline-block;
  padding: 0 8px;
}

.charging
  .low
    color #F44336
  .medium
    color #ffeb3b 
  .high
    color #4caf50
     

</style>
