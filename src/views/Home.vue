<template>
  <div class="mx-40">
    <todo-add @submit="post"></todo-add>
    <todo-list class="mt-8"></todo-list>
  </div>
</template>

<script>
import TodoAdd from "@/components/TodoAdd.vue";
import TodoList from "@/components/TodoList.vue";
import axios from "axios";
export default {
  name: 'Home',
  methods: {
    post(title, date){
      axios.post(" http://localhost:3000/todo", {
        title: title,
        date: date
      }).then(()=>{
        console.log("post succesful");
      })
    }
  },
  components: {
    TodoAdd,
    TodoList
  }
}
</script>
