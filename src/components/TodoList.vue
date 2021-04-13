<template>
  <div id="todoList">
      <todo-card></todo-card>
  </div>
</template>

<script>
import TodoCard from "@/components/TodoCard.vue"
export default {
    name: "TodoList",
    components:{
        TodoCard
    }
}
</script>

<style>

</style>