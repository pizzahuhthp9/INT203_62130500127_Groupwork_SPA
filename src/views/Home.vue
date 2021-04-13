<template>
  <div class="mx-40">
    <todo-add></todo-add>
    <todo-list class="mt-8"></todo-list>
  </div>
</template>

<script>
import TodoAdd from "@/components/TodoAdd.vue";
import TodoList from "@/components/TodoList.vue";
export default {
  name: 'Home',
  components: {
    TodoAdd,
    TodoList
  }
}
</script>
