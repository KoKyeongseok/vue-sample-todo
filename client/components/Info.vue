<template lang="pug">
  #info
    .title 총 목표 달성률
    .label {{ $store.getters.completeRate }}%
</template>

<script>
export default {
  data: function () {
    return {
      label: 'Hello, World'
    }
  }
}
</script>

<style lang="sass">
#info
  display: flex
  padding: 1em

  .title
    color: rgba(0, 0, 0, .9)
    padding-right: .4em

  .label
    color: rgba(0, 0, 0, .4)
</style>
