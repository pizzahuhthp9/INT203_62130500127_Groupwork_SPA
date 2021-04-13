<template>
  <div class="mx-40">
    <todo-add></todo-add>
  </div>
</template>

<script>
import TodoAdd from "@/components/TodoAdd.vue";

export default {
  name: 'Home',
  components: {
    TodoAdd
  }
}
</script>
