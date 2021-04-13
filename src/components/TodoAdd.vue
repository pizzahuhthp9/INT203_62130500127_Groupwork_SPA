<template>
  <div id="todoAdd" class="grid grid-cols-8 gap-4">
      <input type="text" class="col-span-8 border border-black px-2 pt-0.5 rounded-md text-xs">
      <input type="date" class="col-span-4 text-xs">
      <button class="w-full h-full bg-green-400 text-xs col-start-7 col-span-2 hover:bg-green-500">Submit</button>
  </div>
</template>

<script>
export default {
  name: "TodoAdd"
}
</script>

<style>

</style>