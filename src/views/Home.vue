<template>
  <div class="mx-40">
    <todo-add @submit="post"></todo-add>
    <todo-list :todos="todos" class="mt-8"></todo-list>
  </div>
</template>

<script>
import TodoAdd from "@/components/TodoAdd.vue";
import TodoList from "@/components/TodoList.vue";
import axios from "axios";
export default {
  name: 'Home',
  data() {
    return {
      todos: null
    }
  },
  methods: {
    post(title, date){
      axios.post(" http://localhost:3000/todo", {
        title: title,
        date: date
      }).then(()=>{
        this.get();
        console.log("post succesful");
      })
    },
    get(){
      axios.get("http://localhost:3000/todo").then((result) => {
        this.todos = result.data;
      });
    }
  },
  mounted() {
    this.get();
  },
  components: {
    TodoAdd,
    TodoList
  }
}
</script>
