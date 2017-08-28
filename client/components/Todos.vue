<template lang="pug">
  #todos
    div(v-for="(item, key) in $store.state.todos")
     todo(:index="key")
</template>

<script>
import todo from './_todo.vue'

export default {
  components: { todo },
  data () {
    return {}
  }
}
</script>

<style lang="sass">
#todos
  padding: 1em
</style>
