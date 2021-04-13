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
import axios from "axios";
export default {
  name: "TodoList",
  components: {
    TodoCard,
  },
  data() {
    return {
      todos: null,
    };
  },
  methods: {
    stringToDate(stringDate) {
      return new Date(stringDate);
    },
  },
  mounted() {
    axios.get("http://localhost:3000/todo").then((result) => {
      this.todos = result.data;
    });
  },
};
</script>

<style></style>
