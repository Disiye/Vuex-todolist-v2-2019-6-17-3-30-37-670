<template>
  <footer class="footer">
      <span class="todo-count"><strong>{{unComplete}}</strong> item left</span>
      <ul class="filters">
        <li>
          <a class="selected">All</a>
        </li>
        <li>
          <a>Active</a>
        </li>
        <li>
          <a>Completed</a>
        </li>
      </ul>
      <button class="clear-completed" @click="clearCompletedAsync">Clear completed</button>
    </footer>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: mapGetters(['unComplete']),
  methods: {
    clearCompletedAsync(){
      this.$store.dispatch('clearCompletedAsync')
    }
  }
}
</script>

<style>

</style>
