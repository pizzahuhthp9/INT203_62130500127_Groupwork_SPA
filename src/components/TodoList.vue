<template>
  <div id="todoList">
    <todo-card
      v-for="todo in todos"
      :key="todo.id"
      :title="todo.title"
      :date="stringToDate(todo.date)"
      :id="todo.id"
    ></todo-card>
  </div>
</template>

<script>
import TodoCard from "@/components/TodoCard.vue";
export default {
  name: "TodoList",
  components: {
    TodoCard,
  },
  props:{
      todos: Array
  },
  methods: {
    stringToDate(stringDate) {
      return new Date(stringDate);
    },
  },
  
};
</script>

<style></style>
