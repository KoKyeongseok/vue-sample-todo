<template lang="pug">
  #app
    app-input
    app-todos
    app-info
</template>

<script>
import appInput from './Input.vue'
import appTodos from './Todos.vue'
import appInfo from './Info.vue'

export default {
  components: { appInput, appTodos, appInfo },
  data () {
    return {
    }
  }
}
</script>

<style lang="sass">
body
  padding: 0
  margin: 0

#app
  display: flex
  flex-direction: column
</style>
