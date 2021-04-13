<template>
  <div
    id="todoCard"
    class="w-full rounded-lg shadow-sm flex justify-between px-4"
  >
    <div class="flex space-x-2">
      <p class="text-sm">{{ message }}</p>
      <p class="text-xxs self-end text-gray-400 font-light pb-1">{{ getDateString }}</p>
    </div>
    <div class="space-x-1">
        <button class="text-xxs p-0.5 bg-gray-400">edit</button>
        <button class="text-xxs p-0.5 bg-red-500">delete</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoCard",
  data() {
    return {
      message: "text",
      date: new Date(),
    };
  },
  computed: {
    getDateString() {
      return this.date.toDateString();
    },
  },
};
</script>

<style></style>
