<template lang="pug">
  #input
    input(type="text", v-model="input", placeholder="할 일 내용을 입력해주세요")
    button(@click="addTodos()") 추가
</template>

<script>
export default {
  data: function () {
    return {
      input: ''
    }
  },
  methods: {
    addTodos () {
      this.$store.commit('addTodo', this.input)
      this.input = ''
    }
  }
}
</script>

<style lang="sass">
#input
  box-sizing: border-box
  display: flex
  padding: 1em
  width: 100vw

  input
    border: 0
    border-radius: .2em
    box-sizing: border-box
    background: rgba(0, 0, 0, .05)
    color: rgba(0, 0, 0, .7)
    font-size: 1.2em
    flex: 1
    height: 2em
    outline: none
    padding: .5em

  button
    background: #98C905
    border: 0
    border-radius: .2em
    box-sizing: border-box
    color: rgba(255, 255, 255, .9)
    cursor: pointer
    font-size: 1.2em
    height: 2em
    padding: .3em
    margin-left: .4em
    outline: none
</style>
