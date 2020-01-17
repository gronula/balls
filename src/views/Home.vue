<template lang="pug">
  main
    Desk

</template>

<script>
export default {
  name: 'home',
  components: {
    Desk: () => import('../components/Desk.vue')
  }
}
</script>

<style lang="scss" scoped>
main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
</style>
