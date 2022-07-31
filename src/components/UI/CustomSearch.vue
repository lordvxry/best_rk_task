<template>
  <input class="customSearch"
         type="text"
         :value="modelValue"
         @input="updateSearch"
  />
</template>

<script>
export default {
  name: "custom-search",
  props: {
      modelValue: [String, Number]
  },
  methods: {
    updateSearch(event) {
      this.$emit("update:modelValue", event.target.value)
    },
  }
}
</script>

<style scoped>
.customSearch{
  width: 40%;
  padding: 10px 15px;
  border: 2px solid teal;
  border-radius: 4px;
}

</style>