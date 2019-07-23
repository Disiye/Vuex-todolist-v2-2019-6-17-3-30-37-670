<template>
  <div id="app">
    <router-view></router-view>
    <!-- <todoHtml></todoHtml> -->
  </div>
</template>

<script>
import todoHtml from '@/components/todoHtml'
export default {
  name: 'App',
  components: {
    todoHtml
  }
}
</script>

<style>
</style>
