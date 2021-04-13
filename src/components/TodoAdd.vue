<template>
  <div id="todoAdd" class="grid grid-cols-8 gap-4">
      <input type="text" class="col-span-8 border border-black px-2 pt-0.5 rounded-md text-xs" v-model="title">
      <input type="date" class="col-span-4 text-xs" v-model="date">
      <button class="w-full h-full bg-green-400 text-xs col-start-7 col-span-2 hover:bg-green-500" @click="submit">Submit</button>
  </div>
  <ul class="text-red-500 font-light text-xxs">
    <li v-for="(error, index) in errors" :key="index">
      {{ error }}
    </li>
  </ul>
</template>

<script>
export default {
  name: "TodoAdd",
  data() {
    return {
      title: null,
      date: null,
      errors: []
    }
  },
  methods: {
    submit(){
      if (this.title == null || this.date == null) {
        this.errors.push("Please fill the information");
      } else{
        this.$emit("submit", this.title, this.date);
        this.errors = [];
      }
    }
  },
}
</script>

<style>

</style>