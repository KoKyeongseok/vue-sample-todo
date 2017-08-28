<template lang="pug">
  transition(name="todo")
    .todo
      .title(:class="{'completed': $store.state.todos[index].isCompleted}") {{ $store.state.todos[index].title }}
      .button(v-if="!$store.state.todos[index].isCompleted")
        button(@click="$store.commit('completeTodo', index)") Done
</template>

<script>
export default {
  props: ['index'],
  data: function () {
    return {}
  }
}
</script>

<style lang="sass">
.todo
  display: flex
  padding: .2em 0

  .title
    flex: 1

    &.completed
      color: rgba(0, 0, 0, .3)
      text-decoration: line-through
  
  .button
    width: 2.8em

    button
      width: 100%

.todo-fade-enter-active
  transition: all .3s ease

.todo-fade-leave-active
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0)

.todo-fade-enter, .todo-fade-leave-to
  transform: translateX(10px)
  opacity: 0

</style>
