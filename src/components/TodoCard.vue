<template>
  <div
    id="todoCard"
    class="w-full rounded-lg shadow-sm flex justify-between px-4"
  >
    <div class="flex space-x-2">
      <p class="text-sm">{{ title }}</p>
      <p class="text-xxs self-end text-gray-400 font-light pb-1">{{ getDateString }}</p>
    </div>
    <div class="space-x-1">
        <button class="text-xxs p-0.5 bg-gray-400">edit</button>
        <button class="text-xxs p-0.5 bg-red-500" @click="del">delete</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "TodoCard",
  props:{
    title: String,
    date: Date,
    id: Number
  },
  computed: {
    getDateString() {
      return this.date.toDateString();
    },
  },
  methods: {
    del(){
      axios.delete("http://localhost:3000/todo/" + this.id).then(()=>{
        console.log("deleted");
      })
    }
  },
};
</script>

<style></style>