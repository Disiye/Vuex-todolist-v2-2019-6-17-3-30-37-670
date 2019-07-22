<template>
    <section class="main">
      <input id="toggle-all" class="toggle-all" type="checkbox">
      <label for="toggle-all">Mark all as complete</label>
      <ul class="todo-list">
        <li :class="{completed:item.complete}" v-for="item in todoList" :key="item.id">
          <div class="view">
            <input class="toggle" type="checkbox" :checked='item.complete' @change="changeState({id:item.id})">
            <label>{{item.text}}</label>
            <button class="destroy" @click="deleteList({id:item.id})"></button>
          </div>
          <input class="edit" value="Create a TodoMVC template">
        </li>
      </ul>
    </section>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  computed: mapState(['todoList']),
  methods: mapMutations(['deleteList','changeState']),
}
</script>

<style>

</style>
