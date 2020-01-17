<template lang="pug">
  section.desk
    .desk-table(ref="table")
      button.desk-cell(
        v-for="(cell, i) in MAX_CELLS_NUMBER"
        :key="i"
        :data-id="i"
        @click="cellClickHandler"
        ref="cells"
        type="button"
      ) {{i}}

</template>

<script>
import { getRandomInt } from '@/helpers/utils'

export default {
  data: () => ({
    NEW_BALLS_NUMBER: 5,
    MAX_CELLS_NUMBER: 100,
    currentBallsIndexes: new Set([]),
    nextBallsIndexes: new Set([]),
    isCellClicked: false
  }),
  methods: {
    generateBalls (indexes, className) {
      debugger
      const balls = new Set()

      while (balls.size < this.NEW_BALLS_NUMBER) {
        const ball = getRandomInt(0, this.MAX_CELLS_NUMBER - 1)

        if (!indexes.has(ball)) {
          balls.add(ball)
        }
      }

      indexes = balls
      indexes.forEach(idx => {
        this.$refs.cells[idx].classList.add(`${className}`)
      })
    },
    cellClickHandler (e) {
      debugger
      const id = +e.currentTarget.dataset.id

      if (this.currentBallsIndexes.has(id)) {
        e.currentTarget.classList.add('active')
      }

      if (this.isCellClicked) {

      }
    }
  },
  mounted () {
    this.generateBalls(this.currentBallsIndexes, 'current')
    this.generateBalls(this.nextBallsIndexes, 'next')

    console.log(this.currentBallsIndexes)
    console.log(this.nextBallsIndexes)
  }
}
</script>

<style lang="scss" scoped>
.desk {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 100vmin;
  max-height: 100vmin;
  border: 5px solid #00000010;
}

.desk-table {
  display: flex;
  flex-wrap: wrap;
  width: 500px;
  height: 500px;
}

.desk-cell {
  width: 50px;
  height: 50px;
  border: 3px solid #00000010;
  background-color: transparent;
  cursor: pointer;

  &.current {
    border-color: #ff0000;
  }

  &.next {
    border-color: #ff000050;
  }

  &.active {
    border-color: #00ff00;
  }
}
</style>
