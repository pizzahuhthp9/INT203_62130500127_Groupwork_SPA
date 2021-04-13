<template>
  <div class="flex flex-col space-y-4">
    <input type="text" class="w-full border border-black rounded-lg text-sm px-2 py-0.5" v-model="title">
    <input type="date" class="text-xs w-2/5" v-model="date">
    <button class="bg-green-300 self-end text-sm px-4 py-1 hover:bg-green-500" @click="submit">submit</button>
    <ul class="text-red-500 font-light text-xxs">
    <li v-for="(error, index) in errors" :key="index">
      {{ error }}
    </li>
  </ul>
  </div>
</template>

<script>
import axios from "axios"
export default {
    name: "EditTodo",
    data() {
        return {
            title: null,
            date: null,
            id: null,
            errors: []
        }
    },
    methods: {
        submit(){
            if (this.title == null || this.date == null) {
                this.errors.push("Please fill the information")
            } else{
                axios.put(`http://localhost:3000/todo/${this.id}`,{
                    title: this.title,
                    date: this.date
                }).then(()=>{
                    this.$router.push("/");
                });
                
            }
        }
    },
    mounted() {
        axios.get(`http://localhost:3000/todo/${this.$route.params.id}`).then((result)=>{
            this.title = result.data.title;
            this.date = result.data.date;
            this.id = result.data.id;
        });
    },

}
</script>

<style>

</style>