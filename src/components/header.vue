<template>
  <header class="header">
    <h1>todos</h1>
    <input class="new-todo" placeholder="What needs to be done?" autofocus v-model="value" @keyup.enter="addList">
  </header>
</template>

<script>
export default {
  data () {
    return {
      value:'',
    }
  },
  methods: {
    addList () {
      this.$store.commit('addList',{text:this.value})
      this.value = ""
    }
  }
}
</script>

<style>

</style>
